import React, {useState} from "react";
import {Redirect} from 'react-router-dom';
import {useFormik} from 'formik';

//const URL ="http://localhost:4000/products";
//It is used to call server directly
import axios from 'axios';


// Using bootstrap
import {Button, Card, Col, Container, Form, Row} from 'react-bootstrap';


function Signup() {


    const [isSignUp, setSignUp] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isUserExist, setIsUserExist] = useState(false);
    const [isErrorMessage, setIsErrorMessage] = useState("");

    const {handleSubmit, handleChange, values, errors} = useFormik(
        {
            initialValues: {
                email: "",
                password: "",
                firstName: "",
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
                        setIsErrorMessage("Please Use another email ID")

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
        if (!values.firstName) {
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

    if (localStorage.getItem("isLogin") == "true")
        return <Redirect to="/"/>;


    if (isSignUp) {
        console.log("Signup success")
        return <Redirect to="/success/signUp"/>;

    }

    return (
        <Container>


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
                                          values={values.email}/>
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
                                          values={values.password}/>
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
                                          name="firstName" onChange={handleChange}
                                          values={values.firstName}/>

                        </Col>
                        <Col>
                            <Form.Text className="text-muted">
                                {errors.firstName ? errors.firstName : null}
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
                                          values={values.lastName}/>

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
                                          values={values.location}/>
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
                                          values={values.mobileNumber}/>

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
                    <Form.Group>
                        {isErrorMessage}
                    </Form.Group>

                </Form>
            </Card.Body>

        </Container>
    )
}

export default Signup;
