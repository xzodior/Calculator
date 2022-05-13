function add (...a) {
    let numbers = [...a];
    return numbers.reduce((initialValue, a) => initialValue + a, 0)
}

function subtract (...a){
    let numbers = [...a];
    return numbers.reduce((initialValue, a) => initialValue - a)
}

function multiply (...a){
    let numbers = [...a];
    return numbers.reduce((initialValue, a) => initialValue * a, 1);
}

function divide (...a){
    let numbers = [...a];
    return numbers.reduce((initialValue, a) => initialValue / a);
}

function operate(operator, ...nums){
    switch (operator){
        case "+":
            return add(...nums);
            break;
        case "-":
            return subtract(...nums);
            break;
        case "*":
            return multiply(...nums)
            break;
        case "/":
            return divide(...nums);
            break;
        default: 

    }
};

class Calculator {
    constructor (previousOperand, currentOperand) {
        this.previousOperand = previousOperand;
        this.currentOperand = currentOperand;
        this.clear();
    }
    
    clear() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = undefined;
    }

    applyNumber(number) {
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    displayUpdate() {
        this.currentOperand.innerText = this.currentOperand;
    }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const equal = document.querySelector('[data-operate]');
const allClear = document.querySelector('[data-clear]');
const currentOperand = document.querySelector('[data-current]');
const previousOperand = document.querySelector('[data-previous]');

const calculator = new Calculator (previousOperand, currentOperand);
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.applyNumber(button.innerText);
        calculator.displayUpdate();
    })
})

