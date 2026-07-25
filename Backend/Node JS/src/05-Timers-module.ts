/*
1. setTimeout()     - Runs code once after a specified delay.
2. setInterval()    - Runs code repeatedly after every specified interval.
3. clearTimeout()   - Cancels a scheduled setTimeout().
4. clearInterval()  - Stops a running setInterval().
5. setImmediate()   - Runs the callback on the next iteration of Node's event loop.
*/


function runSetTimeout(): void {
    console.log('Set Timeout example started');

    setTimeout(()=> {
        console.log('Hey i arrived after 5 Seconds');
    }, 5000)
}



// To clear timeout

function runClearTimeoutExample(): void {
    const timerId = setTimeout(()=>{

        console.log('This message will not run'); // never executes.

    }, 5000)
    
    clearTimeout(timerId) // scheduled a timer...and immediately cancelled it.
    console.log('clear time out cancled the above message');
}



function runSetIntervalExample(): void {
    let count = 0

    const intervalId = setInterval(()=>{
        count++

        console.log(`SetInterval Tick: ${count}`);

        if (count === 5) {
            clearInterval(intervalId)

            console.log("setInterval Stopped");
            
        }
        
    }, 1500)
}




function runsetImmediateExample(): void {
    setImmediate(()=> {
        console.log("setImmediate Callback");    
    } )

    console.log("synchronous code after setImmmediate");
}




function runTimerDemo(): void {
    runSetTimeout();
    runClearTimeoutExample();
    runSetIntervalExample();
    runsetImmediateExample();
}

runTimerDemo();