let stars = [];
let planets = [];
let asteroids = [];

let Level = 1;
let Score = 0;
let HighScore = localStorage.getItem('highScore') || 0; // Retrieve high score from localStorage

let Volume = 1;

let AllMyFellasCover;
let Chainsawman;
let MoonlightPiano;
let Ohayio;
let VersaceOnTheFloor;

function preload()
{
  rocketImg = loadImage("Images/rocketImg.png");
  asteroidImg = loadImage("Images/asteroid.png");
  marsImg = loadImage("Images/mars.png");
  jupiterImg = loadImage("Images/jupiter.png");
  saturnImg = loadImage("Images/saturn.png");

  shieldImg = loadImage("Images/shield.png");

  AllMyFellasCover = loadSound("Sounds/Better Remix.mp3");
  Chainsawman = loadSound("Sounds/Chainsaw man intro.mp3");
  MoonlightPiano = loadSound("Sounds/Moonlight Piano.mp3");
  Ohayio = loadSound("Sounds/Ohayio Gozaimas type beat - Kris og Chris.mp3");
  VersaceOnTheFloor = loadSound("Sounds/versace on floor solo lead synth.mp3");
}

function setup()
{
  createCanvas(windowWidth, 600);
  angleMode(DEGREES);
  Level = 1;

  Playlist = [
    AllMyFellasCover,
    MoonlightPiano,
    Ohayio,
    VersaceOnTheFloor
  ];

  for (let sound of Playlist) {
    sound.onended(() => {
      playNextSound(sound);
    });
  }

  for(let star = 0; star < 128; star++)
  {
    stars.push(new StarClass(random(-10,width), random(0,height), random(1,10)));
  }
  for(let planet = 0; planet < random(7,12); planet++)
  {
    planets.push(new PlanetClass(random(-10,width), random(0,height), random(15,50), int(random(1,3))));
  }
  for(let asteroid = 0; asteroid < Level * 2; asteroid++)
  {
    asteroids.push(new AsteroidClass(random(-10,width), random(0,height), random(15,40), random(5,10)));
  }

  player = new PlayerClass(width - 75, height/2)

  Score = 0;
  
  AllMyFellasCover.stop();
  MoonlightPiano.stop();
  Ohayio.stop();
  VersaceOnTheFloor.stop();
  
  AllMyFellasCover.play();

}

function playNextSound(currentSound) {
  let currentIndex = Playlist.indexOf(currentSound);
  let nextIndex = (currentIndex + 1) % Playlist.length;

  Playlist[nextIndex].play();
  return Playlist[nextIndex];
}

function draw() 
{
  background(0);

  PlaylistFunc();

  StarsFunc();
  PlanetsFunc();
  player.Show();

  AsteroidFunc();

  Display();
}

function StarsFunc()
{
  for(let star of stars)
  {
    star.Show();
  }
}

function PlanetsFunc()
{
  for(let planet of planets )
  {
    planet.Show();
  }
}

function AsteroidFunc()
{
  for(let asteroid of asteroids )
  {
    asteroid.Show();
  }
}

function Display()
{
  fill(255);
  text("Score: " + int(Score), 25,15)
  text("High Score: " + int(HighScore),45 ,30)

  Score += 0.01;
  if(HighScore <= Score)
  {
    HighScore = Score;
    localStorage.setItem('highScore', HighScore); // Save high score to localStorage
  }
}

function Reset()
{
  stars = [];
  planets = [];
  asteroids = [];
  setup();
}

function PlaylistFunc()
{
  if (Playlist[0].isPlaying() === false)
  {
    Playlist.shift(); // Remove the first sound from the array
    Playlist.push(Playlist[0]); // Move it to the end of the array
    Playlist[0].play(); // Play the new first sound
  }
}