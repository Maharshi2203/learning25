import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addUser } from "../Redux/userSlice";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (email && password) {
      // Create a simple user object to add to the API as requested previously
      // Using email as name and a default age since these fields are expected by the API
      const userData = {
        name: email.split("@")[0], // Simple name from email
        email: email,
        age: 20, // Default age
      };

      try {
        await dispatch(addUser(userData)).unwrap();
        toast.success("Login successful!");
        navigate("/reduxapidemo");
      } catch (error) {
        toast.error("Login failed: " + error);
      }
    } else {
      toast.error("Please enter email and password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Welcome Back</h1>
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <p className="signup-text">
          Don't have an account? <span className="signup-link">Sign up</span>
        </p>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .login-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 80vh;
          background-color: #f8f9fa;
          font-family: 'Inter', sans-serif;
        }
        .login-card {
          background: white;
          padding: 40px;
          border-radius: 16px;
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
          width: 100%;
          max-width: 450px;
          border: 1px solid #eef0f2;
        }
        .login-title {
          color: #007bff;
          font-size: 32px;
          font-weight: 600;
          margin-bottom: 30px;
          text-align: center;
        }
        .login-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .form-group label {
          font-size: 14px;
          font-weight: 500;
          color: #212529;
        }
        .form-group input {
          padding: 12px 16px;
          border: 1px solid #dee2e6;
          border-radius: 8px;
          font-size: 16px;
          transition: border-color 0.2s;
        }
        .form-group input:focus {
          outline: none;
          border-color: #007bff;
          box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
        }
        .login-button {
          background-color: #007bff;
          color: white;
          border: none;
          padding: 14px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.2s;
          margin-top: 10px;
        }
        .login-button:hover {
          background-color: #0056b3;
        }
        .signup-text {
          margin-top: 24px;
          text-align: center;
          font-size: 14px;
          color: #6c757d;
        }
        .signup-link {
          color: #007bff;
          font-weight: 600;
          cursor: pointer;
        }
      `}} />
    </div>
  );
};
