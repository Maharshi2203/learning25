import React from 'react'

export const TailwindDemo1 = () => {
  return (
    <div>
        <h1>TAILWIND CSS</h1>
        <div  className='flex justify-between items-center p-4 bg-grey-400'>
            <h1 className='text-xl'>Logo</h1>
            
        </div>
        <button className='bg-blue-400 px-4 py-4 rounded'>Login</button>
        <div className='grid grid-cols-4 gap-4 p-4'>
            <div className='bg-red-500 h-20'></div>
            <div className='bg-green-500 h-20'></div>
            <div className='bg-blue-500 h-20'></div>
            <div className='bg-blue-500 h-20'></div>
        </div>
        <div className='text-sm md:text-lg lg:text-2xl text-red-500'>
                Responsive Text Demo
        </div>
        <div className='bg-white shadow-lg rounded-2xl p-5 hover:scale-105 transition'>
            <h2 className='text-xl font-semibold'>CARD TITLE</h2>
            <p className='text-gray-500 mt-2'>
                This is card by tailwind css
            </p>
            <button className='mt-4 bg-black text-white px-4 py-2 rounded-lg'>Read More</button>
        </div>
    </div>
  )
}