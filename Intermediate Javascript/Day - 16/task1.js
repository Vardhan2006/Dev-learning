let inp = document.querySelector("input");
let span = document.querySelector("span");

inp.addEventListener("input", function(){
    span.textContent = inp.value.length;
});