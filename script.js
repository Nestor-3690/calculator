let displayValue;

let number1, operator, number2;

const display = document.querySelector("#result");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

const clearbtn = document.querySelector("#clear");

numbers.forEach((number) => number.addEventListener("click", () => populateDisplay(number.textContent)));
operators.forEach((operator) => operator.addEventListener("click", () => populateDisplay(operator.textContent)));

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

function populateDisplay(number) {
    display.textContent += number;
}

function clear(div) {
    div.textContent = '';
}