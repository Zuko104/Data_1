function preload() {
  sound = loadSound('will.mp3'); // preloads the song
}

function setup() {
  createCanvas(windowWidth, windowHeight); //canvas size
  sound.play();
  fft = new p5.FFT(0.8, 2048); //fast fourier transform (smoothing and binsize)
}

function draw() {
  background(20, 20, 20);
  // Returns an array of amplitude values (between 0 and 255) across the frequency spectrum.
  // Length is equal to FFT bins (1024 by default). The array indices correspond to frequencies
  push();
  translate(windowWidth/2,0);
  scale(-1.0,1.0);
  spectrum = fft.analyze(); //Visualize the frequency spectrum of the sound
  noStroke(); // Don’t create an outline around the shapes
  fill(20, 200, 20) // Set the fill color of the shapes


  for (var i = 0; i < spectrum.length; i++) {
    ellipse(i, (windowHeight/2)-spectrum[i], 2, 2);
  }
pop();

translate(windowWidth*0.5,0);//check for the other version
noStroke();
fill(0, 255, 255) // Set the fill color of the shapes

 for (var i = 0; i < spectrum.length; i++) {
    ellipse(i, (windowHeight/2)-spectrum[i], 2, 2);
  }


}