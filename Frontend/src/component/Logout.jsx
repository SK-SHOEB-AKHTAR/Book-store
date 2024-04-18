import React from 'react'
import toast from "react-hot-toast";
import { useAuth } from '../context/AuthProvider'

export default function Logout() {
  const [authUser,setAuthUser]=useAuth()
  const handellogout = ()=>{
    try {
      setAuthUser({
        ...authUser,
        user:null
      })
      localStorage.removeItem('Users')
      toast.success("logout succesfully")
      // document.getElementById('my_modal_3').close();

      setTimeout(()=>{
        window.location.reload();
                    
      },2000)
    } catch (error) {
      toast.error(error)
      setTimeout(()=>{},2000)
    }
  }
  return (
    <div>
      <button className='px-3 py-2 bg-red-600 text-white rounded-md cursor-pointer' onClick={handellogout}>Logout</button>
    </div>
  )
}
