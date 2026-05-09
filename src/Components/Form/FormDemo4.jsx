import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo4 = () => {
    const{register,handleSubmit,formState:{errors}}=useForm()

        const submitHandler = (data)=>{
            console.log(data)
        }
 
       const validationSchema = {
        nameValidator:{
            required:{
                value:true,
                message:"Name is required"
            },
            minLength:{ 
                value:3,
                message:"min len should be >3"
            }
        },
        ageValidator:{
            required:{
                value:true,
                message:"age is required *"
            },
            
            
        }
        
    }    

  return (
    <div style={{textAlign:"center"}}>
        <h1>form demo3</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NAME</label>
                {/* <input type='text' {...register("name",{required:{value:true,message:"Name is Required *"},minLength:{value:3,message:"min length should be 3"}})}></input> */}
                <input type='text' {...register("name",validationSchema.nameValidator)}></input>
                {errors.name?.message}
            </div>
            <div>
                <label>AGE</label>
                <input type='number' {...register("age",validationSchema.ageValidator)}></input>
                {errors.age?.message}
            </div>
            <div>
                <label>HOBBIES</label><br/>
                        Cricket<input type="checkbox" value="Cricket" {...register("hobbies")} />   
                        Music <input type="checkbox" value="Music" {...register("hobbies")} />  
                        Coding<input type="checkbox" value="Coding" {...register("hobbies")} />   
                        Travel<input type="checkbox" value="Travel" {...register("hobbies")} />   
                        Gaming<input type="checkbox" value="Gaming" {...register("hobbies")} />  
                        {errors.hobbies?.message}
            </div>
            <div>
            <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}