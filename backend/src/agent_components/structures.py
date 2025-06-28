from typing import List
from langchain_core.pydantic_v1 import BaseModel, Field


class Imaginator(BaseModel):
    """Brainstorms an Image description for the User's Input."""
    
    image_description: str = Field(
        description="Detailed, vivid image description based on User's Input"
    )

class ImageComponentsExtraction(BaseModel):
    """Extracts all important components from User provided Image."""
    
    main_subject: str = Field(
        description="Detailed description of the main subject of the User provided image."
    )
    style: str = Field(
        description="Description of Style elements in User provided Image (E.g. Art Movements, Medium, Techniques, Artists)."
    )
    effects: str = Field(
        description="Description of Effect elements in User provided Image (E.g. Mood, Quality Descriptors, Brushwork, Texture)."
    )
    view_composition: str = Field(
        description="Detailed analysis of the image's composition and perspective. Include: spatial arrangement and depth; key elements' placement (foreground, middle ground, background); scale and proportion; viewpoint and angle; linear perspective and implied lines; atmospheric effects and color depth; focal points and visual flow; perspective distortions or abstractions; depth cues (shadows, textures); color's spatial impact; and symbolic use of perspective. Note traditional techniques and artistic departures, explaining how they affect spatial perception in both realistic and non-realistic works."
    )
    color_palette: str = Field(
        description="Description of Color Palette used in User provided Image (E.g. Color Schemes, Overall Tone)."
    )
    
    
class Crafter(BaseModel):
    """Creates Stable Diffusion Prompts (Positive & Negative) based on Descriptive Components & Suggestions."""

    positive_prompt: str = Field(description="The created or refined positive prompt.")
    negative_prompt: str = Field(description="Comma separated negative terms without using extra words (e.g. 'avoid').")
    
    
class Evaluator(BaseModel):
    """Evaluates Stable Diffusion Prompts using provided insights about effective prompt usage."""

    score: float = Field(description="The combined quality score from 1-10.")
    feedback: str = Field(
        description="Feedback for LLM 1 and briefly explanation for given score. If no feedback is necessary respond with 'No feedback needed'."
    )


class Prompts(BaseModel):
    """Generates three distinct AI image prompts, each focusing on a different aspect of enhancement: 
    hyper-detail, composition and mood, and technical quality. These prompts are designed to elevate the initial input 
    by emphasizing textures, refining structure, and optimizing for AI image generation."""

    hyper_detailed_prompt: str = Field(
        description="The Hyper-Detailed enhancement of the initial prompt that emphasizes intricate textures and minute elements"
    )
    composition_and_mood_prompt: str = Field(
        description="The Composition and Mood enhancement of the initial prompt that refines overall structure and emotional impact"
    )
    technical_quality_prompt: str = Field(
        description="The Technical Quality enhancement of the initial prompt that incorporates terms for improved AI image generation"
    )
    

class PromptBreakdown(BaseModel):
    """
    Represents a breakdown of a stable diffusion prompt into its component categories.
    This class analyzes the prompt and categorizes its elements into main subject,
    style, effects, view/composition and color palette.
    It aims to provide a structured and comprehensive breakdown of the prompt
    to facilitate understanding and potential modification of the prompt components.
    """

    main_subject: List[str] = Field(
        description="List the primary elements or subjects described in the prompt."
    )

    style: List[str] = Field(
        description="List the artistic styles, movements, specific artists, medium or artistic techniques mentioned in the prompt. "
    )

    effects: List[str] = Field(
        description="List the visual effects, including mood, quality descriptors, "
        "lighting conditions, and brushwork characteristics."
    )

    view_composition: List[str] = Field(
        description="List terms related to the scene's layout, perspective, and compositional elements. "
        "Include information about compositional rules, types of perspective, and background/setting."
    )

    color_palette: List[str] = Field(
        description="List the colors, color schemes, overall tone, and specific color descriptions. "
        "Include information about color harmonies (e.g., monochromatic, complementary) "
        "and the overall warmth or coolness of the palette."
    )


class PromptRefinement(BaseModel):
    """
    This class is used to store and manage three alternative refinements of a given image generation prompt.
    Each prompt version should preserve the main idea and any applied weights from the original prompt
    while optimizing clarity and precision for effective image generation.
    """

    prompt_1: str = Field(description="The first refined version of the image generation prompt.")
    prompt_2: str = Field(description="The second refined version of the image generation prompt.")
    prompt_3: str = Field(description="The third refined version of the image generation prompt.")


class Prompter(BaseModel):
    """Brainstorms an Image description for the User's Input and creates image generation main/negative prompts based on it."""
    
    positive_prompt: str = Field(description="The created positive prompt.")
    negative_prompt: str = Field(description="The created negative prompt.")
    

class MiniImager(BaseModel):
    """Extracts all important components from User provided Image and creates image generation main/negative prompts based on them."""
    
    positive_prompt: str = Field(description="The created positive prompt (in comma separated terms).")
    negative_prompt: str = Field(description="The created negative prompt (in comma separated terms).")