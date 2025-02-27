const screen = document.getElementById("screen");  //display numbers
const button = document.querySelectorAll("button"); // for all the button

//variable to store numbers and operators 
let currentInput = ""; //user typing
let previousInput = ""; //storing the first number 
let operator = ""; //(+-*/)

//Function to refresh screen
function refreshScreen(value) {
    screen.innerText = value;
}

//looping all the buttons
button.forEach(button => {
    button.addEventListener("click", () => {
        const buttonText = button.innerText; //Get the text of the clicked button

        //function of the "C" button
        if (button.id === "clear") {
            currentInput = "";
            previousInput = "";
            operator = "";
            refreshScreen("0");
            return; // stop execution
        }

        //function for "=" button
        if (button.id === "equals") {
            if (currentInput !== "" && previousInput !== "" && operator !== "")  {
                let result = calculate(previousInput, currentInput, operator);
                refreshScreen(result);
                currentInput = result;
                previousInput = "";
                operator = "";
            }
            return;
        }

        //function operators (+,-, x, /)
        if (button.classList.contains("operator")) {
            if (currentInput !== "") {
                previousInput = currentInput;
                operator = buttonText;
                currentInput = ""; //clear for next number
            }
            return;
        }
        //function number and decimal
        if (button.classList.contains("number") || buttonText === ".") {
            //prevent multiple decimal 
            if ( buttonText === "." && currentInput.includes(".")) return;

            currentInput += buttonText; //add click number
            refreshScreen(currentInput);
        }
    });
});

//function to perfom calculations
function calculate(num1, num2, operator) {
    let n1 = parseFloat(num1);
    let n2 = parseFloat(num2);
    if (operator === "+") return (n1 + n2).toString();
    if (operator === "-") return (n1 - n2).toString();
    if (operator === "x") return (n1 * n2).toString();
    if (operator === "÷") {
        if (n2 === 0) return "Error"; //prevent dividing by 0
        return (n1/n2).toString();
    }
    return num2;
}