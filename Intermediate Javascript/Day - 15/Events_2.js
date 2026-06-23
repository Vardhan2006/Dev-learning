// submit event triggers when user clicks submit button
// by default form submission reloads the page
// preventDefault() stops the default browser action

let form = document.querySelector("#form");
let inputs = document.querySelectorAll("#input");
let main = document.querySelector("#main");

form.addEventListener("submit", function (dets) {
    dets.preventDefault();

    let card = document.createElement("div");
    card.classList.add("card");

    let profile = document.createElement("div")
    profile.classList.add("profile");

    let img = document.createElement("img");
    img.setAttribute("src", "https://plus.unsplash.com/premium_photo-1688572454849-4348982edf7d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDk4fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D");

    let h3 = document.createElement("h3");
    h3.textContent = "Lady";
    let h5 = document.createElement("h5");
    h5.textContent = "BOOOOOOOOM"
    let p = document.createElement("p");
    p.textContent = "I am a product designer who lover desiging products";

    profile.appendChild(img);
    card.appendChild(profile);

    card.appendChild(h3);
    card.appendChild(h5);
    card.appendChild(p);

    main.appendChild(card);

});