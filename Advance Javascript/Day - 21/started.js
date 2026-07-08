// Variable scope: global, block, functional.

// what is scope: it defines till where we can use the created variable and functions 

// function scope(it can be used only in funtion)
// global (can be used any where in the code)
// block scope (can be used only in curly braces {})

function name() {
    var a = 12; // var is functional scoped so here we can use var only in the function
}

name()

var b = 10; // here this code is not inside any braces we can say that it is global scoped 

// blocked what ever it is in the block it is block scoped 



// execution context: memory creation and exection phase

// when ever JS sees a function it prepares a execution context this is a process which runs in 2 different phases 1. memory phase 2. execution phase

/*function dekh the he ek dabba ban jata hai or 
can say a space basically memory space hai jis me 
variable aur code store bhi kar sakthe hai aur run 
bhi basically means execution phase aur iss he ko 
ham exection context bolte hai
*/


// lexical scoping (we follow this in JS) and dynamic scoping 

// lexical scoping means physically (means where you are phsically available will decide what you can access)

function name() {
    var name = "vardhan";
                            // here i can access name in name function only
    function age() {
        age = 20;           // here i can access age in the age funtion only
    }
}


// dynamic scoping (we dont use this in JS)

let a = 12;

function abc() {
    console.log(a);  
}

function dfg() {
    console.log(a);
    abc();
}

dfg();
