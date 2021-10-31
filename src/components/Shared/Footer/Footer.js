import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'

import logo from '../../../assets/footer-logo.png'
const Footer = () => {
    return (
        <div>
            <Container className="bg-off-blue footer text-dark text-center mt-5" fluid  >
                <Row className='p-5' >
                    <Col sm={4}>
                        <ul>
                            <img src={logo} alt="" />
                            <li variant="dark">Call us 800 388 80 90
                            </li>
                            <li variant="dark">58 Howard Street #2 San Francisco</li>
                            <li variant="dark">
                                contact@medizin.com</li>
                        </ul>
                    </Col>
                    <Col sm={4}><h3 className="ms-4">Customer Service</h3>
                        <ul>
                            <li variant="dark">Payment Options</li>
                            <li variant="dark"> My Wishlist</li>
                            <li variant="dark">My Account</li>
                            <li variant="dark">Return Policy </li>
                            <li variant="dark">Tours FAQs</li>

                        </ul></Col>
                    <Col sm={4}><h3 className="ms-4">Our Company</h3>
                        <ul>
                            <li variant="dark">About us</li>
                            <li variant="dark">Location</li>
                            <li variant="dark">Register </li>
                            <li variant="dark">Feedback</li>
                            <li variant="dark">Shop Location</li>
                        </ul></Col>
                </Row>
                <div class="row  p-5">
                    <div class="copyright text-muted pb-5">
                        <p>© 2021 Copyright all Right Reserved Design by Simatna</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;