import React from 'react'
import Navbar from '../component/Navbar'
import Banner from '../component/Banner'
import Freeboks from '../component/Freeboks'
import Footer from '../component/Footer'

export default function home() {
  return (
    <>
      <div className="text-3xl font-bold ">
      <Navbar/>
      <Banner/>
      <Freeboks/>
      <Footer/>
    </div>
    </>
  )
}
