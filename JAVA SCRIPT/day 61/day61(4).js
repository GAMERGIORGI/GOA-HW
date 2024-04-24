function compareAndLog() {
    let num1 = parseFloat(prompt('Enter the first number:'));
    let num2 = parseFloat(prompt('Enter the second number:'));

    if (!isNaN(num1) && !isNaN(num2)) {
        if (num1 === num2) {
            console.log('სწორი ხარ :))');
        } else {
            console.log('არასწორი ხარ!!');
        }
    } else {
        console.log('Please enter valid numbers.');
    }
}

compareAndLog();