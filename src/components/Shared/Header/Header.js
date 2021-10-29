import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {

    return (
        <div>
            <Navbar variant={"light"} expand="lg" className="bg-off-blue   "  >
                <Container>
                    <Navbar.Brand> <Nav.Link as={NavLink} to="/"><img src alt="logo">
                    </img ></Nav.Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" >
                        <Nav
                            className="mx-auto nav-bar my-2 my-lg-0 "
                            style={{ maxHeight: '100px' }}
                            navbarScroll>
                            <Nav.Link as={NavLink} to="/" className="nav-link" >Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/tours" className="nav-link" >Shop</Nav.Link>
                            <Nav.Link as={NavLink} to="/destination" className="nav-link" >Shop</Nav.Link>
                            <Nav.Link as={NavLink} to="/about" className="nav-link" >About</Nav.Link>
                            <Nav.Link as={NavLink} to="/contact" className="nav-link" >Contact</Nav.Link>

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;