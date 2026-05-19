let x = 3;
let y = x++;

let p = 4;
let q = ++p;

let m = 10;

let n = 5;
let result = n++ + ++n; // first the values is 5 it becomes 6 than after + than 6 becomes 7 than 7+5 = 12

console.log(x,y);
console.log(p,q);
console.log(m--);
console.log(m);
console.log(result);



// task 1

let likes = 100;

function likepost() {
    return ++likes;
}

console.log(likepost());
console.log(likes);


// task 2   (matched)

let count = 5;

if (count-- === 5) {
    console.log("matched");
} else {
    console.log("not matched");
}




// if else else if



// switch case

// early return pattern\

// Task 1

function getval(val) {
    if (val < 25) return "D";
    else if (val < 50) return "c";
    else if (val < 75) return "B";
    else return "A";
}

console.log(getval(12));


// Task 2

function getGrade(score) {
    if (score >= 0 && score <= 32) return "Fail";
    else if (score >= 33 && score <= 59) return "D";
    else if (score >= 60 && score <= 69) return "C";
    else if (score >= 70 && score <= 79) return "B";
    else if (score >= 80 && score <= 89) return "A";
    else if (score >= 90 && score <= 100) return "A+";
    else return "Invalid";
}

console.log(getGrade(90));


// Task 3 Rock Paper Scissors logic


function rps(user, computer){
    if (user === "rock" && computer === "scissor") return "User Wins";
    else if (user === "scissor" && computer === "rock") return "Computer Wins";
    else if (user === "scissor" && computer === "paper") return "User Wins";
    else if (user === "paper" && computer === "scissor") return "Computer Wins";
    else if (user === "paper" && computer === "rock") return "Computer Wins";
    else if (user === "rock" && computer === "paper") return "Computer Wins";
    else return "invalid"
}

console.log(rps("paper", "scissor"));



