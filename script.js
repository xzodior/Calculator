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

function operate(num1, num2, operator){
    let string = operator.toString();
    switch (string){
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        default: 
        return alert ('enter operator(+, -, /, *) wrapped in quotation marks');
    }
};

let display = document.getElementById('calculator-display');
let buttons = document.getElementsByClassName('button');
let numbers = document.querySelectorAll('[data-number]').forEach(number =>{
    number.addEventListener('click', function(){
        console.log(number.textContent);
        display.textContent += number.textContent;
    })
})

let operator = document.querySelectorAll('[data-operator]').forEach(operator =>{
    operator.addEventListener('click', function(){
        console.log(operator.textContent);
        display.textContent += operator.textContent;
    })
});

let clear = document.querySelectorAll('[data-clear]').forEach(clear => {
    clear.addEventListener('click', function(){
        display.textContent = '';
    });
});

let remove = document.querySelector('[data-delete]');
remove.addEventListener('click', function (){
    display.textContent = display.textContent.slice(0, -1);
})

let answer = document.querySelector('[data-operate]');
answer.addEventListener('click', function (){
    
})