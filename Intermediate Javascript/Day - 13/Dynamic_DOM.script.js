// Dynamic DOM


// Step 1 create variable like h1 and createElement(h1)
// step 2 add h1 into the html using textContent = "some thing" 
// step 3 use document.body.prepend(h1) or append(h1)

// Create Element
let h1 = document.createElement("h1");

// append element (means after)
h1.textContent = "Hello Man";
document.body.append(h1);

// styling using JS using .style
h1.style.color = "red"


// prepend element (means before)

let h2 = document.createElement("h2");
h2.textContent = "Hellow Woman";
document.body.prepend(h2)


// This is the output

/* Hellow Woman
Hello Man */

// Remove

let h3 = document.createElement("h3");
h3.textContent = "Hey Boss";
document.body.appendChild(h3);

//h3.remove();

// If the element already exists in the page and you want to find and remove it:
//document.querySelector("h3").remove(); 



// Name the types nodes in the DOM tree.
// node, element, text, comment and more....

// difference between element node and text node
// <p>this is text node p is parent node<p/>


// select all <li> elements and print their text using a loop

let list = document.querySelectorAll("li");
list.forEach(function (val) {
    console.log(val.textContent);
});


// Difference between innertext, textcontent, and innerHTML?

// innertext and textxontent mostly similar it changes the text which is inside html
// and innerHTML converts the tag for example if we want to chnage like h1.textcontent = "<li>" this will only print <li> but innerHTML convert it


// when should you use textcontent instead of innerText

// textcontent can also access hidden content and we use textcontent because its fast


// select a para and replace its content 

let p = document.querySelector("p");
p.innerHTML = "<b>Updated<b/> by JS"
p.style.fontSize = "12px";


// Get src of an image

let img = document.querySelector("img");
console.log(img.getAttribute("src"));


// what does setAttribute() do?

// it will change attribute of any element 

// ex: document.queryselector("img").setAttribute("src", "new src")


// Add a title attribute to a div dynamically 

let div = document.querySelector("div");
div.setAttribute("title", "HEEEYYY4545");

// Remove the disabled attribute from a button

let btn = document.querySelector("button");
btn.removeAttribute("Disabled");


// create element and add a img at the top

let im = document.createElement("img");

im.setAttribute("src", "data:image/png;base64,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");

document.querySelector("div").prepend(im);


// classList vs Style Property

// we can change change css using 2 methods 

// we prefer to use Class and style