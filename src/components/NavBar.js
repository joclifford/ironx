import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

class NavBar extends React.Component {
    render(){
        return (
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand ><Link to={process.env.PUBLIC_URL + '/'} style={{ color: 'white' }}>Iron X</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav pullRight>
                        <LinkContainer to={process.env.PUBLIC_URL + '/contact'} style={{ color: 'white', cursor: 'pointer', marginRight:10 }}>
                            <NavItem>Contact</NavItem>
                        </LinkContainer>
                        <LinkContainer to={process.env.PUBLIC_URL + '/about'} style={{ color: 'white', cursor: 'pointer' }}>
                            <NavItem>About</NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
  };

  export default NavBar;
/*
  <Link to="/">Home </Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            */