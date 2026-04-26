import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo5 = () => {

    const { register, handleSubmit, formState:{ errors } } = useForm()

    const submitHandler = (data)=>{
        console.log(data)
    }

    // Built-in array for ref codes
    const refCodes = ["Maharshi03","Royal22","Jack27"]

    const validationSchema ={
        nameValidator:{
            required:{ value:true, message:"Name is Required*" },
            minLength:{ value:3, message:"min len should be 3" },
            maxLength:{ value:12, message:"max len should be 12" }
        },

        contactValidator:{
            required:{ value:true, message:"contact is required*" },
            pattern:{
                value:/^[6-9]{1}[0-9]{9}$/,
                message:"invalid contact no"
            }
        },

        refCodevalidator:{
            required:{ value:true, message:"ref code is required *" },
            validate:(value)=>{
                return refCodes.includes(value) || "Invalid ref code"
            }
        },

      hobbiesValidator:{
            validate:(value)=>{
            return value && value.length >= 2 || "  Select Atleast 2 hobbies"
    }
}

    }

    return (
        <div style={{textAlign:"center"}}>
            <h1>FORM DEMO 4</h1>

            <form onSubmit={handleSubmit(submitHandler)}>

                <div>
                    <label>NAME</label><br/>
                    <input type='text' {...register("name",validationSchema.nameValidator)} />
                    <p style={{color:"red"}}>{errors.name?.message}</p>
                </div>

                <div>
                    <label>CONTACT</label><br/>
                    <input type='text' {...register("contact",validationSchema.contactValidator)} />
                    <p style={{color:"red"}}>{errors.contact?.message}</p>
                </div>

                <div>
                    <label>REF CODE</label><br/>
                    <input type='text' {...register("refcode",validationSchema.refCodevalidator)} />
                    <p style={{color:"red"}}>{errors.refcode?.message}</p>
                </div>

                <div>
                    <label>HOBBIES</label><br/>

                    <input type="checkbox" value="Cricket" {...register("hobbies", validationSchema.hobbiesValidator)} /> Cricket  
                    <input type="checkbox" value="Music" {...register("hobbies", validationSchema.hobbiesValidator)} /> Music  
                    <input type="checkbox" value="Coding" {...register("hobbies", validationSchema.hobbiesValidator)} /> Coding  
                    <input type="checkbox" value="Travel" {...register("hobbies", validationSchema.hobbiesValidator)} /> Travel  
                    <input type="checkbox" value="Gaming" {...register("hobbies", validationSchema.hobbiesValidator)} /> Gaming  

                    {errors.hobbies?.message}
                </div>

                <div>
                    <input type='submit' />
                </div>

            </form>
        </div>
    )
}
