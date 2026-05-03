import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addUser } from "../Redux/userSlice";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error("Please enter both email and password");
      return;
    }

    setIsSubmitting(true);
    
    // Prepare data to be added to the API as requested
    const userData = {
      name: email.split("@")[0].charAt(0).toUpperCase() + email.split("@")[0].slice(1), 
      email: email,
      age: Math.floor(Math.random() * 20) + 20, // Random age between 20-40 for variety
    };

    try {
      // This will add the data to the API: https://node5.onrender.com/user/user/
      await dispatch(addUser(userData)).unwrap();
      toast.success("Login successful! Data added to API.");
      navigate("/reduxapidemo");
    } catch (error) {
      console.error("API Error:", error);
      toast.error("Error adding data to API. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <div className="login-header">
          <h2>Login</h2>
          <p>Enter your credentials to continue</p>
        </div>
        
        <form onSubmit={handleLogin} className="login-form-main">
          <div className="input-field">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="example@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isSubmitting}
            />
          </div>
          
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={isSubmitting}
            />
          </div>
          
          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? "Processing..." : "Login"}
          </button>
        </form>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .login-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 85vh;
          background-color: #f0f2f5;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        .login-box {
          background: #ffffff;
          padding: 2.5rem;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.05);
          width: 100%;
          max-width: 400px;
        }
        .login-header {
          text-align: center;
          margin-bottom: 2rem;
        }
        .login-header h2 {
          font-size: 1.8rem;
          color: #1a1a1a;
          margin-bottom: 0.5rem;
        }
        .login-header p {
          color: #666;
          font-size: 0.9rem;
        }
        .login-form-main {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }
        .input-field {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .input-field label {
          font-size: 0.85rem;
          font-weight: 600;
          color: #444;
        }
        .input-field input {
          padding: 0.8rem;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 1rem;
          transition: all 0.2s ease;
        }
        .input-field input:focus {
          outline: none;
          border-color: #007bff;
          box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
        }
        .submit-btn {
          background-color: #007bff;
          color: white;
          border: none;
          padding: 0.9rem;
          border-radius: 6px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.2s ease;
          margin-top: 0.5rem;
        }
        .submit-btn:hover:not(:disabled) {
          background-color: #0056b3;
        }
        .submit-btn:disabled {
          background-color: #a0c4ff;
          cursor: not-allowed;
        }
      `}} />
    </div>
  );
};
