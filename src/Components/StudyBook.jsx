import React from 'react'
import { useParams } from 'react-router-dom'

export const StudyBook = () => {
    const data1 = useParams().id

    return (
    <div style={{textAlign:'center'}}>
        <h1>Study...{data1}</h1>
    </div>
  ) 
}
