const button = document.getElementById("toggleTheme");

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.body.classList.add("dark-theme");
    localStorage.setItem("theme", "dark-theme");
} else {
    document.body.classList.add("light-theme");
    localStorage.setItem("theme", "light-theme");
}

button.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("light-theme");
});

document.body.classList.add(localStorage.getItem("theme"));


// common confusions

/*
 why only strings are stored in local session: because it is designed false string

 understanding cookies 

*/