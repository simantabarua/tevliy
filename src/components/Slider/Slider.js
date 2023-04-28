import React from 'react';
import { Button, Carousel, Col, Container, Row } from 'react-bootstrap';
import slider1 from '../../assets/slider/slider1.jpg'
import slider2 from '../../assets/slider/slider2.jpg'
import slider3 from '../../assets/slider/slider3.jpg'
import './Slider.css'
const Slider = () => {
    return (
        <div>
            <div className="slider-container mt-2">
                <Row className="g-4 mx-3">
                    <Col>
                        <Carousel>
                            <Carousel.Item interval={1000}>
                                <img
                                    className="d-block w-100 img-fluid"
                                    src={slider1}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h1 >Enjoy  <br /> Your Vacation With Us </h1>
                                    <p >We Provide Best Travel Service </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={1500}>
                                <img
                                    className="d-block w-100 img-fluid"
                                    src={slider2}
                                    alt="Second slide"
                                />
                                <Carousel.Caption>
                                    <span>join us</span>
                                    <h2>Travel And Adventure</h2>
                                    <h3>Where you want to go</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 img-fluid"
                                    src={slider3}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h1 >Plan Your Trip with<br /> Trevily </h1>
                                    <p >Largest global industrial business community</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </div>
        </div>

    );
};

export default Slider;