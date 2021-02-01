import React from "react";
import { Link } from 'react-router-dom';

import { Formik, useFormik } from 'formik';



//It is used to call server directly
import axios from 'axios';


// Using bootstrap
import Form from 'react-bootstrap/Form';

function Signup() {

  const { handleSubmit, handleChange, values, errors } = useFormik(
    {
      initialValues: {
        emailId: "",
        password: "",
        fistName: "",
        lastName: "",
        mobileNumber: "",
        location: ""

      },
      validate,
      onSubmit(values) {
        console.log("success");
        //  props.onSave(values);

      }
    }
  );

  function validate(values) {
    const errors = {};
    if (!values.emailId) {
      errors.emailId = "Email Id is required";
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

  return (
    <>
      <Form onSubmit={handleSubmit}>


        <Form.Group>
          <input type="email" placeholder="Enter emailId"
            name="emailId" onChange={handleChange}
            values={values.emailId} />
          {errors.emailId ? errors.emailId : null}
        </Form.Group>

        <Form.Group>
          <input type="password" placeholder="Enter password Name"
            name="password" onChange={handleChange}
            values={values.password} />
          {errors.password ? errors.password : null}
        </Form.Group>

        <Form.Group>
          <input type="text" placeholder="Enter fistName"
            name="fistName" onChange={handleChange}
            values={values.fistName} />
          {errors.fistName ? errors.fistName : null}
        </Form.Group>

        <Form.Group>
          <input type="text" placeholder="Enter lastName"
            name="lastName" onChange={handleChange}
            values={values.lastName} />
          {errors.lastName ? errors.lastName : null}
        </Form.Group>     



        <Form.Group>
          <input type="text" placeholder="Enter location"
            name="location" onChange={handleChange}
            values={values.location} />
          {errors.location ? errors.location : null}
        </Form.Group>

        <Form.Group>
          <input type="text" placeholder="Enter mobileNumber"
            name="mobileNumber" onChange={handleChange}
            values={values.mobileNumber} />
          {errors.mobileNumber ? errors.mobileNumber : null}
        </Form.Group>




        <Form.Group>
          <button type="submit">Submit</button>
        </Form.Group>


      </Form>
    </>
  )
}

export default Signup;