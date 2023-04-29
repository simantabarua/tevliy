import React from 'react';
import { Carousel, Col, Row } from 'react-bootstrap';
import './Slider.css';

const Slider = () => {
  const slides = [
    {
      image: require('../../assets/slider/slider1.jpg').default,
      title: 'Enjoy Your Vacation With Us',
      description: 'We Provide Best Travel Service',
    },
    {
      image: require('../../assets/slider/slider2.jpg').default,
      title: 'Travel And Adventure',
      description: 'Where you want to go',
    },
    {
      image: require('../../assets/slider/slider3.jpg').default,
      title: 'Plan Your Trip with Trevily',
      description: 'Largest global industrial business community',
    },
  ];

  return (
    <div className="slider-container mt-2">
      <Row className="g-4 mx-3">
        <Col>
          <Carousel>
            {slides.map((slide, index) => (
              <Carousel.Item key={index} interval={index === 0 ? 1000 : 1500}>
                <img
                  className="d-block w-100 img-fluid"
                  src={slide.image}
                  alt={`Slide ${index}`}
                />
                <Carousel.Caption>
                  <h1>{slide.title}</h1>
                  <p>{slide.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </div>
  );
};

export default Slider;
