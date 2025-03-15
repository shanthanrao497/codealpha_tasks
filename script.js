// Select the display input field
let display = document.querySelector(".display input");

// Function to append value to the display
function appendToDisplay(value) {
    display.value += value;
}

// Function to clear the display
function clearDisplay() {
    display.value = "";
}

// Function to delete the last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Function to evaluate the expression safely
function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

// Add event listeners to buttons
document.querySelectorAll("input[type='button']").forEach(button => {
    button.addEventListener("click", function () {
        let value = this.value;

        if (value === "=") {
            calculateResult();
        } else if (value === "AC") {
            clearDisplay();
        } else if (value === "DE") {
            deleteLast();
        } else {
            appendToDisplay(value);
        }
    });
});

// Optional: Enable keyboard support
document.addEventListener("keydown", function (event) {
    const key = event.key;

    if (!isNaN(key) || "+-*%".includes(key)) {
        appendToDisplay(key);
    } else if (key === "Enter") {
        calculateResult();
    } else if (key === "Backspace") {
        deleteLast();
    } else if (key === "Escape") {
        clearDisplay();
    }
});