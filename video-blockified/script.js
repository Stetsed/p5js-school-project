let video;
function preload() {
  video = createVideo('video.mp4');
}

function setup() {
  createCanvas(1920, 1080);
  video.loop();
  video.hide();
  pixelDensity(1);
}

function draw() {
  video.loadPixels();
  loadPixels();
  for (var y = 0; y < video.height; y += 2) {
      for (var x = 0; x < video.width; x += 2) {
        var index = (x + y * video.width)*4;
        var r1 = video.pixels[index+0];
        var g1 = video.pixels[index+1];
        var b1 = video.pixels[index+2];
        var a1 = video.pixels[index+3];
        var r2 = video.pixels[index+(4*width)+0];
        var g2 = video.pixels[index+(4*width)+1];
        var b2 = video.pixels[index+(4*width)+2];
        var a2 = video.pixels[index+(4*width)+3];
        var r3 = video.pixels[index+4];
        var g3 = video.pixels[index+5];
        var b3 = video.pixels[index+6];
        var a3 = video.pixels[index+7] ;  
        var r4 = video.pixels[index+(4*width)+4];
        var g4 = video.pixels[index+(4*width)+5];
        var b4 = video.pixels[index+(4*width)+6];
        var a4 = video.pixels[index+(4*width)+7];
        
        var ar = (r1 + r2 + r3 + r4) / 4;
        var ag = (g1 + g2 + g3 + g4) / 4;
        var ab = (b1 + b2 + b3 + b4) / 4;
        var aa = (a1 + a2 + a3 + a4) / 4;

        pixels[index+0] = ar;
        pixels[index+1] = ag;
        pixels[index+2] = ab;
        pixels[index+3] = aa;
        pixels[index+4] = ar;
        pixels[index+5] = ag;
        pixels[index+6] = ab;
        pixels[index+7] = aa;
        pixels[index+(4*width)+0] = ar;
        pixels[index+(4*width)+1] = ag;
        pixels[index+(4*width)+2] = ab;
        pixels[index+(4*width)+3] = aa;
        pixels[index+(4*width)+4] = ar;
        pixels[index+(4*width)+5] = ag;
        pixels[index+(4*width)+6] = ab;
        pixels[index+(4*width)+7] = aa;
      }
    }
  updatePixels();
}