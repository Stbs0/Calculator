// oprations functions
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
// variables definitions
let num1 = "";
let operator = "";
let num2 = "";
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
    result.textContent += "1";

    return (num1 = result.textContent);
  }
});
btn2.addEventListener("click", () => {
  if (operator != "") {
    result.textContent = "";
    num2 += "2";
    result.textContent = num2;
    return num2;
  } else {
    result.textContent += "2";

    return (num1 = result.textContent);
  }
});
btn3.addEventListener("click", () => {
  if (operator != "") {
    result.textContent = "";
    num2 += "3";
    result.textContent = num2;
    return num2;
  } else {
    result.textContent += "3";

    return (num1 = result.textContent);
  }
});
btn4.addEventListener("click", () => {
  if (operator != "") {
    result.textContent = "";
    num2 += "4";
    result.textContent = num2;
    return num2;
  } else {
    result.textContent += "4";

    return (num1 = result.textContent);
  }
});

btn5.addEventListener("click", () => {
  if (operator != "") {
    result.textContent = "";
    num2 += "5";
    result.textContent = num2;
    return num2;
  } else {
    result.textContent += "5";

    return (num1 = result.textContent);
  }
});
btn6.addEventListener("click", () => {
  if (operator != "") {
    result.textContent = "";
    num2 += "6";
    result.textContent = num2;
    return num2;
  } else {
    result.textContent += "6";

    return (num1 = result.textContent);
  }
});
btn7.addEventListener("click", () => {
  if (operator != "") {
    result.textContent = "";
    num2 += "7";
    result.textContent = num2;
    return num2;
  } else {
    result.textContent += "7";

    return (num1 = result.textContent);
  }
});
btn8.addEventListener("click", () => {
  if (operator != "") {
    result.textContent = "";
    num2 += "8";
    result.textContent = num2;
    return num2;
  } else {
    result.textContent += "8";

    return (num1 = result.textContent);
  }
});
btn9.addEventListener("click", () => {
  if (operator != "") {
    result.textContent = "";
    num2 += "9";
    result.textContent = num2;
    return num2;
  } else {
    result.textContent += "9";

    return (num1 = result.textContent);
  }
});
// opretors
btnPlus.addEventListener("click", () => {
  return (operator = "+");
});
btnMinus.addEventListener("click", () => {
  return (operator = "-");
});
btn0.addEventListener("click", () => {
  result.textContent += "0";
  return (num1 = result.textContent);
});
btndivide.addEventListener("click", () => {
  return (operator = "/");
});
btnMulti.addEventListener("click", () => {
  return (operator = "*");
});
clear.addEventListener("click", () => {
  result.textContent = "";
});
equal.addEventListener("click", () => {
  return (operator = "=");
});
equal.addEventListener("click", () => {
  result.textContent = operate(operator, num1, num2);
  return result.textContent;
});
