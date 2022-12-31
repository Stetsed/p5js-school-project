let img;
function preload() {
  img = loadImage('wallpaper.png');
}

function setup() {
  createCanvas(img.width, img.height);
  
  invertColors(img);

  image(img, 0, 0);
}

function invertColors(image) {
  image.loadPixels();

  for (let i = 0; i < image.pixels.length; i += 4) {
    let r = image.pixels[i];
    let g = image.pixels[i + 1];
    let b = image.pixels[i + 2];
    
    image.pixels[i] = 255 - r;
    image.pixels[i + 1] = 255 - g;
    image.pixels[i + 2] = 255 - b;
  }
  
  image.updatePixels();
}
