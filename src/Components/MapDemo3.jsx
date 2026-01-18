import React from 'react'

export const 
MapDemo3 = () => {
      const users = [
    { id: 1, name: "raj", age: 23 },
    { id: 2, name: "amit", age: 24 },
    { id: 3, name: "kunal", age: 22 },
  ];
  return (
    <div style={{textAlign:"center"}}>
       <h1> MapDemo3 </h1>
       {
            users.map((u,index)=>{
                return <li>
                    {u.id} {u.name} {u.age}
                </li>
            })
       }

    </div>
  )
}
