import React, { Component } from "react";
import Slider from "react-slick";
import useFetch from "../../hooks/useFetch";
import SliderImage from "./SliderImage";


const SliderSecond = () => {
  const [tours] = useFetch();
  console.log(tours);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
      <h1 className="text-center mt-5"> Go Exotic Places </h1>
      <Slider {...settings}>
        {
          tours.map(tour => <SliderImage
          tour={tour}
          ></SliderImage>)
        }
      </Slider>
    </div>
  );
}

export default SliderSecond;