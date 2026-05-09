import React from 'react'
import { useForm } from 'react-hook-form';

export const FormDemo = () => {
     const { register, handleSubmit } = useForm();

     const submitHandler =(data)=>{
        console.log(data)
     }
  return (
    <div style={{textAlign:'center'}}>
        <h1>FormDemo</h1>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <label>Name</label>
                    <input type="text" {...register("name")}/>
                </div>
                <div>
                    <label>GENDER</label><br></br>
                         MALE: <input type="radio" value="male" {...register("gender")}></input> <br></br>
                        FEMALE: <input type="radio" value="female" {...register("gender")} ></input>
                </div>
                <div>
                    <input type="submit"></input>
                </div>
            </form>    
    </div>
  )
}
