import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import { Formik, useFormik } from 'formik';

//const URL ="http://localhost:4000/products";


//It is used to call server directly
import axios from 'axios';


// Using bootstrap
import { Form, Button, Col, Row, Container, Card } from 'react-bootstrap';



function Signup() {

  const [isSignUp, setSignUp] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isUserExist, setIsUserExist] = useState(false);

  const { handleSubmit, handleChange, values, errors } = useFormik(
    {
      initialValues: {
        email: "",
        password: "",
        fistName: "",
        lastName: "",
        mobileNumber: "",
        location: ""

      },
      validate,
      onSubmit(values) {
        console.log("success");
        console.log(values)
        axios.post('users', values).then(

          res => {
            console.log(res)
            console.log(res.status)
            if (res.status == 201)
              setSignUp(true)

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
    if (!values.fistName) {
      errors.fistName = "fistName Name is required";
    }
    if (!values.lastName) {
      errors.lastName = "lastName is required";
    }
    if (!values.mobileNumber) {
      errors.mobileNumber = "mobileNumber is required";
    }
    if (!values.location) {
      errors.location = "location is required";
    }


    return errors
  }

  if (isSignUp) {
    console.log("Signup success")
    return <Redirect to="/success/signUp" />;

  }

  return (
    <Container>
     
      <Card style={{ width: '50rem' }}>

     
      <Card.Body>
      <h3>SignUp</h3>
      <Form onSubmit={handleSubmit}>

        <Form.Group as={Row}>
          <Col sm="3">
            <Form.Label>Email</Form.Label>
          </Col>
          <Col>
            <Form.Control type="email"
              name="email" onChange={handleChange}
              values={values.email} />
          </Col>
          <Col>
            <Form.Text className="text-muted">
              {errors.email ? errors.email : null}
            </Form.Text>
          </Col>
        </Form.Group>




        <Form.Group as={Row}>
          <Col sm="3">
            <Form.Label>Password</Form.Label>
          </Col>
          <Col>
            <Form.Control type="password"
              name="password" onChange={handleChange}
              values={values.password} />
          </Col>
          <Col>
            <Form.Text className="text-muted">
              {errors.password ? errors.password : null}
            </Form.Text>
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Col sm="3">
            <Form.Label>First Name</Form.Label>
          </Col>
          <Col>
            <Form.Control type="text"
              name="fistName" onChange={handleChange}
              values={values.fistName} />

          </Col>
          <Col>
            <Form.Text className="text-muted">
              {errors.fistName ? errors.fistName : null}
            </Form.Text>
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Col sm="3">
            <Form.Label>Last Name</Form.Label>
          </Col>
         
          <Col>
          <Form.Control type="text" 
            name="lastName" onChange={handleChange}
            values={values.lastName} />

          </Col>
          <Col>
            <Form.Text className="text-muted">
              {errors.lastName ? errors.lastName : null}
            </Form.Text>
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Col sm="3">
            <Form.Label>Location</Form.Label>
          </Col>        
          <Col>
          <Form.Control type="text" 
            name="location" onChange={handleChange}
            values={values.location} />
          </Col>
          <Col>
            <Form.Text className="text-muted">
              {errors.location ? errors.location : null}
            </Form.Text>
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Col sm="3">
            <Form.Label>Mobile</Form.Label>
          </Col>       

          <Col>
          <Form.Control type="text"
            name="mobileNumber" onChange={handleChange}
            values={values.mobileNumber} />

          </Col>
          <Col>
            <Form.Text className="text-muted">
              {errors.mobileNumber ? errors.mobileNumber : null}
            </Form.Text>
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
        <Col sm="3"/>      
        <Col>
          <Button variant="primary" type="submit">Submit</Button>
          </Col>
        </Form.Group>


      </Form>
      </Card.Body>
      </Card>
    </Container>
  )
}

export default Signup;