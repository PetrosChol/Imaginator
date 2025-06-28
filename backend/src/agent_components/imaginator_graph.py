from langgraph.graph import StateGraph, START, END

from src.agent_components.state import OverallState
from src.agent_components.edges import check_counter
from src.agent_components.nodes import user_input_analysis, extract_image_components, craft_prompt, evaluate_prompt, enhance_prompt


graph_builder = StateGraph(OverallState)

# Add nodes to the graph
graph_builder.add_node("UserInputAnalysis", user_input_analysis)
graph_builder.add_node("ExtractImageComponents", extract_image_components)
graph_builder.add_node("CraftPrompt", craft_prompt)
graph_builder.add_node("EvaluatePrompt", evaluate_prompt)
graph_builder.add_node("EnhancePrompts", enhance_prompt)

# Set the flow of the graph
graph_builder.add_edge(START, "UserInputAnalysis")
graph_builder.add_edge("UserInputAnalysis", "ExtractImageComponents")
graph_builder.add_edge("ExtractImageComponents", "CraftPrompt")
graph_builder.add_edge("CraftPrompt", "EvaluatePrompt")

graph_builder.add_conditional_edges(
    "EvaluatePrompt",
    check_counter,
    {"CONTINUE": "CraftPrompt", "END": "EnhancePrompts"},
)

graph_builder.add_edge("EnhancePrompts", END)

# Compile the graph
imaginator_graph = graph_builder.compile()

