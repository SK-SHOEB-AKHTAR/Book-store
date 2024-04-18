import React, { useEffect, useState } from 'react'
// import list from '../../public/list.json';
import Cards from './Cards';
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function Course() {
  const [book,setBook]= useState([]);
  useEffect(()=>{
    const getbook = async()=>{
     try {
      
      const res = await axios.get("/book")
      console.log(res.data)
      setBook(res.data)
     } catch (error) {
      console.log(error)
      
     }
    }
    getbook();

  },[])
  return (
    <>
    <div className='max-w-screen-2xl bg-white text-black dark:bg-slate-900 dark:text-white container mx-auto md:px-20 px-4'>
     <div className='mt-20 items-center justify-center text-center p-2' >
     <h1 className='text-2xl md:text-4xl'>
      We are delighted to have <span className='text-lime-500'>you here :)</span>
     </h1>
     <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sed nostrum mollitia aspernatur aperiam sunt deserunt neque veniam id, minima a est beatae eos vitae similique ex repudiandae vel tempora.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio iusto et dolor earum praesentium! Ut, odio nihil? Soluta iure ipsa itaque ex, non perferendis rem sed, ipsam eligendi, similique fugit.
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime ab modi corrupti commodi esse ad accusantium earum laboriosam blanditiis accusamus facilis sint quo eum dolores, tempore hic reprehenderit unde! Architecto!
     </p>
    <Link to='/'>
    <button className='mt-6 bg-lime-400 text-black px-4 py-2 rounded-md hover:bg-lime-600 duration-300'>Back</button>
    </Link>
     </div>

     <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
      {
        book.map((item)=><Cards key={item.id} item={item}/>
        )
      }
     </div>

    </div>


     
    </>
  )
}
