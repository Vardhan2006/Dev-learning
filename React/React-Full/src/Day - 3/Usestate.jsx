import React from 'react'
import { useState } from 'react';

function hooks() {

  const [num, setnum] = useState(0)

  function increase() {
    setnum(num+1)
  }

  function decrease() {
    setnum(num-1)
  }

  return (

    <div>
      <h1>{num}</h1>
      <button id='btn' onClick={increase}>Increase</button>
      <button id='btn' onClick={decrease}>Decrease</button>
    </div>
  )
}

export default hooks




// I can anything directly from website because react is in between 
// so when we want to change anything we tell react to do it 
// and in between the hooks like usestate 


/*

what is hooks?
Hooks are special functions, that allow as to use use state 
and other react features in functional components,  earlier
when we used to create react app using functional component,
then we did not have access to the state management and lifecyle
methods.

To access these features we had to add class components, this was the problem with functional
compoenent hooks were 

IN simple words "Hooks are the functions that make functional 
components work like the class components"

simplify the code
readibility

*/


/*

Usestate:-

its a react hook which creates a "state variable", which help us
to track the state of the components and  updates the user interface
 when state changes.

*/

// Use state example 

//   const [color, setColor] = useState("Red");


//   const changeColor = () => {
//     setColor("Blue")   
//   }

//   return (

//     // Hooks are kind of magical functions
//     <div>
//       <h1>My Fav color is {color}!</h1>
//       <button onClick={changeColor}>Blue</button>
//     </div>
//   )
// }












/*


  const [car, setCar] = useState({
    brand: "Ferrari",
    year: "2023",
    model: "Roma",
    color: "Red"

  });


  const changeColor = () => {
    
    setCar((prev)=>{
      return {...prev, color: "Blue", brand: "Thar"}
    })
    
    // setCar({color: "Blue"}) this is not the right way
  }

  //Instead of this we have better way
  // const [brand, setBrand] = useState("Ferrari");
  // const [model, setModel] = useState("Roma");
  // const [year, setYear] = useState("2023");
  // const [color, setColor] = useState("Red");

  return (

    <div>
      <h1>My {car.brand}</h1>
      <h2>It is a {car.color} {car.model} from {car.year}</h2>
      <button onClick={changeColor}>Blue</button>
    </div>
  )
}

*/