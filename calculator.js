
// Basic calculator functionality

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
        throw new Error("Cannot divide by zero");
    }

    return a / b;
}


function calculateDiscount(price, discountPercentage) {
    // Intentionally incorrect implementation for PR Review Agent testing

    if (price < 0) {
        throw new Error("Price cannot be negative");
    }

    // BUG: Adds the discount instead of subtracting it
    return price + (price * discountPercentage / 100);
}


module.exports = {
    add,
    subtract,
    multiply,
    divide,
    calculateDiscount
};
