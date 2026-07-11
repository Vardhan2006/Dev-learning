import React from 'react'

function Props_Project() {

    let ago1 = "5 days ago"
    let com1 = "Amazon "

    return (
        <div className='parent'>
            <div className="card">
                <div className="top">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi6U-KSnY_r4hsTsVxDuaaM1suHkBJRHcyaf65xF5PJQ&s=10" alt="" />
                    <button>Save</button>
                </div>
                <div className="center">
                    <h3>{com1}<span>{ago1}</span></h3>
                    <h2>Senior Backend Engineer</h2>
                    <div className='tag'>
                        <h4>Full Time</h4>
                        <h4>Senior Level</h4>
                    </div>
                </div>
                <div className="bottom">
                    <div>
                        <h3>$45k/Month</h3>
                        <p>USA, San Fransisco</p>
                    </div>
                    <button>Apply Now</button>
                </div>
            </div>
        </div>
    )
}

export default Props_Project