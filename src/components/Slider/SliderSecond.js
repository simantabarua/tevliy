import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import slider_second from "../../assets/slider/slider1.jpg"
export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 500,
      slidesToShow: 4,
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
    <Container>
        <div>
        <h2> Responsive </h2>
        <Slider {...settings}>
          <div>
           <img src={slider_second} alt="" />
          </div>
          <div>
          <img src={slider_second} alt="" />
          </div>
          <div>
          <img src={slider_second} alt="" />
          </div>
          <div>
          <img src={slider_second} alt="" />
          </div>
          <div>
          <img src={slider_second} alt="" />
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
        </Slider>
      </div>
    </Container>
    );
  }
}
