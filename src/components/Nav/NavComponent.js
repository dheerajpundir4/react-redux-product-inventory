import React from 'react'


import NavDropdown from 'react-bootstrap/NavDropdown'





// Using bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Container } from 'react-bootstrap';

import { Link, NavLink } from 'react-router-dom'

export default class NavComponent extends React.Component {
    render() {

        console.log("Nav Component render")
        let buttons


        if (this.props.user != null) {
            buttons = (
                <>
            

                    <Nav>

                          
                        <NavDropdown title={"Hello, "+this.props.user.firstName} id="basic-nav-dropdown">
                          
                        <NavDropdown.Item>
                        <Link class="nav-link" to="/addProduct">Add Product</Link>

                    
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                            <Link class="nav-link" to={"/profile"}>View Profile</Link>
                      
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>
                            <Link class="nav-link" to="/Logout">Logout</Link>
                            </NavDropdown.Item>
                        </NavDropdown>


                    </Nav>




                </>
            )
        }
        else {
            buttons = (
                <>


                    <Nav>

                        <Link class="nav-link" to="/Login"><u>Login</u></Link>

                        <Link class="nav-link" to="/Signup"><u>SignUp</u></Link>

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
                          <Nav.Link>
                         <Link class="nav-link" to="/"><u>Products</u></Link>
                         </Nav.Link>
                         <Nav.Link>
                            <Link class="nav-link" to="/topViewProduct"><u>Top View Product</u></Link>
                            </Nav.Link>
                            <Nav.Link>
                            <Link class="nav-link" to="/about"><u>About</u></Link>
                            </Nav.Link>
                        </Nav>
                        {buttons}
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        );
    }
}