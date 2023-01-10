let img;
function preload() {
  img = loadImage('wallpaper.png');
}

function setup() {
  createCanvas(img.width, img.height);
  
  draw(img);

  image(img, 0, 0);
}


function draw(){
  loadPixels();
  for (var y = 0; y < height; y++) {
      for (var x = 0; x < width; x++) {
        var index = (x + y * width)*4;
        var r = pixels[index+0];
        var g = pixels[index+1];
        var b = pixels[index+2];
        var a = pixels[index+3];     
        
        var bw = (r + g + b)/3;
        
        pixels[index+0] = bw;
        pixels[index+1] = bw;
        pixels[index+2] = bw;
      }
    }
  updatePixels();
}