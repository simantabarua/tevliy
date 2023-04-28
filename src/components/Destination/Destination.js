import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Destination.css'
import dest_img1 from './../../assets/destination/destination1.jpg'
import dest_img2 from './../../assets/destination/destination2.jpg'
import dest_img3 from './../../assets/destination/destination3.jpg'
import dest_img4 from './../../assets/destination/destination4.jpg'
import dest_img5 from './../../assets/destination/destination5.jpg'
const Destination = () => {
    return (
        <div>
            <Container>
                <div className="text-center mt-5">
                    <h2>Find Your Destination</h2>
                </div>
                <div><Row xs={1} md={5} sm={2} className="g-1 mt-2  text-center">
                    <Col>
                        <Card style={{ width: '14rem' }} className="custom-cart-2">
                            <Card.Img variant="top" src={dest_img1} />
                            <Card.Body>
                                <Card.Title>Spain </Card.Title>
                                <Card.Text className="text-muted"></Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '14rem' }} className="custom-cart-2">
                            <Card.Img variant="top" src={dest_img3} />
                            <Card.Body>
                                <Card.Title>Thailand</Card.Title>
                                <Card.Text className="text-muted">
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '14rem' }} className="custom-cart-2">
                            <Card.Img variant="top" src={dest_img4} />
                            <Card.Body>
                                <Card.Title>Australia</Card.Title>
                                <Card.Text className="text-muted"></Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '14rem' }} className="custom-cart-2">
                            <Card.Img variant="top" src={dest_img2} />
                            <Card.Body>
                                <Card.Title> Dubai</Card.Title>
                                <Card.Text className="text-muted"></Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '14rem' }} className="custom-cart-2">
                            <Card.Img variant="top" src={dest_img5} />
                            <Card.Body>
                                <Card.Title> Singapur</Card.Title>
                                <Card.Text className="text-muted"></Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                </div>
            </Container>
        </div>
    );
};

export default Destination;