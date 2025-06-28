from langgraph.graph import StateGraph, START, END

from src.agent_components.state import OverallState
from src.agent_components.edges import check_counter
from src.agent_components.nodes import image_analysis, craft_prompt, evaluate_prompt, enhance_prompt


graph_builder = StateGraph(OverallState)

# Add nodes to the graph
graph_builder.add_node("ImageAnalysis", image_analysis)
graph_builder.add_node("CraftPrompt", craft_prompt)
graph_builder.add_node("EvaluatePrompt", evaluate_prompt)
graph_builder.add_node("EnhancePrompts", enhance_prompt)

# Set the flow of the graph
graph_builder.add_edge(START, "ImageAnalysis")
graph_builder.add_edge("ImageAnalysis", "CraftPrompt")
graph_builder.add_edge("CraftPrompt", "EvaluatePrompt")

graph_builder.add_conditional_edges(
    "EvaluatePrompt",
    check_counter,
    {"CONTINUE": "CraftPrompt", "END": "EnhancePrompts"},
)

graph_builder.add_edge("EnhancePrompts", END)

# Compile the graph
imager_graph = graph_builder.compile()

