import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import './Header.css'
const Header = () => {
    const { user, signOutUser } = useFirebase();

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
                            className="mx-auto nav-bar my-2 my-lg-0 align-items-center gap-3 "
                            style={{ maxHeight: '100px' }}
                            navbarScroll>
                            <Nav.Link as={NavLink} to="/home" className="nav-link" >Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/tours" className="nav-link" >Tour</Nav.Link>
                            <Nav.Link as={NavLink} to="/destination" className="nav-link" >Destination</Nav.Link>
                            <Nav.Link as={NavLink} to="/about" className="nav-link" >About</Nav.Link>
                            <Nav.Link as={NavLink} to="/contact" className="nav-link" >Contact</Nav.Link>
                            {user.email ?
                                <div className=' justify-content-end align-items-baseline ms-md-5 ps-md-5 mx-auto'>
                                    <span className="m-1"> {user.displayName}</span>
                                    <Button className="ms-2" onClick={signOutUser}>Sign Out</Button>
                                    <Link to='/dashboard'><Button className="mx-1" onClick={signOutUser}>Dashboard</Button></Link>
                                </div> :
                                <Nav.Link as={NavLink} to="/login" className="nav-link" ><Button>sign In</Button></Nav.Link>
                            }
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;