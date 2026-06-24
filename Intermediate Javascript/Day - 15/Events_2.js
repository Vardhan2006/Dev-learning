let form = document.querySelector("#form");

let nameInput = document.querySelectorAll("#input input")[0];
let ageInput = document.querySelectorAll("#input input")[1];
let emailInput = document.querySelectorAll("#input input")[2];

let cardName = document.querySelector(".card h3");
let cardRole = document.querySelector(".card h5");
let cardDesc = document.querySelector(".card p");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    cardName.textContent = nameInput.value;
    cardRole.textContent = ageInput.value;
    cardDesc.textContent = emailInput.value;
});