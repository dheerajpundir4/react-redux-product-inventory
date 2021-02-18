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

      
        if (this.props.user!=null) {
            buttons = (
                <>


                    <Nav>

                        <Link class="nav-link" to="/addProduct">Add Product</Link>

                        <Link class="nav-link" to={"/profile/:"+this.props.user.id}>{this.props.user.firstName}</Link>
                        <Link class="nav-link" to="/Logout">Logout</Link>

                    </Nav>
            
                </>
            )
        }
        else {
            buttons = (
                <>


                    <Nav>

                        <Link class="nav-link" to="/Login">Login</Link>

                        <Link class="nav-link" to="/Signup">SignUp</Link>



                    </Nav>


                </>
            )
        }
        return (
            <Container>
                <Navbar collapseOnSelect expand="lg" bg="blue" variant="light">
                    <Navbar.Brand href="/">Product-Inventory</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Link class="nav-link" to="/">Products</Link>
                            <Link class="nav-link" to="/topViewProduct">Top View Product</Link>
                            <Link class="nav-link" to="/about">About</Link>

                        </Nav>
                       {buttons}
                    </Navbar.Collapse>
                </Navbar>                
            </Container>
        );
    }
}