function showFor() {
    let num = document.getElementById("forNum").value;
    let text = document.getElementById("forText").value;
    let output = "";
 
    for (let i = 1; i <= num; i++) {
        output += i + ". " + text + "<br>";
    }
 
    document.getElementById("forOutput").innerHTML = output;
}
 
function clearFor() {
    document.getElementById("forOutput").innerHTML = "";
}
 
 
function showWhile() {
    let num = document.getElementById("whileNum").value;
    let text = document.getElementById("whileText").value;
    let output = "";
    let i = 1;
 
    while (i <= num) {
        output += i + ". " + text + "<br>";
        i++;
    }
 
    document.getElementById("whileOutput").innerHTML = output;
}
 
function clearWhile() {
    document.getElementById("whileOutput").innerHTML = "";
}
 
 
function showDoWhile() {
    let num = document.getElementById("doNum").value;
    let text = document.getElementById("doText").value;
    let output = "";
    let i = 1;
 
    do {
        output += i + ". " + text + "<br>";
        i++;
    } while (i <= num);
 
    document.getElementById("doOutput").innerHTML = output;
}
 
function clearDoWhile() {
    document.getElementById("doOutput").innerHTML = "";
}




