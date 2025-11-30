import React from "react"
import Slider from "react-slick"
import "./ppost.css"
import Heading from "../../../Heading/Heading"
import { ppost } from "../../../../dummyData"

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Ppost = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
  }

  return (
    <section className='popularPost'>
      <Heading title='Popular Posts' />
      <div className='content'>
        <Slider {...settings}>
          {ppost.map((val, i) => (
            <div className='items' key={i}>
              <div className='box shadow'>
                <div className='images'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                  </div>
                  <div className='category category1'>
                    <span>{val.catgeory}</span>
                  </div>
                </div>
                <div className='text'>
                  <h1 className='title'>{val.title.slice(0, 40)}...</h1>
                  <div className='date'>
                    <i className='fas fa-calendar-days'></i>
                    <label>{val.date}</label>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default Ppost
