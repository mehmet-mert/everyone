var heydostum = 0;
var rotate = 0;
var size = 100;
var audio = new Audio('discord.mp3');

const resim = document.getElementById("img");
const ana = document.getElementById("section");
const baslik = document.getElementById("header");

document.getElementById("many").innerHTML = `&nbsp;&nbsp;${heydostum}&nbsp;&nbsp;`;
document.getElementById("ever").onclick = function() {bahsetti()};
document.getElementById("button").onclick = function() {okudumKabulEttim()};

//ANIMATIONS
resim.style.animationPlayState = "paused";
baslik.style.animationPlayState = "paused";
ana.style.animationPlayState = "paused";

//FUNCTIONS
async function bahsetti() {
  audio.play();

  heydostum = heydostum + 1;
  rotate = rotate + 10;
  size = size + 5;
  
  resim.style.animationPlayState = "running";
  baslik.style.animationPlayState = "running";
  ana.style.animationPlayState = "running";

  await new Promise(r => setTimeout(r, 100));

  resim.style.animationPlayState = "paused";
  baslik.style.animationPlayState = "paused";
  ana.style.animationPlayState = "paused";

  resim.style.width = `${size}px`;
  resim.style.filter = `hue-rotate(${rotate}deg)`;
  document.getElementById("many").innerHTML = `&nbsp;&nbsp;${heydostum}&nbsp;&nbsp;`;
}

function okudumKabulEttim(){
  heydostum = 0;
  size = 100;
  rotate = 0;

  document.getElementById("many").innerHTML = `&nbsp;&nbsp;${heydostum}&nbsp;&nbsp;`;
  resim.style.width = `${size}px`;
  resim.style.filter = `hue-rotate(${rotate}deg)`;
}