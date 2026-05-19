// Data Types

// Reference Data Type --> all values which we copy we wont get real copy we get reference of the parent

    // ==> arrays [], objects {}, funtions ()


// objects (If we change b than a will also change)

let a = {
    name: "Vardhan",
};

let b = a;

b.name = "Sai";

// Dynamic Typing --> js does not have static typing we have dynamix typing which means we can change data due to dynamic data Types

// Example (we can change the value on the go)

let a = 12;

a = true;
a = "harsh";
a = [];
a = null;
a = undefined;


// Type of quirks

typeof null
typeof NaN

// Type Coercion (== vs ===)

// It is a Concept in which a type will automatically get convert

"5" + 1  // it converts 1 into string and concatenate both

"5" - 1 // if it has + it does add or concat if its "- we have only one order substract so it converst 5 to num and does - 

// if any of the operands have string "string" js orders to concatenate




// Truthy vs falsy values

if(12){
    // Typically in bracket there should be true or false but there its 12 so js will says it as True
};


if(-1){
    // Typically in bracket there should be true or false but there its -1 so js will says it as True
};

if(null){
    // Typically in bracket there should be true or false but there its -1 so js will says it as True
};



 
// 0 false "" null undefined document.all NaN  (All these value will give you false) --> false


// Rest anything will give true anything....




// NaN === "number" (because Nan is a failed number operation so it is treated as number)




// Operators

// Arithmetic, Comparison, logicol, assignment, unary, ternary


// Arithmetic (+ - / * % **)
// Comparison

/*= 
==  (It wont check type which means 12 == "12" --> will give true but its false) Not Strict Comparison
=== (Thats why we have ==== which checks type also) Strict Comparison
!=  (It wont check type which means "Vardhan" == "Vardhan") Not Strict Comparison
!== (Thats why we have !== which checks type also) Strict Comparison
>= 
<= 
< 
> */



// assignment

// =
// +=
// -=
// %=
// /=
// *=

// Logical  ( && || !)

// Unary Operator 
// + - ! typeof ++ -- ()

// ternary (?:)

// condition ? code which executes if condition is true : code which executes if condition is false

12<3 ? console.log("true") : console.log("hello");


// To check the type of objects 

let a = [];

a instanceof Array


