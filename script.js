function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        var expression = document.getElementById('display').value;
        var result = eval(expression);

        var securityQuestion = `For security reasons, you must answer:\n${expression} = ?`;
        var userAnswer = prompt(securityQuestion);

        if (userAnswer !== null && parseInt(userAnswer) === result) {
            document.getElementById('display').value = result;
        } else {
            alert("Incorrect answer to security question!");
        }
    } catch (error) {
        alert("Invalid input or calculation");
    }
}
