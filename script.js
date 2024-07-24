let numbers = document.querySelectorAll('.number');
let operators = document.querySelectorAll('.operator');
let CDelete = document.querySelector('#C');
let DDelete = document.querySelector('#D');
let period = document.querySelector('#period');
let equals = document.querySelector('#equals');
let topDisplay = document.querySelector('#top-display');
let bottomDisplay = document.querySelector('#bottom-display');
let firstNum;
let operator;
let secondNum;

function mathOperations(operator, firstNum, secondNum) {
    switch(operator) {
        case '+':
            return firstNum + secondNum;
            break;
        case '-':
            return firstNum - secondNum;
            break;
        case '*':
            return firstNum * secondNum;
            break;
        case '/':
            return firstNum / secondNum;
            break;
    };
};

//click event listeners for numbers
numbers.forEach(number => {
    let selectedNumber = number.getAttribute('number');
    number.addEventListener('click', () => {
        console.log(selectedNumber);
    });
});

//click event listeners for operators
operators.forEach(operator => {
    let selectedOperator = operator.getAttribute('operator');
    operator.addEventListener('click', () => {
        console.log(selectedOperator);
    });
});