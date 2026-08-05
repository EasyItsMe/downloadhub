from fastapi import APIRouter, HTTPException, BackgroundTasks
from fastapi.responses import FileResponse
from app.schemas.download import URLRequest, VideoInfo, FormatInfo
import yt_dlp
import asyncio
import httpx
import imageio_ffmpeg
import os
import tempfile
import uuid

router = APIRouter()

def extract_video_info(url: str) -> dict:
    ydl_opts = {
        'quiet': True,
        'no_warnings': True,
        'skip_download': True,
        'http_headers': {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        }
    }
    
    # Check for cookies.txt in apps/api folder
    import os
    cookie_path = os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))), "cookies.txt")
    if os.path.exists(cookie_path):
        ydl_opts['cookiefile'] = cookie_path

    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        try:
            info = ydl.extract_info(url, download=False)
            return info
        except Exception as e:
            raise Exception(str(e))

@router.post("/info", response_model=VideoInfo)
async def get_video_info(request: URLRequest):
    try:
        url_str = str(request.url)
        
        # --- TIKTOK BYPASS ---
        # yt-dlp struggles with TikTok bot protection, so we use a dedicated API
        if "tiktok.com" in url_str:
            async with httpx.AsyncClient() as client:
                res = await client.post("https://www.tikwm.com/api/", data={"url": url_str, "hd": 1})
                if res.status_code == 200:
                    data = res.json()
                    if data.get("code") == 0:
                        v = data.get("data", {})
                        formats = []
                        if v.get("hdplay") or v.get("play"):
                            formats.append(FormatInfo(
                                format_id="hd", ext="mp4", resolution="HD (No Watermark)", 
                                url=v.get("hdplay") or v.get("play"), vcodec="h264", acodec="aac"
                            ))
                        if v.get("music"):
                            formats.append(FormatInfo(
                                format_id="music", ext="mp3", resolution="Audio", 
                                url=v.get("music"), vcodec="none", acodec="mp3"
                            ))
                        return VideoInfo(
                            id=v.get("id", ""),
                            title=v.get("title", "TikTok Video"),
                            thumbnail=v.get("cover", ""),
                            duration=v.get("duration"),
                            extractor="TikTok",
                            formats=formats
                        )

        # --- DEFAULT ENGINE (yt-dlp) ---
        # Run yt-dlp in a thread to avoid blocking the async event loop
        info = await asyncio.to_thread(extract_video_info, url_str)
        
        # Filter and sort formats
        formats = []
        seen_resolutions = set()
        
        # Sort formats by height (quality) descending, then by filesize
        sorted_formats = sorted(
            info.get('formats', []), 
            key=lambda x: (x.get('height') or 0, x.get('filesize') or x.get('filesize_approx') or 0),
            reverse=True
        )

        for f in sorted_formats:
            if f.get('ext') not in ['mp4', 'webm', 'm4a', 'mp3']:
                continue
                
            vcodec = str(f.get('vcodec', 'none')).lower()
            acodec = str(f.get('acodec', 'none')).lower()
            
            # Treat streams with only album art (mjpeg/images) or explicit audio notes as audio-only
            is_audio_only = vcodec in ['none', 'null', 'mjpeg', 'images'] or str(f.get('format_note', '')).lower() == 'audio only'
            is_video_only = acodec == 'none' and not is_audio_only
            
            if is_audio_only:
                vcodec = 'none'
            
            ext = str(f.get('ext')).lower()
            if is_audio_only and ext == 'mp4':
                ext = 'm4a'
            
            height = f.get('height')
            if is_audio_only:
                resolution = "Audio"
            elif height:
                resolution = f"{height}p"
            else:
                resolution = f.get('format_note') or f.get('format_id') or "Video"
                
            if resolution == "x" or not resolution:
                resolution = "Unknown"

            # Deduplicate by resolution to avoid spamming the user
            dedup_key = f"{resolution}-{ext}"
            if dedup_key in seen_resolutions:
                continue
            seen_resolutions.add(dedup_key)
            
            # Format ID magic for video-only streams
            final_format_id = str(f.get('format_id'))
            if is_video_only:
                final_format_id += "+bestaudio"

            formats.append(FormatInfo(
                format_id=final_format_id,
                ext=ext,
                resolution=resolution,
                filesize=f.get('filesize') or f.get('filesize_approx'),
                url=str(f.get('url', '')),
                vcodec=vcodec,
                acodec=acodec
            ))

        return VideoInfo(
            id=info.get('id', ''),
            title=info.get('title', 'Unknown Title'),
            thumbnail=info.get('thumbnail', ''),
            duration=info.get('duration'),
            extractor=info.get('extractor', 'Unknown'),
            formats=formats
        )
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Failed to fetch video info: {str(e)}")

def remove_file(path: str):
    try:
        os.remove(path)
    except Exception:
        pass

@router.get("/file")
async def download_file(url: str, format_id: str, background_tasks: BackgroundTasks, ext: str = "mp4"):
    try:
        ffmpeg_path = imageio_ffmpeg.get_ffmpeg_exe()
        
        is_audio = ext in ['m4a', 'mp3', 'wav', 'aac']
        
        # Temp output path
        temp_dir = tempfile.gettempdir()
        filename_base = f"snapvid_{uuid.uuid4().hex}"
        outtmpl = os.path.join(temp_dir, f"{filename_base}.%(ext)s")
        out_path = os.path.join(temp_dir, f"{filename_base}.{ext}")

        ydl_opts = {
            'quiet': True,
            'no_warnings': True,
            'format': format_id,
            'outtmpl': outtmpl,
            'ffmpeg_location': ffmpeg_path,
            'http_headers': {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            }
        }
        
        if is_audio:
            ydl_opts['postprocessors'] = [{
                'key': 'FFmpegExtractAudio',
                'preferredcodec': ext,
            }]
        else:
            ydl_opts['merge_output_format'] = ext

        # Check for cookies.txt in apps/api folder
        cookie_path = os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))), "cookies.txt")
        if os.path.exists(cookie_path):
            ydl_opts['cookiefile'] = cookie_path
            
        # TikWM URL handling
        if url.startswith("https://www.tikwm.com"):
            # Since TikWM returns direct mp4 URL, we just proxy download it
            async with httpx.AsyncClient() as client:
                res = await client.get(url)
                with open(out_path, "wb") as f:
                    f.write(res.content)
        else:
            # Standard yt-dlp download and merge
            def run_dl():
                with yt_dlp.YoutubeDL(ydl_opts) as ydl:
                    ydl.download([url])
            await asyncio.to_thread(run_dl)
        
        if background_tasks:
            background_tasks.add_task(remove_file, out_path)
            
        final_filename = f"SnapVid_Audio.{ext}" if is_audio else f"SnapVid_Video.{ext}"
        media_type = f"audio/{ext}" if is_audio else f"video/{ext}"
        
        return FileResponse(
            path=out_path, 
            filename=final_filename,
            media_type=media_type
        )
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Download failed: {str(e)}")

