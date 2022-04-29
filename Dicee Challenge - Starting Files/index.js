var randomNumber1 =Math.floor( Math.random() * (6) + 1);
var randomNumber2 =Math.floor( Math.random() * (6) + 1);

var randomImage1 = "dice"+randomNumber1 + ".png";
var randomImage2 = "dice"+randomNumber2 + ".png";

var PathToRandomImage1 = "images/"+randomImage1;
var PathToRandomImage2 = "images/"+randomImage2;

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", PathToRandomImage1);
image2.setAttribute("src", PathToRandomImage2);

var heading = document.querySelector("h1");
if (randomNumber1 === randomNumber2){
heading.innerHTML = "Tie ";
}
else if (randomNumber1>randomNumber2){
    heading.innerHTML = "PLayer 1 Wins";
}
else {
    heading.innerHTML = "PLayer 2 Wins";
}
