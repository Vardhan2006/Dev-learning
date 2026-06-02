// let user = {
//     name: "Lucky",
//     age: 20,
//     hair: "Black",

//     address: {
//         city: "Hyderabad",
//         PIN: 500098,
//         area: {
//             Street: "Peerzadiguda",
//             Colony: "DDR colony",
//         },
//     },

// };

// let {Street, Colony} = user.address.area;   // Destructuring

// for (let key in user) {
//     console.log(key);
// }

// // user.address to get keys of address

// object.keys(user);

// // Object.keys(user); ==> will give     (4) ['name', 'age', 'hair', 'address']

// // Object.entries(user); 

// // (4) [Array(2), Array(2), Array(2), Array(2)]
// // (2) ['name', 'Lucky']
// // (2) ['age', 20]
// // (2) ['hair', 'Black']
// // (2) ['address', {…}]


// // Task 1

// let student = {
//     firstname: "Vardhan",
//     age: 20,
//     isenrolled: true,
// }; 


// // access name from above 

// console.log(student["firstname"]);

// let {"firstname": firstname} = student;

// for (let key in student){
//     console.log(key);
// };



// Deep Clone of obj 1

let obj1 = {
    info: {
        score: 99
    }
};

let obj2 = JSON.parse(JSON.stringify(obj1));
obj2.info.score = 100;


// Rewrite this safely using optional chaining (which means using "?" will not thrown an error its like it check if is there if not just gives undefined instead of error)

const person = {};
console.log(person?.profile?.name);


// Use a variable to dunamically assign a property

const key = "role";

let obj = {
    name: "Vardhan",
    [key]: "admin",
};


