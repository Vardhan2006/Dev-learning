let nm = document.querySelector("#name");
let form = document.querySelector("form");

form.addEventListener("submit", function (dets) {
    dets.preventDefault();
    
    if (nm.value.length <= 2) {
        document.querySelector("#hide").style.display = "initial";
    } else {
        document.querySelector("#hide").style.display = "none"
    }
});


// regex now one writes this by them self because we can find it on internet and its is used for validation like what it will allow a person to enter in their user email section while login like that its just an example

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

console.log(validateEmail("vardhan@gmail.com")); // true
console.log(validateEmail("vardhan.com"));       // false
console.log(validateEmail("abc@"));              // false
console.log(validateEmail("abc@gmail"));         // false