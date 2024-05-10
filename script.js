let displayValue;
let isDefined = true;
let pointClicked = false;

let number1, operator, number2;

const display = document.querySelector("#text");
const numbers = document.querySelectorAll(".number");
const point = document.querySelector("#point")
const operators = document.querySelectorAll(".operator");

const equal = document.querySelector("#equal");
const clearbtn = document.querySelector("#clear");

doc = document.querySelector("html");

doc.addEventListener("keydown", (event) => {
    if (+(event.key) < 10 || event.key === '.') {
        populateDisplay(event.key);
        if (event.key === '.') {
            pointClicked = true;
        }
    }
})

numbers.forEach((number) => number.addEventListener("click", () => populateDisplay(number.textContent)));

point.addEventListener("click", () => pointClicked = true)

operators.forEach((op) => op.addEventListener("click", () => {
    if (number1 === undefined || operator === undefined) {
        displayValue = display.textContent;
        number1 = +displayValue;
        operator = op.textContent;
        isDefined = true;
        pointClicked = false;
    } else {
        number2 = +displayValue;
        const result = operate(number1, operator, number2);
        clear(display);
        populateDisplay(result);
        number1 = result;
        isDefined = true;
        operator = op.textContent;
        number2 = undefined;
        pointClicked = false;
    }
}));

equal.addEventListener("click", () => {
    if (number1 === undefined || operator === undefined) {
        displayValue = display.textContent;
        number1 = +displayValue
        isDefined = true;
        populateDisplay(number1);
        pointClicked = false;
    } else {
    number2 = +displayValue;
    isDefined = true;
    const result = operate(number1, operator, number2);
    populateDisplay(result);
    number1 = result;
    isDefined = true;
    operator = undefined;
    number2 = undefined;
    pointClicked = false;
    }
})

clearbtn.addEventListener("click", () => {
    clear(display, zero);
    number1 = operator = number2 = undefined;
    pointClicked = false;
    isDefined = true;
});


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
    return +(a + b).toFixed(5);
}

function subtract(a, b) {
    return +(a - b).toFixed(5);
}

function multiply(a, b) {
    return +(a * b).toFixed(5);
}

function divide(a, b) {
    if (b === 0) {
        return "ERROR";
    }
    return +(a / b).toFixed(5);
}

function populateDisplay(number) {
    if (isDefined === true) {
        clear(display);
        isDefined = false;
    }
    if (number !== '.' || pointClicked === false) {
        displayValue = display.textContent += number;
    }
}

function clear(div, zero = "base") {
    if (zero === "base") {
        div.textContent ='';
    } else {
        div.textContent = '0';
    }
}