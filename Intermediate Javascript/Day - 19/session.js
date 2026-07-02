//local Storage: storing the data in your browser which is not deleted even when broswer is closed (we need to store in strings otherwise it will not be stored properly)

// session storage: it stores the data temporaryly means if tab is closed the data is gone

// cookies: it also stores the data and keeps your data in the property called cookies in the broswser this concept is made to save small or light data


// localStorage and sessionStorage can store upto 5MB


// local storage 

/* Things to learn: store, fetch data, remove, update*/

// localStorage.setItem("name", "Sai") // store

// let val = localStorage.getItem("name"); // fetch

// localStorage.removeItem("name"); // remove

// localStorage.setItem("name", "Sai") // update it rewrite the old value if name already has a value


/* session storage same as local this is from console

sessionStorage
Storage {name: 'Vardhan', length: 1}name: "Vardhan"length: 1[[Prototype]]: Storage
sessionStorage.removeItem("name");
name
''
sessionStorage
Storage {length: 0}length: 0[[Prototype]]: Storage


sessionStorage
Storage {length: 0}length: 0[[Prototype]]: Storageclear: ƒ clear()getItem: ƒ getItem()key: ƒ key()length: (...)removeItem: ƒ removeItem()setItem: ƒ setItem()constructor: ƒ Storage()Symbol(Symbol.toStringTag): "Storage"get length: ƒ length()[[Prototype]]: Object
sessionStorage.setItem("age", "15");
undefined
sessionStorage
Storage {age: '15', length: 1}
sessionStorage.set
undefined
sessionStorage.setItem("age", "20");
undefined
sessionStorage
Storage {age: '20', length: 1}

*/



// cookies (light data means: nearly 4KB data)


/*

document.cookie = "name = Vardhan";
'name = Vardhan'
document.cookie = "age = 20";
'age = 20'
name
''

*/


// we can only store string in localstorage

localStorage.setItem("names", JSON.stringify(["Vardhan", "Raghav"]));

// this is the way we can use array or objects also

/*

localStorage
Storage {names: '["Vardhan","Raghav"]', length: 1}
JSON.parse('["Vardhan","Raghav"]');
(2) ['Vardhan', 'Raghav']

*/