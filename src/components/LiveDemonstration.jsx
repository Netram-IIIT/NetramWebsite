import React from 'react'

const LiveDemonstration = () => {
    return (
        <div className='bg-gradient-to-r from-cyan-500 to-blue-500 py-12 flex flex-col justify-center items-center'>
            <h3 className="text-3xl md:text-4xl font-extrabold mb-6 text-white">
                Live Demonstration
            </h3>
            <video className='overflow-hidden rounded-xl w-[400px] sm:w-[500px] md:w-[600px] lg:w-[800px] xl:w-[1000px] border-l-4 border-y-8 border-black' src='/netram.mp4' autoPlay muted loop></video>
        </div>
    )
}

export default LiveDemonstration