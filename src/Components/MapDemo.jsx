import React from 'react'

export const  MapDemo = () => {
     var students = ["yash","Maharshi","jenish","shrey","aryan"]
  return (
        <div style={{textAlign:"center"}}>
        <h1>MAP DEMO 1</h1>
        <ul>
        {
            students.map((stu,index)=>{
                return <li>{stu}</li>
            })
        }
        </ul>
        </div>
  )
}
