// import React from 'react'
import { Link, useLocation, useNavigate} from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"
import axios from 'axios';
import toast from 'react-hot-toast';

export default function Signup() {
  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || "/"
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit =async (data) =>{
        const userinfo ={
          fullname:data.fullname,
          email:data.email,
          password:data.password
        }

       await axios.post('/user/signup',userinfo)
       .then((res)=>{
          if(res.data){
             toast.success('signup succesfully')
             navigate(from,{replace:true})
           
            }

           localStorage.setItem('Users', JSON.stringify(res.data.user))
        
          }).catch((err)=>{
          if(err.Response  ){
            console.log(err)
            setTimeout(toast.error("error" + err.Response.data.message),1000)
            
          }
        })
      }


  return (
    <div className='flex h-screen item-center justify-center '>
        <div className=" ">
          <div className="modal-box w-[600px] px-10 border-[5px] shadow-md  rounded-md">
            <form className='font-bold text-lg' onSubmit={handleSubmit(onSubmit)}>
                <Link to='/' className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
                ✕
                </Link>
            

            <h3 className="font-bold text-lg">Login</h3>
            {/* Name */}
           <div className="mt-4 space-y-2">
            <span>Name</span>
            <br/>
            <input className="w-80 px-3 py-1 border rounded-md outline-none" type="fullname" placeholder="Enter Your Full fullname" {...register("fullname", { required: true })}/>
            <br/>

            {errors.fullname && <span className="text-red-500 text-sm">*This field is required</span>}

           </div>
            {/* Email */}
           <div className="mt-4 space-y-2">
            <span>Email</span>
            <br/>
            <input className="w-80 px-3 py-1 border rounded-md outline-none" type="email" placeholder="Enter Your Email" {...register("email", { required: true })}/>
            <br/>

            {errors.email && <span className="text-red-500 text-sm">*This field is required</span>}

           </div>
           {/* password */}
           <div className="mt-4 space-y-2">
            <span>Password</span>
            <br/>
            <input className="w-80 px-3 py-1 border rounded-md outline-none" type="password" placeholder="Enter Your Password" {...register("password", { required: true })}/>
            <br/>

            {errors.password && <span className="text-red-500 text-sm">*This field is required</span>}

           </div>
           {/* button */}
           <div className="flex justify-around mt-4">
            <button className="bg-blue-500 text-black rounded-md px-2 py-1 hover:bg-lime-700 duration-200">Signup</button>
            <p className="text-red-500">Have Account? *<button className="underline text-lime-600 cursor-pointer"
            onClick={()=>document.getElementById('my_modal_3').showModal()}>
                Login
            </button> 
            <Login/>
            </p>
           </div>
           </form>
          </div>
        </div>

      
    </div>
  )
}
