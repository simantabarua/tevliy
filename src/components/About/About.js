import React from 'react';
import { Col, Button, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import about from '../../assets/about.png'
const About = () => {
    return (
        <div>
            <Container>
                <Row className=" mt-5 p-5">
                    <h1 className='text-center p-5'>Dare to Explore with & <br /> Tevily Agency.</h1>
                    <Col>
                        <img src={about} alt="" className="w-100 d-block" />
                    </Col>
                    <Col className=" p-5">

                        <h6> A Simply Perfect Place to Get Lost</h6>
                        <p>WWe are trusted by our clients and have a reputation for the best services in the field. Lorem ipsum is simply free text dolor sit amett consectetur adipiscing elit. It is a long established fact that a reader will be distracted by the readable content of a page. Thank you for visiting our site. We look </p>
                        <Link to="/tour"><Button variant="outline-primary" >Browse all tours</Button></Link>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default About;