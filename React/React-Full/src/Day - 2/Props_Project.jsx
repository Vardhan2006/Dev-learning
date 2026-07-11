import React from 'react'

function Props_Project({ job }) {

    return (
        <div className="card">
            <div className="top">
                <img src="{job.logo}" alt="" />
                <button>Save</button>
            </div>
            <div className="center">
                <h3> {job.company}<span> {job.posted}</span></h3>
                <h2>{job.role}</h2>
                <div className='tag'>
                    <h4>{job.type}</h4>
                    <h4>{job.level}</h4>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h3>{job.salary}</h3>
                    <p>{job.location}</p>
                </div>
                <button>Apply Now</button>
            </div>
        </div>

    )
}

export default Props_Project