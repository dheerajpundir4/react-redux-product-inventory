import React, {useState} from "react";
import {Redirect} from 'react-router-dom';
import {useFormik} from 'formik';

//It is used to call server directly
import axios from 'axios';

// Using bootstrap
import {Button, Card, Container, Form} from 'react-bootstrap';

function Login(props) {

    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isErrorMessage, setIsErrorMessage] = useState("");


    const {handleSubmit, handleChange, values, errors} = useFormik(
        {

            initialValues: {
                email: "",
                password: ""
            },
            validate,
            onSubmit(values) {


                axios.post('login', values).then(res => {
                        if (res.status === 200) {

                            console.log("After successfully login")

                            console.log("res")
                            console.log(res)

                            console.log("res data")
                            console.log(res.data)


                            console.log("email is values.email " + values.email)
                            console.log("Getting Id via email id -- need to correct this logic")


                            const email = values.email
                            const accessToken = res.data.accessToken

                            axios.get('users/?email=' + email).then(res => {
                                    console.log("After successfully getting full user id")
                                    console.log(res)
                                    if (res.status === 200) {

                                        localStorage.setItem('accessToken', accessToken)
                                        localStorage.setItem('userId', res.data[0].id)
                                        localStorage.setItem('isLoggedIn', accessToken)

                                        setLoggedIn(true);
                                        props.setUser(res.data[0])

                                    }
                                }
                            )


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

    if (localStorage.getItem("isLogin") === "true")
        return <Redirect to="/"/>;


    if (isLoggedIn) {
        return <Redirect to="/"/>;
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
                            values={values.email}/>


                        <Form.Text className="text-muted">
                            {errors.email ? errors.email : null}
                        </Form.Text>

                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Password</Form.Label>

                        <Form.Control
                            type="password"
                            name="password" onChange={handleChange}
                            values={values.password}/>
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
