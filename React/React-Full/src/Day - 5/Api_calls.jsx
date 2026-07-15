import React, { useState } from 'react'
import axios from 'axios'

const Api_calls = () => {

    const [data, setData] = useState([])

    const getData = async ()=> {
        
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        
        setData(response.data)
        

    }
    
    /*
    
    manual way using fetch

    const getData = async ()=> {
        
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        
        const data = await response.json()
        
        console.log(data);
        
    }*/

    /*async function getData() {

        manual way to create api without axios

        await fetch('https://jsonplaceholder.typicode.com/todos/1')
             .then(response => response.json())
             .then(json => console.log(json))

    }*/

    return (
        <div>
            <button onClick={getData}>Get Data</button>

        <div>
            {data.map(function(elem,idx){

                return <h4>Hello, {elem.name} {idx}</h4>

            })}
        </div>

        </div>

    )
}

export default Api_calls