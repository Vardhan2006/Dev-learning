import React from 'react'

function Props(props) {
    return (
        <>
            
                <div className="card">
                    <img src="https://images.unsplash.com/photo-1783191690552-1723d3c88d59?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxODZ8fHxlbnwwfHx8fHw%3D" alt="" className='image'/>
                    <h1>{props.user}</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>

        </>
    )
}

export default Props