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

  for (let y = 0; y < video.height; y++) {
    for (let x = 0; x < video.width; x++) {
      let index = (x + y * video.width) * 4;
      pixels[index] = 255 - video.pixels[index];
      pixels[index + 1] = 255 - video.pixels[index + 1];
      pixels[index + 2] = 255 - video.pixels[index + 2];
      pixels[index + 3] = video.pixels[index + 3];
    }
  }

  updatePixels();
}
