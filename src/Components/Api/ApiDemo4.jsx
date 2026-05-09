import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import { CustomLoader } from "../CustomLoader";
import { Link } from "react-router-dom";

export const ApiDemo4 = () => {
  const [message, setmessage] = useState("");
  const [users, setusers] = useState([]);
  const [singleUser, setsingleUser] = useState({});
  const [show, setshow] = useState(false);
  const [isLoading, setisLoading] = useState(false);


  const getUser = async () => {
   
    setisLoading(true); 
    const response = await axios.get("https://node5.onrender.com/user/user/");
    console.log(response); 
   
    console.log(response.data);
    console.log(response.data.message);

    setmessage(response.data.message);
    console.log(response.data.data);
    setusers(response.data.data);

    setisLoading(false); 
  };

  const deleteUser = async (id) => {
  
    const res = await axios.delete(
      `https://node5.onrender.com/user/user/${id}`,
    );
    console.log(res); 
    console.log(res.data); 
    console.log(res.status); 
    if (res.status == 204) {
      
      toast.success("user deleted...");
      
      getUser(); 
    } else {
      alert("error while deleteing user..");
    }
  };

  const detailUser = async (id) => {
  
    if (!id) return;
    const res = await axios.get(`https://node5.onrender.com/user/user/${id}`);
    console.log(res.data); 
    setsingleUser(res.data.data);

    
    setshow(true);
  };

  const handleClose = () => {
    setshow(false);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>API DEMO 4</h1>
  

      {isLoading && <CustomLoader/>}


      {message}
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>AGE</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      deleteUser(user._id);
                    }}
                  >
                    DELETE
                  </button>
                  <button
                    style={{ marginLeft: "10px" }}
                    className="btn btn-primary"
                    onClick={() => {
                      detailUser(user._id);
                    }}
                  >
                    DETAIL
                  </button>
                  <Link to={`/updateuser/${user._id}`} className="btn btn-info">UPDATE</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User Detail</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1>Name = {singleUser.name}</h1>
          <h3>Age = {singleUser.age}</h3>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};