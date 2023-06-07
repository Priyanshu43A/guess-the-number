//To generate a random number:
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let random = generateRandomNumber(1, 10);
console.log(random);

let start = () => {
  //console.log(num.value);
  var c;
  var score = [];

  do {
    // num = document.getElementById("getNum").value;
    num = prompt("enter the number?");
    c = Number.parseInt(num);
    score.push(c);
    var fscore = 101 - score.length;
    if (c > random) {
      alert(`OOPS! Your guessed number ${c} is greater.`);
    } else if (c < random) {
      alert(`OOPS! Your guessed number ${c} is smaller.`);
    } else if (c == random) {
      // alert("Yeah! you won.");
      //document.getElementById("URscore").innerHTML = fscore

      // openHTML("file.html");
      let winer = document.getElementById("winner");
      //let h1 = document.getElementById("win");
      let h2 = document.getElementById("scoreLabel");
      let h3 = document.getElementById("score");
      let buttun = document.getElementById("again");
      winer.setAttribute("src", "won.jpg");
      //h1.innerHTML = "Yeh! You Won";
      h2.innerHTML = "Your Score:";
      h3.innerHTML = fscore;
      buttun.innerHTML = "Play Again!"
      buttun.style.display = "inline";
      winer.style.display = "inline";
      h2.style.display = "inline";
      h3.style.display = "inline";

    }
    else {
      alert("Only number")
      start();
    }
  } while (c != random && c < 100);
};



function openHTML(file) {

  window.open(file, "_self");
}

function replay() {
location.reload();
}