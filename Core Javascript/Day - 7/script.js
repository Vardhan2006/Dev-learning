// Function Statements

function Open() {
    console.log("Function Statements");
}

Open();


// Function Expression

let dj = function() {
    console.log("Function Expression");
}

dj();


// Fat arrow function

let fnc = () => {
    console.log("Fat Arrow Function");
}

fnc();


// Functions with Parameters and Arguments

// Code 1

function dance(v1) {
    console.log(`${v1} naach raha hai`)
}

dance("Raghav");
dance("Ghoda");

// Code 2

function add(v1, v2) {
    console.log(`${v1 + v2}`);
}

add(5, 5);
add(55, 55);


// Default, Rest and spread parameters

// Default

function add(v1 = 0, v2 = 0) {
    console.log(`${v1 + v2}`);
}

add(5, 5);

// Rest ... -> when these 3 dots are kept in a functions parameter space its rest 

function abcd(...val){
    console.log(val);
}

abcd(1, 2, 3, 4, 5);


// Return means where you have came from i will send you there

// can be used inside only function

function abc() {
    return 12;
}

let val = abc();
console.log(val);


// First class functions

// (We can use functions as values)


function bob(val) {
    val();
}

bob(function(){
    console.log("Betey");
});



// High order function is a function which return a function or accept and function in its parameter

function boy(val) {

    return function() {
        console.log("Don")
    }
    // here boy is a higher order function if val is not there than return should be there than we can say higher order function
}

boy()();


// pure vs impure functions

let a = 12;

function math() {
    console.log("Math")
}

function cal() {
    a++;                // Imprure function because value of a changes 
}



// closures (a function which returns a funtion and the returned function will use a vairable from the parent function)

function india() {

    let a = "India is my country";
    return function() {
        console.log(a);
    }
}

india()();



// lexical scoping

function ab() {
    let a = 1;     // I can access "a" only in ab function not outside it

    function cd() {
        let b = 2;  // I can access the "b" only in cd funtion not outside it

        function ef() {
            let c = 3;  // I can access the "c" only in ef funtion not outside of it
        }
    }
}




// IIFE (Immediately Invoked Function Expressions)

(function() {
    console.log("Hey");
}) ();



// Task 1

// What's the diff btwn function declaration and expression in terms of hoisting?

// function statement can be hoist but expression cant

// dj();

// let dj = function(){

// }

// Task 2

greet ();

function greet() {
    console.log("hello"); // we will see hello
}


// Task 3 converted to arrow function

let multiply = (a,b) => {
    return a * b;
};


// Task 4 (convert a impure function to pure function)


let total = 0;

function add(num) {
    let newtotal = total;
    newtotal += num;
}

