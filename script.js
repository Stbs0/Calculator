// variables definitions
let num1 = "";
let operator = "";
let num2 = "";
let secondNum2 = "";
let secondNum1 = "";
// oprations functions
function add(a, b) {
  return +a + +b;
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

//  equal sign operator
function operate(operator, num1, num2) {
  if (operator == "+") {
    return add(num1, num2);
  } else if (operator == "-") {
    return subtract(num1, num2);
  } else if (operator == "*") {
    return multiply(num1, num2);
  } else if (operator == "/") {
    return divide(num1, num2);
  } else {
    return "";
  }
}
// fetch the DOM elements
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
const btn0 = document.querySelector(".btn0");
const equal = document.querySelector(".btn-equal");
const clear = document.querySelector(".btn-clear");
result.textContent = "";
// clicked function
// numbers
btn1.addEventListener("click", () => {
  if (operator != "") {
    result.textContent = "";
    num2 += "1";
    result.textContent = num2;
    return num2;
  } else {
    num1 += "1";

    return (result.textContent = num1);
  }
});
btn2.addEventListener("click", () => {
  if (operator != "") {
    result.textContent = "";
    num2 += "2";
    result.textContent = num2;
    return num2;
  } else {
    num1 += "2";

    return (result.textContent = num1);
  }
});
btn3.addEventListener("click", () => {
  if (operator != "") {
    result.textContent = "";
    num2 += "3";
    result.textContent = num2;
    return num2;
  } else {
    num1 += "3";

    return (result.textContent = num1);
  }
});
btn4.addEventListener("click", () => {
  if (operator != "") {
    result.textContent = "";
    num2 += "4";
    result.textContent = num2;
    return num2;
  } else {
    num1 += "4";

    return (result.textContent = num1);
  }
});

btn5.addEventListener("click", () => {
  if (operator != "") {
    result.textContent = "";
    num2 += "5";
    result.textContent = num2;
    return num2;
  } else {
    num1 += "5";

    return (result.textContent = num1);
  }
});
btn6.addEventListener("click", () => {
  if (operator != "") {
    result.textContent = "";
    num2 += "6";
    result.textContent = num2;
    return num2;
  } else {
    num1 += "6";

    return (result.textContent = num1);
  }
});
btn7.addEventListener("click", () => {
  if (operator != "") {
    result.textContent = "";
    num2 += "7";
    result.textContent = num2;
    return num2;
  } else {
    num1 += "7";

    return (result.textContent = num1);
  }
});
btn8.addEventListener("click", () => {
  if (operator != "") {
    result.textContent = "";
    num2 += "8";
    result.textContent = num2;
    return num2;
  } else {
    num1 += "8";

    return (result.textContent = num1);
  }
});
btn9.addEventListener("click", () => {
  if (operator != "") {
    result.textContent = "";
    num2 += "9";
    result.textContent = num2;
    return num2;
  } else {
    num1 += "9";

    return (result.textContent = num1);
  }
});
btn0.addEventListener("click", () => {
  if (operator != "") {
    result.textContent = "";
    num2 += "0";
    result.textContent = num2;
    return parseInt(num2);
  } else {
    result.textContent += "0";

    return (num1 = parseInt(result.textContent));
  }
});
// opretors
btnPlus.addEventListener("click", () => {
  return (operator = "+");
});
btnMinus.addEventListener("click", () => {
  return (operator = "-");
});

btndivide.addEventListener("click", () => {
  return (operator = "/");
});
btnMulti.addEventListener("click", () => {
  return (operator = "*");
});
clear.addEventListener("click", () => {
  result.textContent = "";
  num1 = "";
  operator = "";
  num2 = "";
});
equal.addEventListener("click", () => {
  let ans = "";
  ans = operate(operator, num1, num2);
  result.textContent = ans;
  num2 = "";
  operator = "";
  return (num1 = String(ans));
});
