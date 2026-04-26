import axios from 'axios'
import React, { useState } from 'react'

export const ApiDemo1 = () => {

  const [message, setmessage] = useState("")
  const [users, setusers] = useState([])

  
  const getUser = async()=>{
    const response = await axios.get("https://node5.onrender.com/user/user/")
    console.log(response) 
    
    console.log(response.data) 
    console.log(response.data.message)
    setmessage(response.data.message)
    console.log(response.data.data)
    setusers(response.data.data)
    

  }

  return (
    <div style={{textAlign:"center"}}>
        <h1>API DEMO 1</h1>
        <button onClick={()=>{getUser()}}>GET</button>
        {message}
        <table border="1" style={{ margin: "20px auto", borderCollapse: "collapse" }}>
          
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Age</th>
              <th>isActive</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.age}</td>
                <td>{user.isActive?"true":"false"}</td>

              </tr>
            ))}
          </tbody>

        </table>
    </div>
  )
}