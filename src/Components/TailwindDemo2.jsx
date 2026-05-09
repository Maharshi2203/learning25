import React from 'react'

export const TailwindDemo2 = () => {
  return (
    <div>
        <h1>TailwindDemo2</h1>
        <button className='bg-blue-500 text-white px-4 py-2 rounded'>Save</button>
        <button className='border border-blue-500 text-blue-500 px-4 py-2 rounded'>Cancel</button>
        <button className='w-full bg-green-500 text-white py-3 rounded'>SUBMIT</button>
    </div>
  )
}