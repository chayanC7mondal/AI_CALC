from fastapi import APIRouter

router = APIRouter()

@router.get("/")
async def calculate():
    return {"message": "This is a calculation route"}
