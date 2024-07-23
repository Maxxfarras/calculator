let firstNum;
let operator;
let secondNum;

function mathOperations(operator, firstNum, secondNum) {
    switch(operator) {
        case 'add':
            return firstNum + secondNum;
            break;
        case 'subtract':
            return firstNum - secondNum;
            break;
        case 'multiply':
            return firstNum * secondNum;
            break;
        case 'divide':
            return firstNum / secondNum;
            break;
    };
};