import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import './Footer.css'
const Footer = () => {
    return (
        <div  className="footer font-small pt-4 mt-4">
            <Container fluid className="text-center text-md-left">
                <Row>
                    <Col md="4">
                        <h5 className="title">Footer Content</h5>
                        <p>
                            Here you can use rows and columns here to organize your footer
                            content.
                        </p>
                    </Col>
                    <Col md="4">
                        <h5 className="title">Links</h5>
                        <ul>
                            <li className="list-unstyled">
                                <a href="#!">Link 1</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Link 2</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Link 3</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Link 4</a>
                            </li>
                        </ul>
                    </Col>
                    <Col md="4">
                        <h1>df</h1>
                    </Col>
                </Row>
            </Container>
            <div className="footer-copyright text-center py-3">
                <Container fluid>
                    &copy; {new Date().getFullYear()} Copyright: Simanta Barua
                </Container>
            </div>
        </div>
    );
}

export default Footer;