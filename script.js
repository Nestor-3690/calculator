let displayValue;
let isDefined = false;

let number1, operator, number2;

const display = document.querySelector("#text");
const resultDisplay = document.querySelector("#result");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

const equal = document.querySelector("#equal");
const clearbtn = document.querySelector("#clear");

numbers.forEach((number) => number.addEventListener("click", () => populateDisplay(number.textContent)));
operators.forEach((op) => op.addEventListener("click", () => {
    if (number1 === undefined || number2 === undefined) {
        number1 = +displayValue;
        operator = op.textContent;
        isDefined = true;
    } else {
        if (operator === undefined) {
            operator = op.textContent;
        }
        const result = operate(number1, operator, number2);
        clear(display);
        populateDisplay(result);
        number1 = result;
        operator = op.textContent;
        number2 = undefined;
    }
}));

equal.addEventListener("click", () => {

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
    if (isDefined === true) {
        clear(display);
        isDefined = false;
    }
    if (form === text) {
        displayValue = display.textContent += number;
    } else {
        resultDisplay.textContent = number;
    }
}

function clear(div) {
    div.textContent = '';
}

/* equal.addEventListener("click", () => {
    if (displayValue.includes('+')) {
        operator = '+';
        let array = displayValue.split('+');
        number1 = +array[0];
        number2 = +array[1];
    } else if (displayValue.includes('-')) {
        operator = '-';
        let array = displayValue.split('-');
        number1 = +array[0];
        number2 = +array[1];
    } else if (displayValue.includes('*')) {
        operator = '*';
        let array = displayValue.split('*');
        number1 = +array[0];
        number2 = +array[1];
    } else if (displayValue.includes('/')) {
        operator = '/';
        let array = displayValue.split('/');
        number1 = +array[0];
        number2 = +array[1];
    } 
    const result = operate(number1, operator, number2);
    clear(display);
    populateDisplay(result, result);
}) */