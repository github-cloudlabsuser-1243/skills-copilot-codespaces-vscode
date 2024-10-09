const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

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
    if (b === 0) {
        console.log("Error: Division by zero");
        return null;
    }
    return a / b;
}

function calculate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            console.log("Invalid operator");
            return null;
    }
}

function promptUser() {
    rl.question('Enter first number: ', (num1) => {
        rl.question('Enter operator (+, -, *, /): ', (operator) => {
            rl.question('Enter second number: ', (num2) => {
                const a = parseFloat(num1);
                const b = parseFloat(num2);
                const result = calculate(operator, a, b);
                if (result !== null) {
                    console.log(`Result: ${result}`);
                }
                rl.question('Do you want to perform another calculation? (yes/no): ', (answer) => {
                    if (answer.toLowerCase() === 'yes') {
                        promptUser();
                    } else {
                        rl.close();
                    }
                });
            });
        });
    });
}

promptUser();