const display = document.getElementById('display');

function append(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function start() {
    display.value = '';
}

// Calculate expression
function calculate() {
    try {
        let expression = display.value;

        // Replace × and ÷ with * and /
        expression = expression.replace(/×/g, '*').replace(/÷/g, '/');

        // Validate binary expression (only 0,1,+,-,*,/)
        if (!/^[01+\-*/]+$/.test(expression)) {
            display.value = "Error!";
            return;
        }

        // Split by operators and convert binary to decimal
        let decimalExpr = expression.replace(/[01]+/g, (match) => parseInt(match, 2));

        // Evaluate in decimal
        let result = eval(decimalExpr);

        // Convert result back to binary
        display.value = Math.floor(result).toString(2);
    } catch {
        display.value = "Error!";
    }
}
