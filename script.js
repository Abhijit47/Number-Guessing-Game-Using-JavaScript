let luckyNumber = Math.floor(Math.random() * 20);
console.log("Cheat Number 🤪 "+luckyNumber);

let userNumber = document.getElementById("guessing");
let checkBtn = document.getElementById("check");
let mainsection = document.getElementsByClassName("main-container");
console.log(mainsection);
let score= document.getElementById("score");
let reset = document.getElementById("reset");

function clicked() {
  console.log("You click me!!!! 😈")
  let guessesNumber = parseInt(userNumber.value); 
  if (guessesNumber === luckyNumber) {
    mainsection[0].style.backgroundColor = "green";
    // alert("You win 😎");
    mainsection[0].style.backgroundColor = "green";
    score.innerHTML = "You win 😎";
  } else if (guessesNumber > luckyNumber) {
    // alert("Too high 📈");
    mainsection[0].style.backgroundColor = "red";
    score.innerHTML = "Too high 📈";
  } else if (guessesNumber < luckyNumber) {
    // alert("Too low 📉");
    mainsection[0].style.backgroundColor = "red";
    score.innerHTML = "Too low 📉";
  } else {
    alert("Invalid input 😡");
    mainsection[0].style.backgroundColor = "red";
    score.innerHTML = "Invalid input 😡";
  }
}

function resetbtn() {
  console.log("Reset");
  mainsection[0].style.backgroundColor = "white";
  score.innerHTML = "🤪";
  userNumber.value = "";
}







// const clicked = () => {
//   console.log("you clicked me");
// }
// checkBtn.addEventListener("click", clicked);


















// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// let highscore = 0;
// document.querySelector("#btn").addEventListener("click", function () {
//   const guess = Number(document.querySelector("#guess").value);
//   if (!guess) {
//     document.querySelector("#message").textContent = "No number";
//   } else if (guess === secretNumber) {
//     document.querySelector("#message").textContent = "Correct number";
//     document.querySelector("body").style.backgroundColor = "#60b347";
//     document.querySelector(".game-window").style.width = "30rem";
//     if (score > highscore) {
//       highscore = score;
//       document.querySelector("#highscore").textContent = highscore;
//     }
//   } else if (guess !== secretNumber) {
//     if (score > 1) {
//       document.querySelector("#message").textContent =
//         guess > secretNumber ? "Too high" : "Too low";
//       score--;
//       document.querySelector("#score").textContent = score;
//     } else {
//       document.querySelector("#message").textContent = "You lost the game";
//       document.querySelector("#score").textContent = 0;
//     }
//   }
// });
