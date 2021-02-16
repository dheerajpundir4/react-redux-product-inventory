import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import { useFormik } from 'formik';

//It is used to call server directly
import axios from 'axios';

// Using bootstrap
import { Form, Button, Col, Row, Container, Card } from 'react-bootstrap';

function Login(props) {
  
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isErrorMessage, setIsErrorMessage] = useState("");



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
        axios.post('login', values).then(

          res => {
            console.log(res)
            console.log(res.status)
            if(res.status==200){
              {
               localStorage.setItem("isLogin","true")
               
                console.log(res.data.accessToken)
                localStorage.setItem('token',res.data.accessToken)
                console.log("calling another")
               axios.get('users/?email=dhee@gmail.com').then(
                 res=>{
                   console.log(res)
                   if(res.status==200){
                      console.log("+++++============")
                      console.log(res.data[0].id);
                      localStorage.setItem('id',res.data[0].id)
                      setLoggedIn(true);
                      props.setUser(res.data[0].email)
                
                      //<Redirect to="/products" />
                 }
                }
               )
               
              }
            }
          }

        ).catch(
          err => {           
            console.log(err)
           
            setIsErrorMessage("Invalid Email Id and password")
          }
        )
        console.log("success2");
        //  props.onSave(values);

      }
    }
  );

  function validate(values) {
    setIsErrorMessage("")
    const errors = {};
    if (!values.email) {
      errors.email = "Email Id is required";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }


    return errors
  }

  if(localStorage.getItem("isLogin")=="true")
  return <Redirect to="/" />;



  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <Container>

     
     
    
     
<Card.Body>
<h3>Login</h3>
      <Form onSubmit={handleSubmit}>
      
        <Form.Group>
       
          <Form.Label>Email</Form.Label>
      
         
          <Form.Control 
          as="input"
           type="email"
            name="email" onChange={handleChange}
            values={values.email} />
           
        
          <Form.Text className="text-muted">
            {errors.email ? errors.email : null}
          </Form.Text>
         
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>

          <Form.Control 
          type="password"
            name="password" onChange={handleChange}
            values={values.password} />
          <Form.Text className="text-muted">
            {errors.password ? errors.password : null}
          </Form.Text>
        </Form.Group>

        <Form.Group>
          <Button variant="primary" type="submit">Sign In</Button>
        </Form.Group>

        <Form.Group>
       {isErrorMessage}
       </Form.Group>
      </Form>
      </Card.Body>
    
    </Container>
  )
}

export default Login;