import React from 'react';
import { Button, Col, Container, Form, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Contact = () => {
    return (
        <div>
            <Container>
                <Row className="mt-5 p-5" >
                    <h1>Get in touch</h1>
                    <p>Looking for help? Fill the form and start a new adventure. </p>
                    <Col className="mt-5">
                        <ListGroup>
                            <ListGroup.Item>
                                <h4>Headquaters</h4>

                                <p> 744 New York Ave, Brooklyn, Kings,
                                    New York 10224
                                </p>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h4>Phone</h4>
                                <p>+88018 000 356 432
                                </p>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h4>Support</h4>
                                <p>
                                    <pre>
                                        customer@support.com
                                        help@tevliy.com
                                    </pre>
                                </p>
                            </ListGroup.Item>

                        </ListGroup>
                    </Col>
                    <Col className="mt-5" >
                        <Form>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder="1234 Main St" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridAddress2">
                                <Form.Label>Address 2</Form.Label>
                                <Form.Control placeholder="Apartment, studio, or floor" />
                            </Form.Group>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>State</Form.Label>
                                    <Form.Select defaultValue="Choose...">
                                        <option>Choose...</option>
                                        <option>...</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label>Zip</Form.Label>
                                    <Form.Control />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" id="formGridCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>

                            <Link to='/register' ><Button variant="primary">
                                Send
                            </Button></Link>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;