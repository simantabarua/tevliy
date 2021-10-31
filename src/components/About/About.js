import React from 'react';
import { Col, Button, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import about from '../../assets/about.png'
const About = () => {
    return (
        <div>
            <Container>
                <Row className=" mt-5 p-5">
                    <h1 className='text-center p-5'>We provide and extend personalized & <br /> innovative healthcare services to its customers.</h1>
                    <Col>
                        <img src={about} alt="" className="w-100 d-block" />
                    </Col>
                    <Col className=" p-5">

                        <h6>High quality medical equipment and supplies</h6>
                        <p>We have decades of experience selling medical equipment and supplies and managing healthcare facilities. We started Medizin Medical Supplies to provide an easy way for organizations to purchase high quality medical equipment and supplies from leading manufacturers.

                            Customer excellence has always been a top priority and it always will be. Thank you for visiting our site. We look </p>
                        <Link to="/shop"><Button variant="outline-primary" >Browse product</Button></Link>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default About;