// Created custum upload button and dynamically updates the file name on the button whenever we click the file

let btn = document.querySelector("#btn");
let fileinp = document.querySelector("#fileinp");

btn.addEventListener("click", function(){
    fileinp.click();
});

fileinp.addEventListener("change", function(dets){
    btn.textContent = dets.target.files[0].name;
});

