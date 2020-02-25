import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LinkContainer } from "react-router-bootstrap";
import icon from '../images/icon1.png'


class NavBar extends React.Component {
    render(){
        return (
            <Navbar sticky="top" scrolling="true" expand="lg" className="navHeader">
                <Navbar.Brand >
                    <LinkContainer to={process.env.PUBLIC_URL + '/'} className="navBrandItemText">
                        <NavItem><img alt="IronX" src={icon} style={{height:'50px',width:'50px'}}/></NavItem>
                    </LinkContainer>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="navbar-light"/>
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav>
                        <LinkContainer to={process.env.PUBLIC_URL + '/'} className="navItemText" activeClassName="active" exact>
                            <NavItem>Home</NavItem>
                        </LinkContainer>
                        <LinkContainer to={process.env.PUBLIC_URL + '/home2'} className="navItemText" activeClassName="active" exact>
                            <NavItem>Home 2</NavItem>
                        </LinkContainer>
                        <LinkContainer to={process.env.PUBLIC_URL + '/about'} className="navItemText" activeClassName="active" exact>
                            <NavItem>About</NavItem>
                        </LinkContainer>
                        <LinkContainer to={process.env.PUBLIC_URL + '/contact'} className="navItemText" activeClassName="active" exact>
                            <NavItem>Contact</NavItem>
                        </LinkContainer>                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
};

export default NavBar;