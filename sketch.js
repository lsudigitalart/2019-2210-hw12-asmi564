let head_index, body_index, sound_index, sound, background, gif;
let head = [] 
let body = []
let sounds = []


function preload() {
  background = loadImage('assets/barn.png')
  head.push(loadImage('assets/animalcombo/headcat.png'))
  head.push(loadImage('assets/animalcombo/headchicken.png'))
  head.push(loadImage('assets/animalcombo/headcow.png'))
  head.push(loadImage('assets/animalcombo/headdog.png'))
  head.push(loadImage('assets/animalcombo/headhorse.png'))
  head.push(loadImage('assets/animalcombo/headlizard.png'))
  body.push(loadImage('assets/animalcombo/bodycat.png'))
  body.push(loadImage('assets/animalcombo/bodychicken.png'))
  body.push(loadImage('assets/animalcombo/bodycow.png'))
  body.push(loadImage('assets/animalcombo/bodyhorse.png'))
  body.push(loadImage('assets/animalcombo/bodylizard.png'))
  body.push(loadImage('assets/animalcombo/bodydog.png'))
  sounds.push(loadSound('assets/sounds/cat.wav'))
  sounds.push(loadSound('assets/sounds/horse.wav'))
  sounds.push(loadSound('assets/sounds/dog.wav'))
  sounds.push(loadSound('assets/sounds/cow.wav'))
  sounds.push(loadSound('assets/sounds/chicken.wav'))
  gif=createImg('assets/farmergif.gif',)
  gif.style('width', '400px'); 
 
}

function setup() {
  createCanvas(1920,1080);
  randomize()
}

function draw() {
  image(background, 0, 0, 1920, 1080)
  image(head[head_index], -200, 50)
  image(body[body_index], -200, 50)
  
  gif.position(1200,250)
} 

function mousePressed() {
  randomize()
  sound.play();
}

function randomize() {
  head_index = int(random(5));
  body_index = int(random(5));
  if (sound != null) sound.stop();
  sound = sounds[int(random(5))];
  clear();
}