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
let wholeOperation = [];
let halfOperation;

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
        secondNum = firstNum.join('') //secondNum is now the firstNum
        halfOperation = firstNum.join('') + ' ' + selectedOperator;
        topDisplay.textContent = halfOperation; //displays firstNum + operator
        firstNum.length = 0; //reset firstNum
        bottomDisplay.textContent = 0;
    });
});

equals.addEventListener('click', () => {
    wholeOperation = halfOperation + ' ' + firstNum.join('') + ' ' + '=';
    topDisplay.textContent = wholeOperation;
    wholeOperation.split(' ')
    //let result = mathOperations(selectedOperator, firstNum, secondNum); //needs fix still
    //bottomDisplay.textContent = result
})

function separateString(string) {
    let parts = string.split(' ');
    return parts
}
console.log(separateString('5 + 88 ='))
topDisplay.textContent = 'hello world'