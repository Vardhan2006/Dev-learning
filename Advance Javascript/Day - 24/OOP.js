// this is consctructor function

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


