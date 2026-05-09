import React from 'react'

export const MapDemo4 = () => {
       const users = [
    { id: 1, name: "raj", age: 23 },
    { id: 2, name: "amit", age: 24 },
    { id: 3, name: "kunal", age: 22 },
  ];
  return (
    <div style={{textAlign:"center"}}>
       <h1> MapDemo4 </h1>
       <table border="1" align='center'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                </tr>
            </thead>
            <tbody>
            {
                users.map((u,index)=>{
                    return <tr>
                        <td>{u.id}</td>
                        <td>{u.name}</td>
                        <td>{u.age}</td>
                    </tr>
                })
            }
            </tbody>
       </table>
       
    
    </div>
  )
}
