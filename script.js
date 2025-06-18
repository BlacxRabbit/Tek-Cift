function checkNumber() {
  const number = document.getElementById("numberInput").value;
  const result = document.getElementById("result");

  if (number === "31") {
    result.textContent = "Sayı: 31 — SJSJSJSJSJSJ 😂";
    return;
  }

  if (number === "") {
    result.textContent = "Lütfen bir sayı girin.";
    return;
  }

  if (isNaN(number)) {
    result.textContent = "Geçerli bir sayı girin.";
    return;
  }

  const num = parseInt(number);
  if (num % 2 === 0) {
    result.textContent = `${num} bir çift sayıdır.`;
  } else {
    result.textContent = `${num} bir tek sayıdır.`;
  }
}
