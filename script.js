function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
let num1 = 0;
let operator = 0;
let num2 = 0;
function operate(operator, num1, num2) {
  return add(num1, num2);
}
const result = document.querySelector(".result");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const btn5 = document.querySelector(".btn5");
const btn6 = document.querySelector(".btn6");
const btn7 = document.querySelector(".btn7");
const btn8 = document.querySelector(".btn8");
const btn9 = document.querySelector(".btn9");
const btnPlus = document.querySelector(".btn-plus");
const btnMinus = document.querySelector(".btn-minus");
const btnMulti = document.querySelector(".btn-multiply");
const btndivide = document.querySelector(".btn-divide");
const btnMinus2 = document.querySelector(".btn-minus");
const equal = document.querySelector(".btn-equal");

btn1.addEventListener("click", () => {
  result.textContent = "1";
});
