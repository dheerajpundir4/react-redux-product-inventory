import React from 'react'

// Using bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Container } from 'react-bootstrap';

import { Link, NavLink } from 'react-router-dom'

export default class NavComponent extends React.Component {
    render() {
       
        console.log("Nav Component render")
        let buttons
        if(this.props.user) {
            buttons = (
                <>
                  
                  <Link to="/addProduct">Add Product</Link>
                    <Link to="/Logout">Logout</Link>        
                   
                </>
            )
        }
        else {
            buttons = (
                <>
                  
                    <Link to="/Login">Login</Link>
                    <Link to="/Signup">SignUp</Link>
                </>
            )
        }
        return (
            <Container>
            <Navbar bg="light" variant="blue">

                <Nav>
                    
                    <Link to="/">Products</Link>
                    <Link to="/topViewProduct">Top View Product</Link>
                    <Link to="/about">About</Link>
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        {buttons}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </Container>
        );
    }
}