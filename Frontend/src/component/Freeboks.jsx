import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import list from "../../public/list.json";
import axios from "axios";
import Cards from "./Cards";

export default function Freeboks() {

const [book,setBook]=useState([]);
useEffect(()=>{
  const getbook = async ()=>{
    try {
      
    
    const res = await axios.get("/book")
    
    const data = res.data.filter((d) => d.catagory === "Free");
    console.log(res.data)
    console.log("gghcbcncb",data)
    setBook(data)
  } catch (error) {
      console.log(error)
  }
    
  }
  getbook();
},[])

  // const filterData = list.filter((data) => data.catagory === "Free");
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl bg-white text-black dark:bg-slate-900 dark:text-white container mx-auto md:px-20 px-4">
        
        <div>
          <h1 className="font-semibold text-xl pb-2">
            Free Books are here</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
            placeat cumque et quibusdam pariatur cum quis fugiat sequi
            architecto recusandae voluptate quisquam delectus laboriosam quam
            hic eum aut impedit. Repudiandae.
          </p>
        </div>

        <div>
          <div className="slider-container">
            <Slider {...settings}>
            {book.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}
