import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import { useFormik } from 'formik';

//It is used to call server directly
import axios from 'axios';

// Using bootstrap
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function Login() {

  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);


  const { handleSubmit, handleChange, values, errors } = useFormik(
    {
      initialValues: {
        email: "",
        password: ""
      },
      validate,
      onSubmit(values) {
        console.log("success");
        console.log(values)
        axios.post('http://localhost:4000/login', values).then(

          res => {
            console.log(res)
            console.log(res.status)
          }

        ).catch(
          err => {
            console.log(err)
          }
        )
        console.log("success2");
        //  props.onSave(values);

      }
    }
  );

  function validate(values) {
    const errors = {};
    if (!values.email) {
      errors.email = "Email Id is required";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }


    return errors
  }


  if (isLoggedIn) {
    return <Redirect to="/products" />;
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>

        <Form.Group>
        <Form.Label>Email address</Form.Label>
          
          <Form.Control type="email" 
            name="email" onChange={handleChange}
            values={values.email} />
              <Form.Text className="text-muted">
              {errors.email ? errors.email : null}
    </Form.Text>
         
        </Form.Group>

        <Form.Group>
        <Form.Label>Password</Form.Label>
        
          <Form.Control type="password" 
            name="password" onChange={handleChange}
            values={values.password} />
            <Form.Text className="text-muted">
          {errors.password ? errors.password : null}
          </Form.Text>
        </Form.Group>

        <Form.Group>
          <Button variant="primary" type="submit">Sign In</Button>
        </Form.Group>
      </Form>
    </div>
  )
}

export default Login;