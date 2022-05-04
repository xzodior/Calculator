function add (...a) {
    let numbers = [...a];
    return numbers.reduce((initialValue, a) => initialValue + a, 0)
}

function subtract (a, b){
    return a-b;
}

function multiply (...a){
    let numbers = [...a];
    return numbers.reduce((initialValue, a) => initialValue * a, 1);
}

function divide (...a){
    let numbers = [...a];
    return numbers.reduce((initialValue, a) => initialValue / a);
}

function operator(num1, num2, operator){
    let string = operator.toString();
    switch (operator){
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

let buttons = document.querySelectorAll('.button').forEach(el => {
    el.addEventListener('click', ()=> {
        console.log(el.textContent);
    })
});