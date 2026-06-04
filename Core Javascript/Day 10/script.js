// Destructoring

let arr = [10,20,30,40,50,60];

let [a,b, , c] = arr; 


// Spread operator

let ary = [1,2,3,4,5,6,7];

let ary2 = [...ary];    // we here copied an array using spread operator

ar = ary2.pop();


// Tasks print mango, add 1 fruit at end and start, remove a fruit and push a fruit

let fruit = ["apple", "mango", "banana"];

fruit[1];

fruit.push("pineapple");
fruit.unshift("jack");
fruit.pop();
fruit.push("kiwi");

// Difference between push and unshift

// push: it adds element in an array at the end
// unshift: it adds element in an array at the start



// Insert red and blue at index 1 adding using splice

let colors = ["green", "yellow"];

colors.splice(1, 0, "red", "blue"); //(index, how many to remove, what to add)


// extract only middle 3 elements

let nums = [1,2,3,4,5,6,7];

let newnums = nums.slice(2,5); // index 2 to 5


// sort and reverse

names = ["Zara", "dira", "ana", "bina"];

names.sort().reverse();


// square numsbers present in the app using map

num = [1,2,3,4];

let newnum = num.map(function(val){
    return val * val;
})


// use filter to keep nums greater than 10

let n = [1,2,3,5,9,7,44,55];

let newn = n.filter(function(val) { 
    return val > 10;
})