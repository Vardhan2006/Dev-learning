/* Settime out works once and setinterval runs everytime */

// setTimeout(() => {
//     console.log("SetTime Out"); // it runs only one time
// }, 5000);

// setInterval(() => {
//    // console.log("SetInterval");
// }, 5000); // it runs in an interval of 5 seconds means runs after every  secs


// clearly the time out

let tm = setTimeout(() => {
    console.log("Cleared");
}, 3000); // here after 3 secs nothing will log because it has cleared

clearTimeout(tm);


// similarly goes with set interval

// let ti = setInterval(() => {
//    //console.log("SetInterval");
// }, ); 

// clearInterval(tm);

let count = 10;

let interval = setInterval(() => {
    if (count >= 1) {
        count--;
        console.log(count);
    } else clearTimeout(interval);
},1000);



