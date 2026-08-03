from fastapi import APIRouter
from app.api import download

api_router = APIRouter()

@api_router.get("/health")
def health_check():
    return {"status": "ok"}

api_router.include_router(download.router, prefix="/download", tags=["download"])
