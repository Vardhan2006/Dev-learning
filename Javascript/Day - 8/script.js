// Task 1 BMI Calculator

function bmi(weight, height){
    return weight / (height * height);
}

console.log(bmi(63,1.7).toFixed(2));


// Task 2

function discountCalculator(discount) {
    return function(price) {
        return price - price * (discount / 100);
    }
}

let discounter = discountCalculator(10);
console.log(discounter(200));


// Task 3

function counter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

let c = counter();
console.log(c());
console.log(c());
console.log(c());


// Task 4

function double(val) {
    return val*val;
}

console.log(double(10));



// Task 5 IIFE

(function () {
    const password = "secret";
    console.log(password);
}) ();

console.log(password); // IIFE we can create private variables this console is outside the function so we cannot access the variable


