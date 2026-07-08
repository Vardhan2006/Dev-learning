// this is consctructor function

// what is constructor: Constructors are functions designed to create new objects. They define properties and behaviors that will belong to the new object. Think of them as a blueprint for creating multiple objects of the same type.

function CreateBiscuits(name, price, color, company) {
    this.name = name;
    this.price = price;
    this.color = color;
    this.write = function(color) {
        let h1 = document.createElement("h1");
        h1.textContent = "Vardhan here!";
        h1.style.color = color;
        document.body.append(h1);
    };
} 

CreateBiscuits.prototype.company = "Lucky"; // we use when we some something common in every object we create than will will portotype like this eexample has same company makes different biscuits

let biscuit1 = new CreateBiscuits("oreo", 10, "red");
let biscuit2 = new CreateBiscuits("good day", 10, "Blue");

biscuit1.write("red");
biscuit2.write("blue");

// here biscuit1 is a object

/* output

biscuit2
CreateBiscuits {name: 'good day', price: 10}
biscuit1
CreateBiscuits {name: 'oreo', price: 10}

*/

// prototypes exaplanation

/*

If you attach a field to the constructor function's prototype, 
then all new instances (objects) created from that constructor will 
automatically have access to that field.

simply portotype means - shared memory instead of making same instance for all the objects

*/

// class

class CreatePencil {
    constructor(name, price, color, company) {
        this.name = name;
        this.price = price;
        this.color = color;
        this.company = company;
    }

    write(text) { // write is a method
        let h1 = document.createElement("h1");
        h1.textContent = text;
        h1.style.color = this.color;
        document.body.appendChild(h1);
    }
}

let p1 = new CreatePencil("natraj", 12, "red", "Natraj");
let p2 = new CreatePencil("DOMs", 12, "pink", "DOMs");

p1.write("dangerous");
p2.write("very dangerous");


// first thing which runs in the class is a constructor

// extends and super

// admin calls keeps what ever user has for that we use extends 


class User {
    constructor(name, address, role){
        this.name = name;
        this.address = address;
        this.role = role;
    }

    write(text) {
        let h1 = document.createElement("h1");
        h1.textContent = `${this.name} : ${text}`;
        document.body.appendChild(h1);
    }
}

class Admin extends User {
    constructor(name, address, role) {
        super(name, address, role);
        this.role = "admin";
    }
}

let u1 = new User("Vardhan", "HYD", "Dev");
let u2 = new User("Danger", "CND", "Don");
let a1 = new Admin("DOON", "US", "ROLER");


/* everthing the user has it extends to admin means now 
    admin also has the access to users details and also admin also has
    a seprate profile


    this is why we use super

    When a child class (admin) extends a parent class (user), you must call 
    super() inside the child's constructor before you can use
    the "this" keyword. This executes the parent class's constructor 
    and sets up the instance.

Differences Between Constructor Function and Class Constructor Syntax and Readability
    Constructor Function: Uses a function declaration and the new keyword.
                         Adding methods involves modifying the prototype.
    Class Constructor: Uses the class keyword and constructor method. 
                        Methods are defined within the class body, 
                        providing a cleaner and more readable syntax.

a1
Admin {name: 'DOON', address: 'US', role: 'admin'}
u1
User {name: 'Vardhan', address: 'HYD', role: 'Dev'}
u2
User {name: 'Danger', address: 'CND', role: 'Don'}

*/


