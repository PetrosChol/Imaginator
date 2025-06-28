import sys
from typing import Dict

from langchain_core.prompts import ChatPromptTemplate
from langchain_core.messages import SystemMessage, HumanMessage

from src.agent_components.llms import gpt_4o_mini, sonnet, gpt_4o
from src.agent_components.state import OverallState
from src.agent_components.structures import *

from src.logger import logging
from src.exception import CustomException



def image_analysis(state: OverallState):
    """Analyzes User provided Image and returns descriptive components."""
    
    try:
        logging.info("Entered the Image Analysis node.")
        
        # Load Imaginator Prompt
        with open('.//templates//Imager.txt', 'r', encoding='utf-8') as f:
            IMAGER_PROMPT = f.read()
        
        uploaded_image = state["uploaded_image"]
        
        logging.info("Starting Image Analysis.")
        
        messages = [
            SystemMessage(content=IMAGER_PROMPT),
            HumanMessage(
                content=[
                    {
                        "type": "image_url",
                        "image_url": {"url": uploaded_image},
                    },
                ]
            ),
        ]
        
        response = sonnet.with_structured_output(ImageComponentsExtraction).invoke(messages)
        
        components = {
            'main_subject': response.main_subject,
            'style': response.style,
            'effects': response.effects,
            'view_composition': response.view_composition,
            'color_palette': response.color_palette
        }
        
        logging.info("Image Analysis completed successfully!")
        
        return {'components': components}
        
    except Exception as e:
        logging.exception(f"The following error raised while Image analysis: {e}")
        raise CustomException(e, sys)
    

def user_input_analysis(state: OverallState):
    """Analyzes User provided Idea and returns descriptive components."""
    
    try:
        logging.info("Entered the User's Input Analysis node.")
        
        # Load Imaginator Prompt
        with open('.//templates//Imaginator.txt', 'r', encoding='utf-8') as f:
            IMAGINATOR_PROMPT = f.read()
            
        user_input = state["user_input"]
        
        logging.info("Starting User's Input Analysis.")
        
        prompt = ChatPromptTemplate.from_messages(
            [
                ("system", IMAGINATOR_PROMPT),
                (
                    "human",
                    """
                 User Input: {user_input}
                 """,
                ),
            ]
        )
        
        # chain = prompt | gpt_4o_mini.bind_tools([Imaginator])
        chain = prompt | gpt_4o_mini.with_structured_output(Imaginator)
        
        response = chain.invoke(
            {
                "user_input": user_input,
            }
        )
        image_description = response.image_description
        
        # image_description = response.tool_calls[0]['args']   
        # cost = calculate_api_cost(model='gpt_4o_mini', input_tokens=response.usage_metadata['input_tokens'], output_tokens=response.usage_metadata['output_tokens'])
        
        logging.info("User's Input Analysis completed successfully!")
        
        # return {'image_description': image_description, 'cost': cost}
        return {'image_description': image_description}
        
    except Exception as e:
        logging.exception(f"The following error raised while User's Input analysis: {e}")
        raise CustomException(e, sys)
    

def extract_image_components(state: OverallState):
    """Extracts the basic components of provided Image description."""
    
    try:
        logging.info("Entered the Components Extraction node.")
        
        # Load Extractor Prompt
        with open('.//templates//Extractor.txt', 'r', encoding='utf-8') as f:
            EXTRACTOR_PROMPT = f.read()
            
        image_description = state["image_description"]
        
        logging.info("Starting Components Extraction.")
        
        prompt = ChatPromptTemplate.from_messages(
            [
                ("system", EXTRACTOR_PROMPT),
                (
                    "human",
                    """
                 Image Description: {image_description}
                 """,
                ),
            ]
        )
        
        # chain = prompt | gpt_4o_mini.bind_tools([ImageComponentsExtraction])
        chain = prompt | gpt_4o_mini.with_structured_output(ImageComponentsExtraction)
        
        response = chain.invoke(
            {
                "image_description": image_description,
            }
        )
        components = {
            'main_subject': response.main_subject,
            'style': response.style,
            'effects': response.effects,
            'view_composition': response.view_composition,
            'color_palette': response.color_palette
        }
        
        # components = response.tool_calls[0]['args']   
        # cost = calculate_api_cost(model='gpt_4o_mini', input_tokens=response.usage_metadata['input_tokens'], output_tokens=response.usage_metadata['output_tokens'])
        
        logging.info("Components Extraction completed successfully!")
        
        return {'components': components}
        # return {'components': components, 'cost': cost}
        
    except Exception as e:
        logging.exception(f"The following error raised while Components Extraction: {e}")
        raise CustomException(e, sys)
    

