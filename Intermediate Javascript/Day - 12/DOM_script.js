// DOM

// Everything which is inside body we can says its part of DOM

// old method to call by ID
let abc = document.getElementById("abc");
console.log(abc);

// old method to call by Class
let elements = document.getElementsByClassName("elements");
console.log(elements);


// New methods to call

// queryselector

let ab = document.querySelector("h1");
console.log(abc);

// querySelectorAll (Looks like array but its not)

let a = document.querySelectorAll("h1")
console.log(a)


// Manuplating text using JS

let b = document.querySelector("h3");
b.textContent = "Hellow Man";

// innertext and textcontent will do same thing
// innerhtml: what ever tag i want add html element i can use innerhtml
// example: b.innerhtml = <i>Hey<i> this is change and come in italic

//b.hidden = true; this will hide the h3 from page.


// manipulated href
let url = document.querySelector("a");
url.href = "https://chatgpt.com";


// setting image attribute using JS

let img = document.querySelector("img");
img.setAttribute("src", "https://images.unsplash.com/photo-1780254865241-55112a6ad06b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
console.log(img.getAttribute("src"));
console.log(img.removeAttribute("src"));


