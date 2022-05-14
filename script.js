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
        this.currentOperand = this.currentOperand.toString() + number.toString();       // convert to string so we can add the number to the end of a string. toString() is used as JS would add these as numbers appended instead of added like 2+2=22.
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return 
        if (this.previousOperand !== '') {
            this.compute()
        }
        this.operation = operation                          // so the calculator knows which operand to use when calculating
        this.previousOperand = this.currentOperand;         
        this.currentOperand = '';                           // Allows the user to type out another operand whilst displaying the previous operand
    }

    compute(){
        let computation;
        const prev = parseInt(this.previousOperand)
        const current = parseInt(this.currentOperand)
        if(isNaN(prev) || isNaN(current)) return 
        switch(this.operation){
            case '+':
                computation = prev + current
                break;
            case '-':
                computation = prev - current
                break;
            case 'x':
                computation = prev * current
                break;
            case '/':
                computation = prev / current
                break;
            default:
                return;
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
    }

    displayUpdate() {
        currentOperand.innerText = this.currentOperand;         // So the buttons pressed will be displayed on the calculator
        if (this.operation != null){
            previousOperand.innerText = `${this.previousOperand} ${this.operation}`;    // displays previous operand with the operation so the user knows what arithmetic expression they clicked      
        } else {
            previousOperand.innerText = ''
        }
    }

}

const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const equal = document.querySelector('[data-operate]');
const allClear = document.querySelector('[data-clear]');
const currentOperand = document.querySelector('[data-current]');
const previousOperand = document.querySelector('[data-previous]');

const calculator = new Calculator (previousOperand, currentOperand);        // pass the elements to the class constructor

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.applyNumber(button.innerText);               // stores numbers pressed into the applyNumber function
        calculator.displayUpdate();                             
    })
})

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.displayUpdate();
    })
})

equal.addEventListener('click', button => {
    calculator.compute()
    calculator.displayUpdate();
})

allClear.addEventListener('click', button => {
    calculator.clear()
    calculator.displayUpdate();
})