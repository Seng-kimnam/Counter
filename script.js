// const count = document.querySelector(".number");
// const btns = document.querySelectorAll(".btn");

// let number = 0;

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const checkBtn = e.currentTarget.classList;
//     console.log(checkBtn);
//     if (checkBtn.contains("increase")) {
//       number++;
//     } else if (checkBtn.contains("decrease")) {
//       number--;
//     } else {
//       number = 0;
//     }
//     count.textContent = number;
//   });
// });

const increaseButton = document.querySelector(".btn-increase");
const decreaseButton = document.querySelector(".btn-decrease");
const resetButton = document.querySelector(".btn-reset");
const number = document.querySelector(".number");

// console.log(number)

// increase.addEventListener("clc")
let i = 0;
function Increase() {
  number.textContent = ++i;
  console.log(number.textContent);
}
function Decrease() {
  number.textContent = --i;
}
function Reset() {
  i =0 
  number.textContent = i;
}

decreaseButton.addEventListener("click", Decrease);
increaseButton.addEventListener("click", Increase);
resetButton.addEventListener("click", Reset);
