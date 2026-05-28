// Arrays

let marks = [10, 42, 52, 63];

// to access in console use marks[index]

marks[2] = 20;

// Methods

marks.push(30);
marks.pop(); // generally removes last num

marks.shift(); // removes first num
marks.unshift(30); // adds num at start

marks.splice(2, 1); // remove any number from arr (index, how many values to remove)
let newmarks = marks.slice(0, 2); // removes numbers from 0 to 2 means it will remove 0 and 1

// splice changes the array but splice wont instead it returns a new copy which we can take in a new variable.

marks.reverse(); // reverses it

let sr = marks.sort(function(a,b) { // sort accepts a function to sort in ascending or descending
    return b - a; // decending order
});

//console.log(marks);





// foreach what foreach does is it goes to the each elemet 

let arr = [1,2,3,4,5];  // here we are going to each element of the arr and sending the value into val and printing it

arr.forEach(function(val) {
    //console.log(val);
})




// Map

let nums = [1,2,3,4,5];
let num = [1,2,3,4,5];

// Definition: we use map if we want to make a new array on basis of previous arrays data

// when we see a map create a blank array in you mind and the function which returns a value add it in that blank array 

let newnums = nums.map(function(val){
    return 12;
})

let newnum = num.map(function(val){
    if (val > 3) return val; // if if is not true it returns undefined
});

//console.log(newnums);


// jab bhi aise koi case dikhjay jaha par ek array say naya array banega and wo array kuch values ko rakhega then we use map


// Filter it takes some values from the array

let n = [1,2,3,4,5];

let newn = n.filter(function(val){
    if (val > 3) return true
})

// console.log(newn); // it will give [4,5]




// Reduce (for example if i want to add all the nums of arr)

let numbers = [1,2,3,4,5];  // accumulator stores the value each time after the addition

let ans = numbers.reduce(function(accumulator, val){
    return accumulator + val;
}, 0);




// Find

let dj = [1,2,3,4,5];

let va = dj.find(function(val){
    return val ===1;
})



// Some

let som = [10,20,30,40,50,60];
let any = som.some(function(val){   // can use if we want to find if its there or not it shows either true or false
    return val > 90;
});


// Every (check if everyone passes the condtion or not and shows using true or not)
let eve = [10,20,30,40,50,60];
let ev = eve.every(function(val){
    return val > 15;
});