from PIL import Image
from pathlib import Path

folder = Path(__file__).parent

img = Image.open(folder / "logo.jpg").convert("RGBA")

img.save(
    folder / "favicon.ico",
    format="ICO",
    sizes=[
        (16, 16),
        (32, 32),
        (48, 48),
        (64, 64),
        (128, 128),
        (256, 256),
    ],
)

print("favicon.ico created successfully!")
