from pydantic import BaseModel, HttpUrl
from typing import List, Optional

class URLRequest(BaseModel):
    url: HttpUrl

class FormatInfo(BaseModel):
    format_id: str
    ext: str
    resolution: str
    filesize: Optional[int] = None
    url: str
    vcodec: str
    acodec: str

class VideoInfo(BaseModel):
    id: str
    title: str
    thumbnail: str
    duration: Optional[float] = None
    extractor: str
    formats: List[FormatInfo]
