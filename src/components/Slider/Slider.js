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
                                    <h1 >COVID-19 Prevention <br /> Care Supplies </h1>
                                    <p >Backed by experience since 1950. One-stop Source for all your Hospital & Medical Needs. </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={1500}>
                                <img
                                    className="d-block w-100 img-fluid"
                                    src={slider2}
                                    alt="Second slide"
                                />
                                <Carousel.Caption>
                                    <span>Home Medical Supplies</span>
                                    <h2>Sanitizer Gel Alcohol</h2>
                                    <h3>$15.00</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 img-fluid"
                                    src={slider3}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h1 >Fitted Face Mask N95<br /> Group Pack of 3 </h1>
                                    <p >3M high-efficiency electrostatic filter cotton, non-oily particle filtration efficiency ≥ 90% </p>
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