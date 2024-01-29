const result = document.querySelector(".result");
const numberBtn = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".op");

const clear = document.querySelector(".clear");
const equal = document.querySelector(".equal");
let num1 = 0;
let num2 = 0;
let operator = "";
let value = "";

function operate(operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;

    default:
      return 0;
  }
}
function populateDisplay() {
  numberBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      // result.textContent = result.textContent.concat(`${e.target.textContent}`);
      if (operator === "") {
        value = "";
        result.textContent = result.textContent.concat(
          `${e.target.textContent}`
        );
        num1 = +result.textContent;
      }
      if (operator !== "") {
        result.textContent += result.textContent.concat(
          `${e.target.textContent}`
        );
        num2 = +result.textContent;
      }
    });
  });

  operatorBtns.forEach((op) => {
    op.addEventListener("click", (e) => {
      operator = e.target.textContent;
      if (num2 !== 0) {
        num1 = operate(operator);
        num2 = 0;
        result.textContent = num1;
      }
    });
  });
  equal.addEventListener("click", (e) => {
    num1 = operate(operator);
    num2 = 0;
    result.textContent = num1;
  });
  clear.addEventListener("click", () => {
    num1 = 0;
    num2 = 0;
    operator = "";
    result.textContent = "";
  });
}
populateDisplay();