def craft_prompt(state: OverallState):
    """Crafts the final Main and Negative Prompts with help from Refiner."""

    try:
        logging.info("Entered the Prompt Crafting node.")
        
        # Load 'Crafter' prompt
        with open('.//templates//Crafter.txt', 'r', encoding='utf-8') as f:
            CRAFTER_PROMPT = f.read()

        components = state["components"]
        feedback = state["feedback"]
        counter = state["counter"]

        logging.info(
            f"Getting into Crafting round no. {counter}"
        )

        prompt = ChatPromptTemplate.from_messages(
            [
                ("system", CRAFTER_PROMPT),
                (
                    "human",
                    """
                 Descriptive Components: {components}
                 Feedback from LLM 2: {feedback}
                 """,
                ),
            ]
        )

        chain = prompt | gpt_4o.with_structured_output(Crafter)
        # chain = prompt | gpt_4o.bind_tools([Crafter])

        response = chain.invoke(
            {
                "components": components,
                "feedback": feedback,
            }
        )

        # cost = calculate_api_cost(model='claude-3-5-sonnet', input_tokens=response.usage_metadata['input_tokens'], output_tokens=response.usage_metadata['output_tokens'])

        # positive_prompt = response.tool_calls[0]['args']['positive_prompt']
        # negative_prompt = response.tool_calls[0]['args']['negative_prompt']
        
        positive_prompt = response.positive_prompt
        negative_prompt = response.negative_prompt
        
        logging.info(
            f"Getting out of Crafting round no.{counter}."
        )

        # return {"positive_prompt": positive_prompt, "negative_prompt": negative_prompt, "cost": cost}
        return {"positive_prompt": positive_prompt, "negative_prompt": negative_prompt}

    except Exception as e:
        logging.exception(
            f"Error during Creation/Refinement of Prompt: {e}"
        )
        raise CustomException(e, sys)


def evaluate_prompt(state: OverallState):

    try:
        logging.info("Entered the Evaluation Prompt node.")
        
        # Load 'Evaluator' prompt
        with open('.//templates//Evaluator.txt', 'r', encoding='utf-8') as f:
            EVALUATOR_PROMPT = f.read()

        components = state["components"]
        positive_prompt = state["positive_prompt"]
        negative_prompt = state["negative_prompt"]
        previous_score = state["score"]
        counter = state["counter"]
        
        logging.info(
            f"Getting into round no. {counter} of Evaluation"
        )

        prompt = ChatPromptTemplate.from_messages(
            [
                ("system", EVALUATOR_PROMPT),
                (
                    "human",
                    """
                 Original Descriptive Components: {components}
                 Positive Prompt: {positive_prompt}
                 Negative Prompt: {negative_prompt}
                 Previous Score: {score}
                 """,
                ),
            ]
        )

        # chain = prompt | gpt_4o.bind_tools([Evaluator])
        chain = prompt | gpt_4o.with_structured_output(Evaluator)

        response = chain.invoke(
            {
                "components": components,
                "positive_prompt": positive_prompt,
                "negative_prompt": negative_prompt,
                "score": previous_score,
            }
        )

        # cost = calculate_api_cost(model='gpt_4o', input_tokens=response.usage_metadata['input_tokens'], output_tokens=response.usage_metadata['output_tokens'])

        # score = response.tool_calls[0]['args']['score']
        # feedback = response.tool_calls[0]['args']['feedback']
        score = response.score
        feedback = response.feedback
        
        logging.info(
            f"Getting out of Evaluation round no.{counter}."
        )
        
        counter += 1

        return {"score": score, "feedback": feedback, "counter": counter}

    except Exception as e:
        logging.exception(f"Error during Refinement of Stable Diffusion Prompt: {e}")
        raise CustomException(e, sys)


def enhance_prompt(state: OverallState):
    """Generates high-quality alternatives of the Main prompt."""
    
    try:
        logging.info("Start Generating Prompts.")
        
        # Load 'Enhancer' prompt
        with open('.//templates//Enhancer.txt', 'r', encoding='utf-8') as f:
            ENHANCER_PROMPT = f.read()
        
        # Load State variables
        initial_prompt = state["positive_prompt"]
        feedback = state["feedback"]
        
        prompt = ChatPromptTemplate.from_messages(
            [
                ("system", ENHANCER_PROMPT),
                ("human", """
                 Initial Prompt: {initial_prompt}
                 Feedback: {feedback}
                 """)
            ]
        )
        # chain = prompt | gpt_4o.bind_tools([Prompts])
        chain = prompt | gpt_4o.with_structured_output(Prompts)
                
        response = chain.invoke(
            {
                "initial_prompt": initial_prompt,
                "feedback": feedback
            }
        )
        
        # cost = calculate_api_cost(model='claude-3-5-sonnet', input_tokens=response.usage_metadata['input_tokens'], output_tokens=response.usage_metadata['output_tokens'])
        
        # prompts_dict = {
        #     'main_prompt': state["positive_prompt"],
        #     'hyper_detailed_prompt': response.tool_calls[0]['args']['hyper_detailed_prompt'],
        #     'composition_and_mood_prompt': response.tool_calls[0]['args']['composition_and_mood_prompt'],
        #     'technical_quality_prompt': response.tool_calls[0]['args']['technical_quality_prompt'],
        #     'negative_prompt': state["negative_prompt"]
        # }
        prompts_dict = {
            'main_prompt': state["positive_prompt"],
            'hyper_detailed_prompt': response.hyper_detailed_prompt,
            'composition_and_mood_prompt': response.composition_and_mood_prompt,
            'technical_quality_prompt': response.technical_quality_prompt,
            'negative_prompt': state["negative_prompt"]
        }
        
        logging.info("Prompt Generation completed.")

        return {"prompts_dict": prompts_dict}

    except CustomException as e:
        logging.exception(f"Following error occured while Generating Prompts: {e}")
        raise CustomException(e, sys)


