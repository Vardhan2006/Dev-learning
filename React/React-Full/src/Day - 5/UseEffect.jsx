import React, { useEffect, useState } from 'react'

function UseEffect() {
  
    const [num, setNum] = useState(1)
    const [num2, setNum2] = useState(100)

    useEffect(function(){
        console.log("use effect is running...");
        
    },[num]) //the empty array is dependency so when its empty the useeffect will run only once now i added num so num is the dependency
  
    return (
    <div>
        <h1>{num}</h1>
        <h1>{num2}</h1>
        
        <button onClick={()=> {
            setNum(num+1)
        }}>Num 1</button>

        <button onClick={()=> {
            setNum2(num2+100)
        }}>Num 2</button>

    </div>
  )
}

export default UseEffect

/*

Imagine a big road lane on which a big truck(rendering process) is moving on road so 
in parallel so many things(processes) runs like api call, DOM manipulation on footpath beside the
road in a different lane 


Imagine the browser is a highway. The main road is the JavaScript main 
thread, and a big truck represents the rendering process. Since only 
one truck can move on this road at a time, rendering and JavaScript 
execution happen on the main thread. Meanwhile, tasks like API calls, 
timers, or network requests are handled by the browser in separate 
service lanes (Web APIs). These tasks don't block the truck. 
Once they are finished, their callbacks are placed in a waiting area 
called the Callback Queue. When the main road becomes free, the 
Event Loop moves those callbacks onto the main thread to be executed.


Breaking Down useEffect
Think of a React component's primary job as strictly calculating what the UI should look like. That calculation needs to be pure, fast, and shouldn't interact with the outside world. useEffect is your escape hatch. It allows you to synchronize your component with an external system (like a database, the DOM, or an API) without interrupting the UI rendering.

Here is the exact chronological order of operations when your UseEffect component runs:

React Renders: React reads your code and calculates that the initial state of num is 1. It prepares the HTML <h1>1</h1>.

Browser Paints: The browser updates the actual screen. The user can now physically see the number "1".

Effect Runs: React looks at your useEffect and says, "Okay, the screen is updated and the user can see it. Now I will run this extra side effect." Your console.log("use effect is running...") executes.

The Dependency Array (The "When")
The second argument of useEffect—the array—is your control valve. It tells React exactly how often to run that extra chore on subsequent renders.

No Array (useEffect(() => {...})): The effect runs after every single render. (Use this rarely; it can cause infinite loops if you update state inside it).

Empty Array (useEffect(() => {...}, [])): The effect runs only once when the component mounts (appears on the screen for the first time).
   
Array with Values (useEffect(() => {...}, [num])): The effect runs on the first render, and then only if the value of num has changed since the previous render.

In your code snippet, because you provided [num], React acts like a bouncer at a club checking an ID: "Did num change since the last time I rendered?" * When you click the button and num becomes 2, the answer is yes, so the effect runs again.

If you had a second piece of state in this component (like a text input) and you typed in it, the component would re-render, but because num stayed the same, this specific effect would not run.

*/