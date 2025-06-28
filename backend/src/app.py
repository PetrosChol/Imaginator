from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import io

from src.agent_components.agent import imaginate, imager
from src.agent_components.nodes import refine_prompt, get_prompt, breakdown_prompt, get_mini_image_prompt
from src.agent_components.utils import resize_and_encode_image

app = FastAPI(
    title="Imaginate",
    description="Turn your imagination into a masterpiece",
    version="1.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class Message(BaseModel):
    message: str
    

@app.get("/")
def home_page():
    return {"Hello": "World"}


@app.post("/imager")
async def agent_imager(file: UploadFile = File(...)):
    try:
        file_content = await file.read()
        encoded_image = resize_and_encode_image(io.BytesIO(file_content))
        image_data_uri = f"data:{file.content_type};base64,{encoded_image}"

        response = imager(image_data_uri)
        response_content = {
            "answer": response["prompts_dict"]
        }

        return JSONResponse(content=response_content, status_code=200)
    
    except Exception as e:
        return JSONResponse(content={"error": str(e)}, status_code=500)
    

@app.post("/mini-imager")
async def agent_mini_imager(file: UploadFile = File(...)):
    try:
        file_content = await file.read()
        encoded_image = resize_and_encode_image(io.BytesIO(file_content))
        image_data_uri = f"data:{file.content_type};base64,{encoded_image}"

        response = get_mini_image_prompt(image_data_uri)
        response_content = {
            "answer": response["prompts"]
        }

        return JSONResponse(content=response_content, status_code=200)
    
    except Exception as e:
        return JSONResponse(content={"error": str(e)}, status_code=500)


@app.post("/imagine", description="Send your thoughts to the Agent")
def agent_imaginate(message: Message):
    try:
        response = imaginate(message.message)
        response_content = {
            "idea": message.message,
            "answer": response["prompts_dict"]
        }
        return JSONResponse(content=response_content, status_code=200)
    except Exception as e:
        return JSONResponse(content={"error": str(e)}, status_code=500)

    
@app.post("/imagine-fast", description="Send your thoughts to the Agent")
def agent_imaginate_fast(message: Message):
    try:
        response = get_prompt(message.message)
        response_content = {
            "idea": message.message,
            "answer": response["prompts"]
        }
        return JSONResponse(content=response_content, status_code=200)
    except Exception as e:
        return JSONResponse(content={"error": str(e)}, status_code=500)


@app.post("/breakdown", description="Break the selected prompt into separate components")
def breakdown(prompt: Message):
    try:
        response = breakdown_prompt(prompt.message)
        response_content = {
            "prompt": prompt.message,
            "components": response["components"]
        }
        return JSONResponse(content=response_content, status_code=200)
    except Exception as e:
        return JSONResponse(content={"error": str(e)}, status_code=500)
    
    
@app.post("/refine", description="Refines the input prompt and returns three alternatives")
def refine(prompt: Message):
    try:
        response = refine_prompt(prompt.message)
        response_content = {
            "prompt": prompt.message,
            "prompts_dict": response["prompts_dict"]
        }
        return JSONResponse(content=response_content, status_code=200)
    except Exception as e:
        return JSONResponse(content={"error": str(e)}, status_code=500)


