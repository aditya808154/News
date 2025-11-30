import React from "react"
import "./Popular.css"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { popular } from "../../../../dummyData"
import Heading from "../../../Heading/Heading"



const Popular = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    rows: 4,
    slidesPerRow: 1,
   
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          rows: 4,
        },
      },
    ],
  };

  return (
    <>
      <section className="popular">
        <Heading title="Popular" />
        <div className="popular-slider-wrapper">
          <Slider {...settings}>
            {popular.map((val) => (
              <div className="items">
                <div className="box shadow">
                  <div className="images row">
                    <div className="img">
                      <img src={val.cover} alt="" />
                    </div>
                    <div className="category category1">
                      <span>{val.catgeory}</span>
                    </div>
                  </div>

                  <div className="text row">
                    <h1 className="title">{val.title.slice(0, 40)}...</h1>

                    <div className="date">
                      <i className="fas fa-calendar-days"></i>
                      <label>{val.date}</label>
                    </div>

                    <div className="comment">
                      <i className="fas fa-comments"></i>
                      <label>{val.comments}</label>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Popular;
