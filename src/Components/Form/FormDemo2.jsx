import React from 'react'
import { useForm } from 'react-hook-form';

export const FormDemo2 = () => {
     const { register, handleSubmit } = useForm();

     const submitHandler =(data)=>{
        console.log(data)
     }
  return (
    <div style={{textAlign:'center'}}>
        <h1>FormDemo2</h1>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <label>FirstName</label>
                    <input type="text" {...register("firstname")}/>
                </div>
                <div>
                    <label>LastName</label>
                    <input type="text" {...register("lastname")}/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" {...register("email")}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" {...register("password")}/>
                </div>
                <div>
                    <label>Hobbies</label><br></br>
                        Sports: <input type="checkbox" value="sports" {...register("hobbies")}></input> <br></br>
                        Reading: <input type="checkbox" value="reading" {...register("hobbies")} ></input><br></br>
                        Singing: <input type="checkbox" value="singing" {...register("hobbies")} ></input><br></br>
                        Dancing: <input type="checkbox" value="dancing" {...register("hobbies")} ></input><br></br>
                </div>
                 
                <div>
                    <br /><label>Country</label><br/>
                        India: <input type="radio" value="india" {...register("country")}></input> <br></br>
                        Usa: <input type="radio" value="usa" {...register("country")} ></input><br></br>
                        Russia: <input type="radio" value="russia" {...register("country")} ></input>

                </div>
                <div>
                    <input type="submit"></input>
                </div>
            </form>    
    </div>
  )
}
