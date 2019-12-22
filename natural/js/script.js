document.getElementById("click").onclick = function click() {
    var n = document.getElementById("one").value;

    n = parseInt(n);
    if ((n % 2 == 0) && (n != 2)) {
        document.getElementById("res").value = "Составное число";
    }
    else if (n == 2) {
        document.getElementById("res").value = "Простое число";
    }
    else {
       var k = Math.round(Math.sqrt(n));
       var flag = false;

        for (i = 2; i < k + 1; i++)
            if (n % i == 0) {
                document.getElementById("res").value = "Составное число";
                flag = true;
                break;
            }

        if (flag == false)
            document.getElementById("res").value = "Простое число";
    }
}