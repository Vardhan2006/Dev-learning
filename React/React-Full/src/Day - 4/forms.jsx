import React, { useState } from 'react'

function Forms() {

    // To manage input we use Two way binding (means ek teer se dho nishane)

    const [title, setTitle] = useState("")

    const submitHandler = (elem) => {
        elem.preventDefault()
        console.log('Form Submitted By', title);
        setTitle('')
    
    }

  return (
    <div>
        <form onSubmit={(elem) => {
            submitHandler(elem)
        }}>
            <input type="text" placeholder='Enter Your Name' value={title} onChange={(elem)=> {
                setTitle(elem.target.value);
            }}/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Forms