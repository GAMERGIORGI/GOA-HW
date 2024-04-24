function showPrompt() {
    const userInput = prompt("Enter something:");
    if (userInput !== null) {
        alert("You entered: " + userInput);
    } else {
        alert("No input provided.");
    }
}