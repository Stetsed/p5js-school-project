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
        
        //sepia
        var tr = r *.393 + g *.769 + b *.189;
        var tg = r *.349 + g *.686 + b *.168;
        var tb = r *.272 + g *.534 + b *.131;
        
        pixels[index+0] = tr;
        pixels[index+1] = tg;
        pixels[index+2] = tb;
      }
    }
    updatePixels();
}