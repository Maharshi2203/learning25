import React from 'react'

export const MapDemo2 = () => {
     var students = ["yash","Maharshi","jenish","shrey","aryan"]
  return (
    <div style={{textAlign:"center"}}>
        
       <h1> MapDemo2</h1>
       <ol>
        {            
            students.map((stu,index)=>{
                return <li>{index}-{stu}</li>   
            })
        }
       </ol>

    
       </div>
  )
}
