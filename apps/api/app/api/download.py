from fastapi import APIRouter, HTTPException
from app.schemas.download import URLRequest, VideoInfo, FormatInfo
import yt_dlp
import asyncio
import httpx

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
        
        # Filter formats
        formats = []
        for f in info.get('formats', []):
            if f.get('ext') not in ['mp4', 'webm', 'm4a']:
                continue
            
            # Simple resolution parsing
            resolution = f.get('format_note') or f"{f.get('width', '')}x{f.get('height', '')}"
            if resolution == "x":
                resolution = "Audio" if f.get('vcodec') == 'none' else "Unknown"

            formats.append(FormatInfo(
                format_id=str(f.get('format_id')),
                ext=str(f.get('ext')),
                resolution=resolution,
                filesize=f.get('filesize') or f.get('filesize_approx'),
                url=str(f.get('url')),
                vcodec=str(f.get('vcodec')),
                acodec=str(f.get('acodec'))
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
