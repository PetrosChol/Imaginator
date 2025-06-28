from src.agent_components.state import OverallState
from src.logger import logging


def check_counter(state: OverallState):
    """Checks the number of refinements applied."""

    counter = state["counter"]
    score = state["score"]

    if counter == 5:
        logging.info(f"Reached 5 refinements.")
        return "END"
    elif score > 9:
        logging.info(f"Current score: {score}.")
        return "END"
    else:
        logging.info(f"None of the criteria has been met till now...")
        return "CONTINUE"