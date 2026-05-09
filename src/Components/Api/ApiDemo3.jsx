import axios from "axios";
import React, { useState } from "react";

export const ApiDemo3 = () => {

  const [user, setUser] = useState({
    name: "",
    age: "",
    password: "",
    email: "",
    isActive: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setUser({
      ...user,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const addUser = async (e) => {
    e.preventDefault(); 

    try {

      const userData = {
        ...user,
        age: Number(user.age) 
      };

      const res = await axios.post(
        "https://node5.onrender.com/user/user/",
        userData
      );

      console.log(res.data);

      if (res.status === 200 || res.status === 201) {
        alert("User Added Successfully ");

        
        setUser({
          name: "",
          age: "",
          password: "",
          email: "",
          isActive: false
        });
      }

    } catch (err) {
      console.log(err.response?.data);
      alert("Error while adding user ");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>API DEMO 3</h1>

      <form onSubmit={addUser}>

        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          required
        />
        <br /><br />

        <label>Age: </label>
        <input
          type="number"
          name="age"
          value={user.age}
          onChange={handleChange}
          required
        />
        <br /><br />

        <label>Email: </label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          required
        />
        <br /><br />

        <label>Password: </label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          required
        />
        <br /><br />

      
        <label>Active:</label>

True:
<input
  type="radio"
  name="isActive"
  value="true"
  checked={user.isActive === true}
  onChange={() => setUser({ ...user, isActive: true })}
/>

False:
<input
  type="radio"
  name="isActive"
  value="false"
  checked={user.isActive === false}
  onChange={() => setUser({ ...user, isActive: false })}
/>

        <br /><br />

        <button type="submit">ADD</button>

      </form>
    </div>
  );
};