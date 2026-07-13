import React from 'react'
import { useEffect, useState } from 'react'

function UseEffect() {

    /* wo use the useeffect we need callBack fnc and dependency 3 ways to use useEffect 1. using empty array, 2. without any dependency like only callback, 3. using array with variables */

  const [count, setcount] = useState(0)

  useEffect(() => {
    setTimeout(() => {
        setcount(count+1);
    }, 20000);
   
  },[]) // when we use this empty array here it will execute the useeffect on 1 time
  

  return (
    <div>
        <h1>I've rendered {count} times!</h1>
    </div>
  )
}

export default UseEffect