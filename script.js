let numbers = document.querySelectorAll('.number');
let operators = document.querySelectorAll('.operator');
let CDelete = document.querySelector('#C');
let DDelete = document.querySelector('#D');
let period = document.querySelector('#period');
let equals = document.querySelector('#equals');
let topDisplay = document.querySelector('#top-display');
let bottomDisplay = document.querySelector('#bottom-display');
let firstNum = [];
let joinedNum = 0;
let operator;
let wholeOperation = [];

function mathOperations(operator, operandOne, operandTwo) {
    switch(operator) {
        case '+':
            return operandOne + operandTwo;
        case '-':
            return operandOne - operandTwo;
        case 'x':
            return operandOne * operandTwo;
        case '÷':
            return operandOne / operandTwo;
    };
};

//click event listeners for numbers and period
[period, ...numbers].forEach(number => {
    let selectedNumber = number.getAttribute('number');
    number.addEventListener('click', () => {
        firstNum.push(selectedNumber); //make an array with all numbers
        joinedNum = firstNum.join('');
        bottomDisplay.textContent = joinedNum; //join them into a single string
        if (wholeOperation.length == 2) {
            equals.addEventListener('click', equalFunction);
        };
    });
});

//click event listeners for operators
operators.forEach(operator => {
    let selectedOperator = operator.getAttribute('display');
    operator.addEventListener('click', () => {
        wholeOperation[0] = joinedNum;
        wholeOperation[1] = selectedOperator
        topDisplay.textContent = `${wholeOperation[0]} ${wholeOperation[1]}`; //displays firstNum + operator
        firstNum.length = 0; //reset firstNum
        bottomDisplay.textContent = ''; //reset bottomDisplay
         
    });
});


function equalFunction() {
    wholeOperation[2] = joinedNum;
    topDisplay.textContent = `${wholeOperation[0]} ${wholeOperation[1]} ${wholeOperation[2]} =`; //display wholeOperation
    let selectedOperator = wholeOperation[1];
    let operandOne = Number(wholeOperation[0]); //convert operands into integers
    let operandTwo = Number(wholeOperation[2]); 
    let result = mathOperations(selectedOperator, operandOne, operandTwo); 
    bottomDisplay.textContent = result; 
    clearVariables();
    if (bottomDisplay.textContent == 'NaN') {
        bottomDisplay.textContent = 'ERROR';
        joinedNum = 0;
    } else {
        joinedNum = result;
    };
};

//resets all variables, array and display to none
CDelete.addEventListener('click', () => {
    [topDisplay, bottomDisplay].forEach(display => display.innerHTML = '');
    clearVariables();
});

function clearVariables() {
    [wholeOperation, firstNum].forEach(array => array.length = 0);
    delete operator;
    joinedNum = 0;
    equals.removeEventListener('click', equalFunction);
};