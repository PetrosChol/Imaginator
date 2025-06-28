import os

from dotenv import load_dotenv
from langchain_groq import ChatGroq
from langchain_openai import ChatOpenAI
from langchain_anthropic import ChatAnthropic

load_dotenv()

openai_key = os.getenv("OPENAI_API_KEY")
anthropic_key = os.getenv("ANTHROPIC_API_KEY")



gpt_4o = ChatOpenAI(model="gpt-4o-2024-08-06", temperature=0.1, api_key=openai_key)

gpt_4o_mini = ChatOpenAI(model="gpt-4o-mini", temperature=0.1, api_key=openai_key)

sonnet = ChatAnthropic(
    model_name="claude-3-5-sonnet-20240620", temperature=0.1, api_key=anthropic_key
)

llama_3_1 = ChatGroq(
    model="llama-3.1-70b-versatile",
    temperature=0.1,
    max_tokens=None,
    timeout=None,
)

