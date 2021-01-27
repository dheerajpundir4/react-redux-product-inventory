import React from "react";
import { Link } from 'react-router-dom';

// Using bootstrap
import Form from 'react-bootstrap/Form';

function Signup() {
  return (
    <>
      <Form>

        <Form.Group>
          <input type="email" placeholder="email" />
        </Form.Group>

        <Form.Group>
          <input type="password" placeholder="password" />
        </Form.Group>

        <Form.Group>
          <input type="password" placeholder="password again" />
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