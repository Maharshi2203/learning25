import React from 'react'
import { useForm } from 'react-hook-form'
// import "./EventForm.css"

export const EventForm = () => {

  const { register, handleSubmit, formState: { errors } } = useForm()

  const submitHandler = (data) => {
    console.log("Form Data:", data)
  }

  const validationSchema = {
    fullName: {
      required: "Full name is required*",
      minLength: {
        value: 3,
        message: "Minimum 3 characters required"
      }
    },
    email: {
      required: "Email is required*",
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Invalid email format"
      }
    },
    eventCode: {
      required: "Event code is required*",
      validate: (value) => value === "react2026" || "Invalid event code"
    },
    interests: {
      required: "Select at least 2 interests*",
      validate: (value) =>
        value.length >= 2 || "Minimum 2 interests required"
    }
  }

  return (
    <div className="container">
      <h1>🎉 Event Registration</h1>

      <form className="form-box" onSubmit={handleSubmit(submitHandler)}>

        <div className="field">
          <label>Full Name</label>
          <input type="text" {...register("name", validationSchema.fullName)} />
          <span>{errors.name?.message}</span>
        </div>

        <div className="field">
          <label>Email</label>
          <input type="text" {...register("email", validationSchema.email)} />
          <span>{errors.email?.message}</span>
        </div>

        <div className="field">
          <label>Event Code</label>
          <input type="text" {...register("eventCode", validationSchema.eventCode)} />
          <span>{errors.eventCode?.message}</span>
        </div>

        <div className="field">
          <label>Interests</label>

          <div className="checkbox-group">
            <label><input type="checkbox" value="react" {...register("interests", validationSchema.interests)} /> React</label>
            <label><input type="checkbox" value="ai" {...register("interests", validationSchema.interests)} /> AI</label>
            <label><input type="checkbox" value="web3" {...register("interests", validationSchema.interests)} /> Web3</label>
            <label><input type="checkbox" value="cloud" {...register("interests", validationSchema.interests)} /> Cloud</label>
          </div>

          <span>{errors.interests?.message}</span>
        </div>

        <button type="submit">Register</button>

      </form>
    </div>
  )
}
