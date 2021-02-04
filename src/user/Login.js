import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import { Formik, useFormik } from 'formik';

//It is used to call server directly
import axios from 'axios';  

// Using bootstrap
import Form from 'react-bootstrap/Form';


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
        axios.post('http://localhost:4000/login',values).then(

        res=>{
           console.log(res)
           console.log(res.status)
           
           
           
        }

        ).catch(
          err=>{
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

 /*
  function postLogin() {  
    axios.get('http://localhost:4000/login').then(result => {
      if (result.status === 200) {
        // setAuthTokens(result.data);
        console.log("postLogin")
        localStorage.setItem('userId','asdf')
        setLoggedIn(true);
      } else {
        console.log("elsepostLogin");
        localStorage.setItem('userId','asdf')
        setIsError(true);
      }
    }).catch(e => {
      console.log("where is dheeraj");
      setIsError(true);
    });

  }

*/
  if (isLoggedIn) {
    return <Redirect to="/products" />;
  }

  return (
      <div>
        <Form onSubmit={handleSubmit}>
  
  
          <Form.Group>
            <input type="email" placeholder="Enter emailId"
              name="email" onChange={handleChange}
              values={values.email} />
            {errors.email ? errors.email : null}
          </Form.Group>
  
          <Form.Group>
            <input type="password" placeholder="Enter password Name"
              name="password" onChange={handleChange}
              values={values.password} />
            {errors.password ? errors.password : null}
          </Form.Group>
          <Form.Group>
            <button type="submit">Sign In</button>
          </Form.Group>
  
  
        </Form>
      </div>
    )
}

export default Login;