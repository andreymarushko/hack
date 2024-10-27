from contextlib import asynccontextmanager

from fastapi import FastAPI

from datebase import create_tables, delete_tables
from router import router as tasks_router
from schemas import STaskAdd

@asynccontextmanager
async def lifespan(app: FastAPI):
    await delete_tables()
    print("База очищена")
    await create_tables()
    print("База готова")
    yield
    print("Выключение")
    

app = FastAPI(lifespan=lifespan)
app.include_router(tasks_router)