def breakdown_prompt(positive_prompt: str):
    """Breaks the Main Prompt into it's core components."""
    
    try:
        prompt = ChatPromptTemplate.from_messages(
            [
                ("human", "Prompt: {positive_prompt}")
            ]
        )
        chain = prompt | gpt_4o.with_structured_output(PromptBreakdown)
        
        response = chain.invoke({"positive_prompt": positive_prompt})
        components = {
          'main_subject': response.main_subject,
          'style': response.style,
          'effects': response.effects,
          'view_composition': response.view_composition,
          'color_palette': response.color_palette
        }
        components_list = [item for sublist in list(components.values()) for item in sublist]

        return {"components": components_list}
      
    except Exception as e:
        raise CustomException(e, sys)


    
def refine_prompt(user_prompt: str) -> Dict[str, str]:
    """Takes the prompt chosen by the User and returns three refined alternatives"""
    
    try:
        logging.info("Entered the Prompt Refinement node.")
        
        # Load 'Refiner' prompt
        with open('.//templates//Refiner.txt', 'r', encoding='utf-8') as f:
            REFINER_PROMPT = f.read()
        
        prompt = ChatPromptTemplate.from_messages(
            [
                ("system", REFINER_PROMPT),
                ("human", """
                 Prompt: {prompt}
                 """)
            ]
        )
        # chain = prompt | gpt_4o.bind_tools([PromptRefinement])
        chain = prompt | gpt_4o.with_structured_output(PromptRefinement)
        
        response = chain.invoke(
            {
                "prompt": user_prompt
            }
        )
        
        # cost = calculate_api_cost(model='gpt_4o', input_tokens=response.usage_metadata['input_tokens'], output_tokens=response.usage_metadata['output_tokens'])
        
        # prompts_dict = {
        #     'prompt_1': response.tool_calls[0]['args']['prompt_1'],
        #     'prompt_2': response.tool_calls[1]['args']['prompt_2'],
        #     'prompt_3': response.tool_calls[2]['args']['prompt_3'],
        # }
        prompts_dict = {
            'prompt_1': response.prompt_1,
            'prompt_2': response.prompt_2,
            'prompt_3': response.prompt_3,
        }
        
        logging.info("Prompt Refinement completed.")

        return {"prompts_dict": prompts_dict}
        
        
    except Exception as e:
        logging.exception(f"The following error raised while Prompt refinement: {e}")
        raise CustomException(e, sys)
    
    
def get_prompt(user_input):
    """Analyzes User provided Idea and returns image generation main/negative prompts based on them."""
    
    try:
        
        with open('.//templates//Prompter.txt', 'r', encoding='utf-8') as f:
            PROMPTER_PROMPT = f.read()
        
        prompt = ChatPromptTemplate.from_messages(
            [
                ("system", PROMPTER_PROMPT),
                (
                    "human",
                    """
                 User Input: {user_input}
                 """,
                ),
            ]
        )
        
        chain = prompt | gpt_4o.with_structured_output(Prompter)
        
        response = chain.invoke(
            {
                "user_input": user_input,
            }
        )
        
        prompts = {
            'positive_prompt': response.positive_prompt,
            'negative_prompt': response.negative_prompt
        }
        
        return {'prompts': prompts}
    
    except Exception as e:
        raise CustomException(e, sys)    


def get_mini_image_prompt(uploaded_image: str):
    """Analyzes User provided Image and returns image generation main/negative prompts based on them."""
    
    try:
        logging.info("Entered the Image Analysis & main/negative prompts generation node.")
        
        # Load Imaginator Prompt
        with open('.//templates//Mini-Imager.txt', 'r', encoding='utf-8') as f:
            MINI_IMAGER_PROMPT = f.read()
        
        logging.info("Starting Image Analysis.")
        
        messages = [
            SystemMessage(content=MINI_IMAGER_PROMPT),
            HumanMessage(
                content=[
                    {
                        "type": "image_url",
                        "image_url": {"url": uploaded_image},
                    },
                ]
            ),
        ]
        
        response = sonnet.with_structured_output(MiniImager).invoke(messages)
        
        prompts = {
            'positive_prompt': response.positive_prompt,
            'negative_prompt': response.negative_prompt
        }
        
        logging.info("Image Analysis completed successfully!")
        
        return {'prompts': prompts}
        
    except Exception as e:
        logging.exception(f"The following error raised while Image analysis: {e}")
        raise CustomException(e, sys)