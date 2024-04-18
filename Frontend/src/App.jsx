import React from 'react'
import Home from '../src/home/Home'
import Courses from '../src/home/Courses'
import { Route,  Routes, Navigate } from 'react-router-dom'
import Signup from './component/Signup'
import  { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'



export default function App() {
  const [authUser,setAuthUser]= useAuth();
  return (
    <>
   <div className='dark:bg-slate-900 dark:text-white'>
   <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={authUser?<Courses/>:<Navigate to='/signup'/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
    <Toaster/>
    
   </div>
    </>
  )
}
