var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1*6);
randomNumber1= randomNumber1+1

var img ="images/"+"dice"+randomNumber1+".png";
document.querySelector(".dice .img1").setAttribute("src",img);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var img2 = "images/"+"dice"+randomNumber2+".png";
document.querySelector(".dice .img2").setAttribute("src",img2);

if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!"
}else if (randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩"
}else{
  document.querySelector("h1").innerHTML = "Draw!"
}
