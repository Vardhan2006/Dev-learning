// Event object: target, type, preventdefault

/*  here what ever we write inside the functions like "dets" or "evt" it is called event object
Target: what ever we are targetting so make the event happen is target here it is "div main" so when ever the target main div is  click the event will happen
Type: types what type of event should happen when target hits like click, mouseover, keyup
PreventDefault: for example when ever we we submit a form after entering the details the form gets reloads and the data gets disappeared so to prevent that defalt reload nature we use preventDefault */

/*
let main = document.querySelector("#main");

main.addEventListener("click", function (dets) {

}); */



// Event Bubbling and Capturing


// on what ever if event comes but if there is no listener our event will go and search for the listener in the parent and so on.. moves upwards

/*

example

main div
    nav div
        links
        button

if event listener is not there on button it will move to link if not there too it will
move to nav div if not there move to main div if not there nothing will happen

*/


// here in this code when ever we click on button and nav we get a alert but it should not work when we click button because we have only given eventlistener to nav not button so it check to the parent thats how event bubbling works

let nav = document.querySelector("#nav");

nav.addEventListener("click", function(){
    //alert("There is a listener");
});


let ul = document.querySelector("ul");

ul.addEventListener("click", function(DETS){

   // DETS.target.classList.toggle("lt");

    // DETS.target.style.textDecoration = "line-through";
    // console.log(DETS.target); 
});


// Event Capturing (rarely covered topic in YT)

/* So here lets take 4 elememts and we added event listner
to the first one which we need but here it wont matter
that there is listner or not it will move to the parent even though there is already a listener to
the child and is there is listner to other 3 elements also they will 
also run 

check out the below example: */


let btn = document.querySelector("#btn");
let a = document.querySelector(".a");
let b = document.querySelector(".b");
let c = document.querySelector(".c");

btn.addEventListener("click", function() {
    console.log("button clicked");
});

a.addEventListener("click", function() {
    console.log("a clicked");
}, true);

b.addEventListener("click", function() {
    console.log("b clicked");
});

c.addEventListener("click", 
    function() {
    console.log("c clicked");
}, true ); // , ture after curly braces make event capture ON

/* 
button clicked
c clicked
b clicked
a clicked
*/


/* 

jab bhi aap click krte ho ya koi bhi event raise krte ho to
aapka jo event flow do phases mein chalta hai:

phase 1: event top level element se neeche ki taraf aayega
phase 2: event raised element se parent ki taraf jaayega

aur pahle phase 1 hoti hai

and phase 1 is off by default but we can make it on and off

first capture phase starts than event bubble phase because
capture phase is off by default

*/


