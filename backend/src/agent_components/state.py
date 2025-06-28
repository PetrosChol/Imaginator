import operator
from typing import TypedDict, Dict, Annotated

class OverallState(TypedDict):
    uploaded_image: str
    user_input: str
    image_description: str
    components: Dict[str, str]
    positive_prompt: str
    negative_prompt: str
    score: float
    feedback: str
    counter: int
    cost: Annotated[float, operator.add]
    prompts_dict: Dict[str, str]
    