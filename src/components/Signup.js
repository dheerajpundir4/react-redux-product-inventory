import React from "react";
import { Link } from 'react-router-dom';

// Using bootstrap
import Form from 'react-bootstrap/Form';

function Signup() {
  return (
    <>
      <Form>

        <Form.Group>
          <input type="email" placeholder="Emil ID" />
        </Form.Group>

        <Form.Group>
          <input type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group>
          <input type="text" placeholder="First Name" />
        </Form.Group>

        <Form.Group>
          <input type="text" placeholder="Last Name" />
        </Form.Group>
      
        <Form.Group>
          <input type="text" placeholder="Location" />
        </Form.Group>
      
        <Form.Group>
          <input type="number" placeholder="Mobile Number" />
        </Form.Group>
      

        <Form.Group>
          <button>Sign Up</button>
          <Link to="/login">Already have an account?</Link>
        </Form.Group>

      </Form>
    </>
  )
}

export default Signup;