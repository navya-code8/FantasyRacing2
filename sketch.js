var database;
var gameState = 0;
var playerCount = 0;
var allPlayers;
var dragon, serpent, unicorn, phoenix; 
var obstacle; 
var player, form,game;
var player1,player2, player3, player4;
var players;

var player_img;


function preload(){

  dragon = loadImage("Dragon.png");
  serpent = loadImage("Serpent.png");
  unicorn = loadImage("Unicorn.png");
  phoenix = loadImage("Phoenix.png");
  obstacle = loadImage("obstacle.png");
  //load track img

}
function setup() {
  createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game()
  game.getState();
  game.start();
  
  
}

function draw() {
  background("white")

  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    game.play();
  }

  
}