// browser main koi b harkat karo event raise hoga ex: clicking, moving, typing like anything which happens on the screen

// event means some action has happened on the screen
// event listener means the reaction to the action

// here we just used querySelctor to select h1, added eventlistener to give reaction on click and we have given what should happen if it gets clicked color changes to red

let color = document.querySelector("h1");
color.addEventListener("click", function () {
    color.style.color = "red";
});

// RemoveEvent listner

function click() {
    para.style.color = "green";
};

let para = document.querySelector("p");
para.addEventListener("click", click);
para.removeEventListener("click", click);

let btn = document.querySelector("button");
btn.addEventListener("dblclick", function () {
    btn.style.background = "pink";
});

// input (printing what ever input we get one by one but when we click backspace it gives null so for countering that we use if condtion that if not equal to null than console)

let name = document.querySelector("input");
name.addEventListener("input", function (details) {
    name.style.color = "red";
    name.style.background = "lightblue";
    if (details.data !== null) {
        console.log(details.data);
    };
});


// change event works when there is any change in input select or textarea

let sel = document.querySelector("select");
let select = document.querySelector("#selection");

sel.addEventListener("change", function(details){
    console.log(details.target.value);
    select.textContent = "Device Selected";
});

// Task we click any key names comes on screen

let h1 = document.querySelector("h1")
window.addEventListener("keydown", function(dets){
    if (dets.key === " "){
        h1.textContent = "SPC"
    } else {
        h1.textContent = dets.key;
    }
 
})



