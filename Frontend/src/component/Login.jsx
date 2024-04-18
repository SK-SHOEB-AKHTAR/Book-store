// import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from "react-hot-toast";


export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit =async (data) =>{
        const userinfo ={
          email:data.email,
          password:data.password
        }

       await axios.post('/user/login',userinfo).then((res)=>{
          if(res.data){
            console.log(res.data)
            toast.success('Login succesfully');
            document.getElementById('my_modal_3').close();

            setTimeout(()=>{
              localStorage.setItem("Users",JSON.stringify(res.data.user))            
              window.location.reload();
            },2000)
          }       
          
         
        }).catch((err)=>{
          if(err.response){
            console.log(err)
          toast.error("error" + err.response.data.message);
          setTimeout(()=>{},3000)
          }
        })
      }


  return (
    <>
   

        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
              {/* if there is a button in form, it will close the modal */}
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={()=>document.getElementById('my_modal-3').close()}>
                ✕
              </Link>
           
            <h3 className="font-bold text-lg">Login</h3>
            {/* Email */}
           <div className="mt-4 space-y-2">
            <span>Email</span>
            <br/>
            <input className="w-80 px-3 py-1 border rounded-md outline-none" type="email" placeholder="Enter Your Email"{...register("email", { required: true })}/>
            <br/>

            {errors.email && <span className="text-red-500 text-sm">*This field is required</span>}

           </div>
           {/* password */}
           <div className="mt-4 space-y-2">
            <span>Password</span>
            <br/>
            <input className="w-80 px-3 py-1 border rounded-md outline-none" type="password" placeholder="Enter Your Password"{...register("password", { required: true })}/>
            <br/>

            {errors.password && <span className="text-red-500 text-sm">*This field is required</span>}

           </div>
           {/* button */}
           <div className="flex justify-around mt-4">
            <button className="bg-lime-500 text-black rounded-md px-2 py-1 hover:bg-lime-700 duration-200">Login</button>
            <p className="text-red-500">Not Register? *<Link to='/signup' className="underline text-blue-600 cursor-pointer">Signup
            </Link>
            </p>
           </div>
           </form >
          </div>
        </dialog>

     
    </>
  );
}
