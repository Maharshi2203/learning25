import React from "react";
import { useForm } from "react-hook-form";

export const FormDemo3 = () => {
  const {register,handleSubmit,formState: { errors },} = useForm();

  console.log("errors...",errors)
    const submitHandler = (data) => {
        alert("form submmited...");
    console.log(data);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>FORM DEMO 2</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>NAME</label>
          <input type="text" {...register("name",{required:{value:true,message:"Name is required*"}})}></input>
          {/* {errors.name && errors.name.message} */}
          {errors.name?.message}
        </div>
        <div>
          <label>AGE</label>
          <input type="number" {...register("age",{max:{value:60,message:"age is not valid.."}})}></input>
          {errors.age?.message}
        </div>
        <div>
          <input type="submit"></input>
        </div>
      </form>
    </div>
  );
};