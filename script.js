function checkEvenOdd() {
    const number = document.getElementById("numberInput").value;
    const result = document.getElementById("result");

    if (number === "") {
        result.textContent = "Lütfen bir sayı girin.";
        return;
    }

    if (isNaN(number)) {
        result.textContent = "Geçerli bir sayı girin.";
        return;
    }

    if (parseInt(number) % 2 === 0) {
        result.textContent = number + " bir çift sayıdır.";
    } else {
        result.textContent = number + " bir tek sayıdır.";
    }
}
