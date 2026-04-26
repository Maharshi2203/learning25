import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Login Data:", data);
    // Simulating login
    if (data.email === "admin@gmail.com" && data.password === "admin123") {
      toast.success("Login Successful!");
      navigate("/");
    } else {
      toast.error("Invalid Credentials!");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-lg" style={{ width: "400px", borderRadius: "15px" }}>
        <h2 className="text-center mb-4 text-primary">Welcome Back</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              placeholder="name@example.com"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              placeholder="Enter your password"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
          </div>
          <button type="submit" className="btn btn-primary w-100 py-2 mt-2 shadow-sm">
            Login
          </button>
        </form>
        <div className="text-center mt-3">
          <small className="text-muted">Don't have an account? <span className="text-primary" style={{ cursor: "pointer" }}>Sign up</span></small>
        </div>
      </div>
    </div>
  );
};
