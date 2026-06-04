// words and Key words
//keyword is a special word which has a defined meaning

// var, let, const

// Var we can avoid because its old now
// we use Let when we need to change like value often cricket score
// we use const when we dont have to change value like pi 3.14


// Declarations and Initialization (Same with let)

var a; // Declaration
var a = 1; // Declaration and Initialization

// when we use var it add it into window
// functioned scoped hota hai ye variable means we can use it any where inside a function
// we can declare again with same name and there will be no error 

var a = 1;
var a = 2;


// Scope (global, block, functional)

// global (can be used in any where in the code)

var a = 12; 

// functional (we can access in a function)

function abc(){
    var a = 12;
}

// block when its in a block { } 

function abc(){
    let a = 12;
}

// we can use let inside a block but, var ignores the block


// Reassignment

var a = 1;
a = 2;

let b = 12;
b = 13;

// redeclaration possibile with var but not with let

var a = 1;
var a = 2;


// Temporal Dead Zone (space above the let and const)

console.log(a);
// Temporal Dead Zone
// Temporal Dead Zone
// Temporal Dead Zone
// Temporal Dead Zone
// Temporal Dead Zone
// Temporal Dead Zone
let d = 12;



// Hoisting Impact per type

var a = undefined;


/*hoisting -> when we create a variable in js it gets divided in to two parts 
and its declare part moves upwards and Initialization part stays down*/

console.log(a)


// so i create the below var at 84 but i am accessing it at 80 becuase the line 84 gets divided into 2 which you can see in line 74 and it shows undefined thats ye
var a = 12;


// Hoisting happens in let, const, and var its controversial because many wont think same

console.log(a)
let a = 1;          // it gives it is not Initialized which means its already declared


// Task 

console.log(nm);

var nm = "Vardhan";  // it will give undefined



// Task

console.log(age);  
let age = 25;       // it will give not Initialized


// Task

var x = 1;

{
    var x = 2;      // var is functional scope means it respects funtions not blocks so it 2 overwrites 1 and prints 2
}

console.log(x)



// Task 

let a = 10; 
{
    let a = 20;
    console.log("In", a);   // it will give both 
}

console.log("out", a)


