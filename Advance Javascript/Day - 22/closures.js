/*closures are functions which are inside a parent function and the 
inside function is returing some thing and the returning function
is using a variable of the parent functions this is closure */

/*

so what you are saying is the outerfun runs first the local exection 
context is created and the word hello is stored in it and after execution 
the space and main outerfun gets destroyed but the variables are inside 
the backpack stored by the outerfun and the innerfun takes the hello 
from the backpack and attaches to the name which is being passed by 
the same vriable say hello which before ran the outerfun? now it runs the innerfun ? 

*/


/*

A closure is created when an inner function uses variables from its parent 
function. When the parent function finishes execution, JavaScript does not 
destroy those required variables. Instead, it stores them in a hidden lexical 
environment (backpack) attached to the returned function, allowing the inner 
function to remember and access those variables later.

*/

// advantages (private variables, global pollution)

// example code

function name() {
    let name = "vardhan";

    return function () {
        console.log(name);
    }
}

name();


// example code

function greetFactory(greetingWord) {

    // This is the inner function being returned
    return function (name) {
        console.log(greetingWord + ", " + name);
    };
}

// 1. We create a custom greeter
const sayHello = greetFactory("Hello");

// 2. We use our custom greeter
sayHello("Alice"); // Output: "Hello, Alice"


// bank account example

function bankAccount() {

    let balance = 1000;

    return {
        deposit(amount) {
            balance = balance + amount;
        },

        getBalance(){
            return balance;
        }
    }
}

const account = bankAccount();

amount.deposit(500);

console.log(account.getBalance()); // 1500
console.log(account.balance); // undefined  


