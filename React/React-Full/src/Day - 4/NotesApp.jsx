import React from 'react'

function Notesapp() {

    const submitHandler = (e) => {
        e.preventDefault()
        console.log("submitted");

    }



    return (
        <div className='h-screen bg-black text-white p-10 lg:flex'>

            <form onSubmit={(e) => {
                submitHandler(e)
            }}
                className='flex items-start flex-col p-10 gap-5 lg:w-1/2'>
                <h1 className='text-3xl font-bold'>Add Notes</h1>
                <input
                    type="text"
                    placeholder='Enter Heading'
                    className='px-5 w-1/2 py-2 font-mono font-medium border-2 rounded outline-none' />
                <textarea
                    placeholder='Enter Details'
                    type='text'
                    className='font-mono font-medium px-5 w-1/2 h-40 py-2 border-2 rounded outline-none' />
                <button className='bg-white text-black px-5 font-mono font-extrabold w-1/2 py-2 rounded outline-none'>Add Notes</button>
            </form>
            <div className='lg:w-1/2 p-10  lg:border-l-2'>
                <h1 className='text-3xl font-bold font-mono' >Recent Notes</h1>
                <div className="flex flex-wrap gap-5 mt-5 h-full overflow-auto">
                    <div className="h-55 w-50 rounded-2xl bg-white"></div>
                    <div className="h-55 w-50 rounded-2xl bg-white"></div>
                    <div className="h-55 w-50 rounded-2xl bg-white"></div>
                </div>

            </div>
        </div>
    )
}

export default Notesapp