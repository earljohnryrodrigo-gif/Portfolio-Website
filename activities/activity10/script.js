function calculate(){
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
 
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("sum").innerHTML = "Please enter valid numbers.";
        return;
    }
 
    const sum = (num1 + num2).toFixed(2);
    const difference = (num1 - num2).toFixed(2);
    const product = (num1 * num2).toFixed(2);
    const quotient = num2 !== 0 ? (num1 / num2).toFixed(2) : "Cannot divide by zero";
    const modulo = num2 !== 0 ? (num1 % num2).toFixed(2) : "Cannot divide by zero";
 
    document.getElementById("sum").innerHTML =
        "Sum: " + sum + "<br>" +
        "Difference: " + difference + "<br>" +
        "Product: " + product + "<br>" +
        "Quotient: " + quotient + "<br>" +
        "Modulo: " + modulo;
}
 
function clearFields(){
    document.getElementById("sum").innerHTML = "";
}