// Data Types

// Primitive Data Type --> all values which we can copy and get a real copy

    // ==> string, boolean, number, null, undefined, symbol, bigint

// Reference Data Type --> all values which we copy we wont get real copy we get reference of the parent

    // ==> arrays [], objects {}, funtions ()


// null means no value given wantedly

let selectedstudents = null;

// undefined means created a variable and not given a value to it gets a default value undefined

let a;

// symbol --> it creates unique immutable value and place some where

let obj = {
    uid: 1,
    name: "vardhan"
};

let u1 = symbol("uid");

obj[u1] = "001";


// bigint

let a = 9007199254740991n;




