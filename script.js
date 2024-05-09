let displayValue;

let number1, operator, number2;

const display = document.querySelector("#text");
const resultDisplay = document.querySelector("#result");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

const equal = document.querySelector("#equal");
const clearbtn = document.querySelector("#clear");

numbers.forEach((number) => number.addEventListener("click", () => populateDisplay(number.textContent)));
operators.forEach((operator) => operator.addEventListener("click", () => populateDisplay(operator.textContent)));

equal.addEventListener("click", () => {
    if (display.textContent.includes('+')) {
        operator = '+';
        let array = display.textContent.split('+');
        number1 = +array[0];
        number2 = +array[1];
    } else if (display.textContent.includes('-')) {
        operator = '-';
        let array = display.textContent.split('-');
        number1 = +array[0];
        number2 = +array[1];
    } else if (display.textContent.includes('*')) {
        operator = '*';
        let array = display.textContent.split('*');
        number1 = +array[0];
        number2 = +array[1];
    } else if (display.textContent.includes('/')) {
        operator = '/';
        let array = display.textContent.split('/');
        number1 = +array[0];
        number2 = +array[1];
    } 
    const result = operate(number1, operator, number2);
    clear(display);
    populateDisplay(result, result);
})

clearbtn.addEventListener("click", () => clear(display));


function operate(number1, operator, number2) {
    if (operator === '+') {
        return add(number1, number2);
    } else if (operator === '-') {
        return subtract(number1, number2);
    } else if (operator === '*') {
        return multiply(number1, number2);
    } else if (operator === '/') {
        return divide(number1, number2);
    }
}

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

function populateDisplay(number, form = text) {
    if (form === text) {
        display.textContent += number;
    } else {
        resultDisplay.textContent = number;
    }
}

function clear(div) {
    div.textContent = '';
}