
// getElementById to access the HTML elements
const addition = document.getElementById("add");
const subtraction = document.getElementById("subtract");
const multiplication = document.getElementById("multiply");
const division = document.getElementById("divide");


// functions for basic arithmetic operations
function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    if (num2 === 0 || num1 === 0) {
        throw new Error("Cannot divide by zero");
    }
    return num1 / num2;
}

// add event listeners to the buttons

addition.addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById("num1").value) || 0;
    const num2 = parseFloat(document.getElementById("num2").value) || 0;
    const result = add(num1, num2);
    document.getElementById("calculation-result").textContent = result;
});

subtraction.addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById("num1").value) || 0;
    const num2 = parseFloat(document.getElementById("num2").value) || 0;
    const result = subtract(num1, num2);
    document.getElementById("calculation-result").textContent = result;
});

multiplication.addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById("num1").value) || 0;
    const num2 = parseFloat(document.getElementById("num2").value) || 0;
    const result = multiply(num1, num2);
    document.getElementById("calculation-result").textContent = result;
});

division.addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    try {
        const result = divide(num1, num2);
        document.getElementById("calculation-result").textContent = result;
    } catch (error) {
        document.getElementById("calculation-result").textContent = error.message;
    }
});