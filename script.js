let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
let CDelete = document.querySelector("#C");
let DDelete = document.querySelector("#D");
let period = document.querySelector("#period");
let equals = document.querySelector("#equals");
let topDisplay = document.querySelector("#top-display");
let bottomDisplay = document.querySelector("#bottom-display");
let firstNum = [];
let joinedNum = 0;
let operator;
let wholeOperation = [];

function mathOperations(operator, operandOne, operandTwo) {
  switch (operator) {
    case "+":
      return operandOne + operandTwo;
    case "-":
      return operandOne - operandTwo;
    case "x":
      return operandOne * operandTwo;
    case "÷":
      return operandOne / operandTwo;
  }
}

function formatNumber(num) {
  if (Number.isInteger(num)) {
    return num.toString();
  } else {
    return num.toFixed(3);
  }
}

function clearVariables() {
  [wholeOperation, firstNum].forEach((array) => (array.length = 0));
  delete operator;
  joinedNum = 0;
  equals.removeEventListener("click", equalFunction);
}

function equalFunction() {
  wholeOperation[2] = joinedNum;
  topDisplay.textContent = `${wholeOperation[0]} ${wholeOperation[1]} ${wholeOperation[2]} =`; //display wholeOperation
  let selectedOperator = wholeOperation[1];
  let operandOne = Number(wholeOperation[0]); //convert operands into integers
  let operandTwo = Number(wholeOperation[2]);
  let result = mathOperations(selectedOperator, operandOne, operandTwo);
  let roundedNum = formatNumber(result); //format number for 3 decimals
  bottomDisplay.textContent = roundedNum;
  clearVariables();
  if ((bottomDisplay.textContent == "NaN") || (roundedNum.length >= 12)){
    bottomDisplay.textContent = "ERROR";
    joinedNum = 0;
  } else {
    joinedNum = roundedNum;
  }
}

function numberFunction(selectedNumber) {
  if (firstNum.length >= 8) {
    return;
  } 
  firstNum.push(selectedNumber); //make an array with all numbers
  joinedNum = firstNum.join('');
  bottomDisplay.textContent = joinedNum; //join them into a single string
  if (wholeOperation.length == 2) { // to avoid undefined errors
    equals.addEventListener("click", equalFunction);
  } 
}

function operatorFunction(selectedOperator) {
  wholeOperation[0] = joinedNum;
  wholeOperation[1] = selectedOperator;
  topDisplay.textContent = `${wholeOperation[0]} ${wholeOperation[1]}`; //displays firstNum + operator
  firstNum.length = 0; //reset firstNum
  bottomDisplay.textContent = ""; //reset bottomDisplay
}

//click event listeners for numbers and period
[period, ...numbers].forEach((number) => {
  let selectedNumber = number.getAttribute("number");
  number.addEventListener("click", () => numberFunction(selectedNumber));
})

//click event listeners for operators
operators.forEach((operator) => {
  let selectedOperator = operator.getAttribute("display");
  operator.addEventListener("click", () => operatorFunction(selectedOperator));
})

//resets all variables, array and display to none
CDelete.addEventListener("click", () => {
  [topDisplay, bottomDisplay].forEach((display) => (display.innerHTML = ""));
  clearVariables();
})

//deletes the last element in the firstNum array
DDelete.addEventListener("click", () => {
  firstNum.pop();
  bottomDisplay.textContent = firstNum.join("");
})