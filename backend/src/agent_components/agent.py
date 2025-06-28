from src.agent_components.imaginator_graph import imaginator_graph
from src.agent_components.imager_graph import imager_graph

def imaginate(user_input: str):
    """Creates multiple prompts for image generation based on User's input."""

    state = {
        "user_input": user_input,
        "counter": 1
    }

    # Invoke the graph to get prompts
    result = imaginator_graph.invoke(
        state,
        {
            "recursion_limit": 150,
        },
    )
    
    return result


def imager(uploaded_image):
    """Creates multiple prompts for image generation based on User's uploaded Image."""
    
    state = {
        "uploaded_image": uploaded_image,
        "counter": 1,
    }
    
    # Invoke the graph to get prompts
    result = imager_graph.invoke(
        state,
        {
            "recursion_limit": 150,
        },
    )
    
    return result