import React from 'react'

// Using bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default class NavComponent extends React.Component {
    render() {
        let buttons
        console.log("Nav Component")
        console.log(this.props.user)
        if(this.props.user) {
            buttons = (
                <>
                    <Nav.Link href="/" onClick={() => localStorage.clear()}>Logout</Nav.Link>
                </>
            )
        }
        else {
            buttons = (
                <>
                    <Nav.Link href="/Login">Login</Nav.Link>
                    <Nav.Link href="/Signup">SignUp</Nav.Link>
                </>
            )
        }
        return (
            <Navbar bg="light" variant="blue">

                <Nav>
                    <Nav.Link href="/products">Products</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        {buttons}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}