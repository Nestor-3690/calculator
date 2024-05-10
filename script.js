let displayValue;
let isDefined = true;

let number1, operator, number2;

const display = document.querySelector("#text");
const resultDisplay = document.querySelector("#result");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

const equal = document.querySelector("#equal");
const clearbtn = document.querySelector("#clear");

numbers.forEach((number) => number.addEventListener("click", () => populateDisplay(number.textContent)));
operators.forEach((op) => op.addEventListener("click", () => {
    if (number1 === undefined) {
        number1 = +displayValue;
        operator = op.textContent;
        isDefined = true;
    } else if (operator === undefined) {
        operator = op.textContent;
    } else {
        number2 = +displayValue;
        const result = operate(number1, operator, number2);
        clear(display);
        populateDisplay(result);
        number1 = result;
        isDefined = true;
        operator = op.textContent;
        number2 = undefined;
    }
}));

equal.addEventListener("click", () => {
    if (number1 === undefined) {
        populateDisplay(0);
        isDefined = true;
    }
    number2 = +displayValue;
    isDefined = true;
    const result = operate(number1, operator, number2);
    populateDisplay(result);
    number1 = result;
    isDefined = true;
    operator = undefined;
    number2 = undefined;
})

clearbtn.addEventListener("click", () => clear(display, zero));


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

function populateDisplay(number) {
    if (isDefined === true) {
        clear(display);
        isDefined = false;
    }
    displayValue = display.textContent += number;
}

function clear(div, zero = "base") {
    if (zero === "base") {
        div.textContent ='';
    } else {
        div.textContent = '0';
    }
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