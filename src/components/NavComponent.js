import React from 'react'

// Using bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default class NavComponent extends React.Component {
    render() {

        return (
            <>
                <Navbar bg="light">
                    <Nav.Link href="/">About</Nav.Link>
                    <Nav.Link href="/products">Products</Nav.Link>

                    {(localStorage.getItem('userId') == null) ?
                        (
                            <>
                                <Nav.Link href="/Login">Login</Nav.Link>
                                <Nav.Link href="/Signup">SignUp</Nav.Link>
                            </>
                        ) : (
                            <>
                                <Nav.Link href="/Logout">Logout</Nav.Link>
                            </>
                        )
                    }
                </Navbar>
            </>
        );
    }
}