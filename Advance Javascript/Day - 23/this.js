// this keyword

/* its a special keyword why because like other keywords 
have the value and nature same but "this keyword" value and nature 
changes based on where it is used 
*/

// this keyword in global scope
// window is prime minister - supreme thing

console.log(this); // Window {window: Window, self: Window, document: document, name: '', location: Location, …}

// inside function its still window

function abc() {
    console.log(this);
}

abc();

// method (in method its object not window)

// a function which is object is called as method but its still a function

let obj = {
    name: "vardhan",
    sayName: function () {
        console.log(this); // {name: 'vardhan', sayName: ƒ} 
    },
};

obj.sayName();

// if we make the arrow function instead of function statement this will lose the value and becomes obj to window

let ob = {
    name: "vardhan",
    sayName: () => {
        console.log(this); // {name: 'vardhan', sayName: ƒ} 
    },
};

ob.sayName();

// and if we make another ES5 function inside the method function "this" will lose its value and again becomes window to avaoid this we can use arrow function

// event handler (in event handler "this" is window)

document.querySelector("h1");

addEventListener("click", function () {
    console.log((this.style.color = "red"));          // "this" will be of the tag which has event listner "h1"
});


class name {
    constructor() {
        this.name = "vardhan"; 
        console.log(this.name);
    }
}

let val = new name();

/*output

vardhan
enter val
output: name {name: 'vardhan'}

*/

// "this" value 

// global - window
// function - window
// method with es5 fuc - object
// method with es6 fnc arrow fnc - window
// es5 fnc inside es5 fuc - window
// ws5 fnc inside es6 arrow fnc - object
// event handler - element which has eventlistner
// class - blank object

/*arrow func will take value from the parent so if "this" value of 
parent is window the arrows value will be window, if the parent func id arrow function it will
take value from global which will window.
*/


