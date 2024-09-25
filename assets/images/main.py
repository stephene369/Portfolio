
import cv2
import numpy as np
from rembg import remove
from PIL import Image

def remove_background(input_path, output_path):
    # Read the image
    input_image = Image.open(input_path)
    
    # Remove the background
    output_image = remove(input_image)
    
    # Save the result
    output_image.save(output_path)

# Example usage
input_path = 'me.jpeg'
output_path = 'me1.png'
remove_background(input_path, output_path)
