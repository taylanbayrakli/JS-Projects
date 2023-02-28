const display = document.querySelector(".display");
const buttons = document.querySelector(".buttonBox");

let displayValue = "0";
let firstValue = null;
let operator = null;
let waitingForSecondValue = false;

updateDisplay();

function updateDisplay() {
    display.value = displayValue;
}


buttons.addEventListener("click", function (e) {
    const element = e.target;

    if (!element.matches("button")) return;

    if (element.classList.contains("operations")) {
        // console.log("operator", element.value);
        handleOperator(element.value);
        updateDisplay();
        return;
    }


    if (element.classList.contains("dot")) {
        inputDot(element.value);
        updateDisplay();
        return;
    }

    if (element.classList.contains("clear")) {
        console.log("clear", element.value);
        clear();
        updateDisplay();
        return;
    }


    if (element.classList.contains("equal")) {
        console.log("equal", element.value);
        return;
    }


    inputNumber(element.value);
    updateDisplay();
});

function handleOperator(nextoperator) {
    const value = parseFloat(displayValue);

    if (operator && waitingForSecondValue) {
        operator = nextoperator;
        return;
    }

    if (firstValue === null) {
        firstValue = value;
    } else if (operator) {
        const result = calculate(firstValue, value, operator);

        displayValue = `${parseFloat(result.toFixed(7))}`;
        firstValue = result;
    }

    waitingForSecondValue = true;
    operator = nextoperator;
    console.log(displayValue, firstValue, operator, waitingForSecondValue);
}

function calculate(first, second, operator) {
    if (operator === "+") {
        return first + second;
    } else if (operator === "-") {
        return first - second;
    } else if (operator === "/") {
        return first / second;
    } else if (operator === "*") {
        return first * second;
    }

    return second;
}

function inputNumber(e) {
    if (waitingForSecondValue) {
        displayValue = e;
        waitingForSecondValue = false;
    } else {
        displayValue = displayValue === "0" ? e : displayValue + e;
    }
    console.log(displayValue, firstValue, operator, waitingForSecondValue);
}

function inputDot() {
    if (!displayValue.includes(".")) {
        displayValue += ".";
    }
}

function clear() {
    displayValue = "0";
}