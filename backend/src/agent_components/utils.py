import io
import base64
from PIL import Image

from typing import Tuple


def resize_and_encode_image(
    uploaded_file, max_width=1024, max_height=1024, quality=85
) -> str:
    image = Image.open(uploaded_file)
    original_format = image.format

    if image.width > max_width or image.height > max_height:
        target_size = calculate_target_size(
            image.width, image.height, max_width, max_height
        )
        image.thumbnail(target_size, Image.Resampling.LANCZOS)

    buffer = io.BytesIO()

    if original_format in ["JPEG", "WEBP"]:
        image.save(buffer, format=original_format, quality=quality)
    else:
        image.save(buffer, format=original_format)

    buffer.seek(0)

    optimized_image_bytes = buffer.getvalue()
    base64_encoded_string = base64.b64encode(optimized_image_bytes).decode("utf-8")

    return base64_encoded_string


def calculate_target_size(width, height, max_width, max_height) -> Tuple[int, int]:
    aspect_ratio = width / height
    if width > height:
        target_width = min(max_width, width)
        target_height = target_width / aspect_ratio
    else:
        target_height = min(max_height, height)
        target_width = target_height * aspect_ratio

    return (int(target_width), int(target_height))



def calculate_api_cost(model: str, input_tokens: int, output_tokens: int) -> float:
        """Calculates the usage cost of API usage based on the Model."""

        if "gpt-4o-mini" in model:
            input_pricing = 0.00000015
            output_pricing = 0.0000006
        elif "claude-3-haiku" in model:
            input_pricing = 0.00000025
            output_pricing = 0.00000125
        elif "claude-3-5-sonnet" in model:
            input_pricing = 0.000003
            output_pricing = 0.000015
        else:
            input_pricing = 0.0000025
            output_pricing = 0.00001

        input_tokens_cost = input_tokens * input_pricing
        output_tokens_cost = output_tokens * output_pricing

        total_cost = input_tokens_cost + output_tokens_cost

        return round(total_cost, 3)
    
