import React from 'react'

function Functions() {

    function btnClicked () {
        console.log("CLicked");       
        
    }

    function inputChanging(val) {
        console.log(val);
        
    }

  return (
    <div>
        <h1>Hellow Guys</h1>
        <input onChange={function (elem) {
            inputChanging(elem.target.value)
        }}/>
    </div>
  )
}

export default Functions