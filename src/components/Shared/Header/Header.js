import React from 'react';
import { Button, Container, Dropdown, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo-1.png'
import './Header.css'
import useAuth from '../../../hooks/useAuth';
const Header = () => {
    const { user, admin, signOutUser } = useAuth();
    console.log(admin);

    return (
        <div>
            <Navbar variant={"light"} expand="lg" className="bg-off-blue   "  >

                <Navbar.Brand> <Nav.Link as={NavLink} to="/"><img src={logo} alt="logo">
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

                        {(user.email && admin) ?
                            <div className='d-flex  justify-content-end align-items-baseline ms-md-5 ps-md-5 mx-auto'>
                                <Nav.Link as={NavLink} to='/manageorder'>Manage Order</Nav.Link>
                                <Nav.Link as={NavLink} to='/addnewservice'>Add New Service</Nav.Link>
                                <h6 className="m-1"> {user.email}</h6>
                                <Button className="ms-2" onClick={signOutUser}>Sign Out</Button>
                            </div>
                            :
                            (user.email) ?
                                <div className='d-flex  justify-content-end align-items-baseline ms-md-5 ps-md-5 mx-auto'>

                                    <Nav.Link as={NavLink} to='/myorders'>My Orders</Nav.Link>
                                    <p className="m-1"> {user.email}</p>
                                    <Button className="ms-2" onClick={signOutUser}>Sign Out</Button>

                                </div> :
                                <Nav.Link as={NavLink} to="/login" className="nav-link" ><Button>sign In</Button></Nav.Link>
                        }

                    </Nav>

                </Navbar.Collapse>

            </Navbar>
        </div>
    );
};

export default Header;