let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");

document.querySelector("#emailError").textContent = "";
document.querySelector("#passwordError").textContent = "";
document.querySelector("#resultMessage").textContent = "";

form.addEventListener("submit", function (dets) {
    dets.preventDefault();

    let isValid = true;

    const emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    let emailans = emailregex.test(email.value);
    let passwordans = passwordRegex.test(password.value);

    if (!emailans) {
        document.querySelector("#emailError").textContent = "Email is incorrect";
        document.querySelector("#emailError").style.display = "initial";
        isValid = false;
    }

    if (!passwordans) {
        document.querySelector("#passwordError").textContent = "Password is incorrect";
        document.querySelector("#passwordError").style.display = "initial"
        isValid = false;
    }

    if (isValid) {
        document.querySelector("#resultMessage").textContent = "Everything is correct";
    }

});


/* Value vs textContent

we use .value to take the input what ever is in input to access that we use value

we use to set or take values from text html or modify directly in the html like that

*/