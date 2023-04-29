import React, { useEffect } from "react";
import { Button, Badge, Card, ListGroup, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import useFetch from "../../hooks/useFetch";
import SingleTour from "../SingleTour/SingleTour";

const SliderSecond = () => {
  const [tours, isLoading, error] = useFetch();

  useEffect(() => {
    document.title = "Go Exotic Places";
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };

  return (
    <div>
      <h1 className="text-center mt-5">Go Exotic Places</h1>
      {error ? (
        <div className="text-center p-5">{error.message}</div>
      ) : isLoading ? (
        <div className="text-center p-5">
          <Spinner animation="border" />
        </div>
      ) : (
        <Slider {...settings}>
          {tours.map((tour) => (
            <SingleTour tour={tour} key={tour._id}></SingleTour>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default SliderSecond;
