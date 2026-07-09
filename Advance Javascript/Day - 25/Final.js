// every code in JS runs line by line. its natural parttern but in some cases the code waits meanwhile the next code runs

console.log("hey 1");
console.log("hey 2");

setTimeout(() => {
    console.log("hey 3"); // here hey 3 waits to complete 10s but hey 4 runs
    
}, 100);

console.log("hey 4");


// sync and async

// the code which runs line by line runs is called sync code
// The code which gets ready to get run is called async


// another example

function iwillrunaftersometime(fnc) {
    //setTimeout(fnc, 10000);
}

iwillrunaftersometime(function() {
    console.log("Hey i cam after some time");
});

// a function sent in another function as parameter the function which is in parameter is called as Callback

/*

A callback function is a function that is passed as an 
argument to another function and is intended 
to be called (executed) later by that function.

*/

// The below function is written by some one else we only call in real world scenario

function Bringprofile(username, callback) {
    setTimeout(() => {
        console.log(`profile fetched of ${username}`);
        callback({username});
    }, 7000);
}

Bringprofile("harsh", function (data) {
    console.log(data); 
});