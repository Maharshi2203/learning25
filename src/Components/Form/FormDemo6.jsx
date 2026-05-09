import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo6 = () => {
  
  const{register,handleSubmit,formState:{errors},watch} = useForm({mode:"onChange"})
  const password = watch("password")
    console.log("Watching password: ",password)

    const submitHandler= (data) =>{
        console.log(data)
    }
    const validationSchema={
        passwordValidator:{
            required:{
                value:true,
                message:"password is required*"
            }
        },
      confirmPasswordValidator:{
        required:{
            value:true,
            message:"password is required *"
        },
        validate:(params)=>{
            return params == password || "Both password are not matched.. "        
        }
    }
}
  return (
    <div style={{textAlign:"center"}}>
        <h1>FORM DEMO 5</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>PASSWORD</label>
                <input type='password' {...register("password",validationSchema.passwordValidator)}></input>
                {errors.password?.message}
                {password && (
                    <div style={{ marginTop: "5px" }}>{password.length < 3 && (
                        <span style={{ color: "red", fontWeight: "bold" }}>🔴 Weak Password</span>
                )}
                {password.length >= 3 && password.length <= 6 && (
                    <span style={{ color: "orange", fontWeight: "bold" }}>🟡 Average Password</span>
                )}
                {password.length > 6 && password.length <= 10 && (
                    <span style={{ color: "green", fontWeight: "bold" }}>🟢 Strong Password</span>
                )}
                </div>
)}

            </div>
            <div>
                <label>CONFIRM PASSWORD</label>
                <input type='password' {...register("confirmPassword",validationSchema.confirmPasswordValidator)}></input>
                {errors.confirmPassword?.message}
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}