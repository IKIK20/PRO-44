var playerCount;
var gameState;
var database;

var form;

function setup() {
  createCanvas(800,800);
  database = firebase.database();
}

function draw() {
  background(255,255,255); 
  drawSprites();
}
