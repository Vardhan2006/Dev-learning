// Dynamic DOM


// Step 1 create variable like h1 and createElement(h1)
// step 2 add h1 into the html using textContent = "somw thing" 
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

