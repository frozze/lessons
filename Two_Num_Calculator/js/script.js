
var result;



function mood() {
    if (firstNumber > 1000 || secondNumber > 1000){
        alert('Чё так много?????');
    }else if (
        alert('Чё не так, братиш?');
    )
    return;
}


document.getElementById("click").onclick = function click() {
    var firstNumber = document.getElementById("one").value;
    var secondNumber = document.getElementById("two").value;
    var arithmeticSymbol = document.getElementById("three").value;

        firstNumber = parseFloat(firstNumber);
        secondNumber = parseFloat(secondNumber);

    function factorial(n){
        if (n==1) return 1;
        else return n*factorial(n-1);
    }

    function reminder () {
        var rem = firstNumber % secondNumber;
        var quo = Math.trunc(firstNumber / secondNumber);
        return [quo, rem];
    }

    function mood() {
        if (firstNumber > 1000 || secondNumber > 1000){
            alert('Чё так много?????');
        }else if (
            alert('Чё не так, братиш?')
        )
            return;
    }

    switch (arithmeticSymbol) {
        case "+" :
            result = firstNumber + secondNumber;
            mood();
            break;
        case  "/" :
            result = firstNumber / secondNumber;
            mood();
            break;
        case  "x" :
            result = firstNumber * secondNumber;
            mood();
            break;
        case  "*" :
            result = firstNumber * secondNumber;
            mood();
            break;
        case  "-":
            result = firstNumber - secondNumber;
            mood();
            break;
        case "%" :
            result = reminder();
            mood();
            break;
        case "^":
            result = Math.pow(firstNumber, secondNumber);
            break;
        case  "":
            result = Math.pow(firstNumber, secondNumber);
            break;
        case "!":
            result = factorial(firstNumber || secondNumber);
            break;
        case "@":
            result = parseInt(firstNumber, secondNumber);
            break;
        default:
            console.log("error");
    }
    document.getElementById("res").value = result;
    console.log(result);
}


