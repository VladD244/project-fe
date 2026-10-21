const button = document.getElementById("btn-schimba");
const mesaj = document.getElementById("mesaj-interactiv");

const culori = ['#f4f7f6', '#e8f8f5', '#fef9e7', '#ebf5fb', '#f9ebf5'];

button.addEventListener("click", function() {
    const culoareAleatoare = culori[Math.floor(Math.random() * culori.length)];
    document.body.style.backgroundColor = culoareAleatoare;
    mesaj.textContent = "Felicitări! Ai rulat primul tău cod JavaScript!";
    mesaj.style.color = "#27ae60";
});