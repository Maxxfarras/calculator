let numbers = document.querySelectorAll('.number');
let operators = document.querySelectorAll('.operator');
let CDelete = document.querySelector('#C');
let DDelete = document.querySelector('#D');
let period = document.querySelector('#period');
let equals = document.querySelector('#equals');
let topDisplay = document.querySelector('#top-display');
let bottomDisplay = document.querySelector('#bottom-display');
let firstNum = [];
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
        firstNum.push(selectedNumber); //make an array with all numbers
        bottomDisplay.textContent = firstNum.join(''); //join them into a single string
    });
});

//click event listeners for operators
operators.forEach(operator => {
    let selectedOperator = operator.getAttribute('display');
    operator.addEventListener('click', () => {
        let secondNum = firstNum.join('') //need fix this secondNum to use it on other functions
        topDisplay.textContent = firstNum.join('') + ' ' + selectedOperator;
        firstNum.length = 0;
        bottomDisplay.textContent = 0;
    });
});

equals.addEventListener('click', () => {
    let selectedOperator = operator.getAttribute('operator') //need fix to object type
    let result = mathOperations(selectedOperator, firstNum, secondNum)
    bottomDisplay.textContent = result
})

topDisplay.textContent = 'hello world'