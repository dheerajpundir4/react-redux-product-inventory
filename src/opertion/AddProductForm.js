import React from 'react';
import { useFormik } from 'formik';


// Using bootstrap
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function AddProductForm(props) {

    const { handleSubmit, handleChange, values, errors } = useFormik(
        {
            initialValues: {
                productName: "",
                productDescription: "",
                manufacturer: "",
                quantity: "",
                price: ""
            },
            validate,
            onSubmit(values) {
                console.log(props);
                props.onSave(values);

            }
        }
    );


    function validate(values) {
        const errors = {};
        if (!values.productName) {
            errors.productName = "Product Name is required";
        }
        if (!values.productDescription) {
            errors.productDescription = "Product Description is required";
        }
        if (!values.manufacturer) {
            errors.manufacturer = "Manufacturer is required";
        }
        if (!values.quantity) {
            errors.quantity = "Quantity is required";
        }
        if (!values.price) {
            errors.price = "Price is required";
        }

        return errors
    }




    return (
        <Form onSubmit={handleSubmit}>

            <Form.Group as={Row}>
                <Col sm="3">
                    <Form.Label>Product Name</Form.Label>
                </Col>
                <Col>
                    <Form.Control type="text"
                        name="productName" onChange={handleChange} values={values.productName} />

                </Col>
                <Col>
                    <Form.Text className="text-muted">
                        {errors.productName ? errors.productName : null}
                    </Form.Text>
                </Col>
            </Form.Group>







            <Form.Group as={Row}>
                <Col sm="3">
                    <Form.Label>Product Description</Form.Label>
                </Col>
                <Col>
                    <Form.Control type="text" 
                     name="productDesctiption" onChange={handleChange} values={values.productDesctiption} />

                </Col>
                <Col>
                    <Form.Text className="text-muted">
                        {errors.productDescription ? errors.productDescription : null}
                    </Form.Text>
                </Col>
            </Form.Group>



            <Form.Group as={Row}>
                <Col sm="3">
                    <Form.Label>Manufacturer</Form.Label>
                </Col>
                <Col>
                    <Form.Control type="text" 
                     name="manufacturer" onChange={handleChange} values={values.manufacturer} />

                </Col>
                <Col>
                    <Form.Text className="text-muted">
                        {errors.manufacturer ? errors.manufacturer : null}
                    </Form.Text>
                </Col>
            </Form.Group>



            <Form.Group as={Row}>
                <Col sm="3">
                    <Form.Label>Quantity</Form.Label>
                </Col>
                <Col>
                    <Form.Control type="number" 
                     name="quantity" onChange={handleChange} values={values.quantity} />

                </Col>
                <Col>
                    <Form.Text className="text-muted">
                        {errors.quantity ? errors.quantity : null}
                    </Form.Text>
                </Col>
            </Form.Group>




            <Form.Group as={Row}>
                <Col sm="3">
                    <Form.Label>Price</Form.Label>
                </Col>
                <Col>
                    <Form.Control type="number" 
                    name="price" onChange={handleChange} values={values.price} />

                </Col>
                <Col>
                    <Form.Text className="text-muted">
                        {errors.price ? errors.price : null}
                    </Form.Text>
                </Col>
            </Form.Group>




            <Form.Group as={Row}>
                <Col sm="3">

                </Col>
                <Col>
                    <Button type="submit">Submit</Button>
                </Col>
                <Col>

                </Col>
            </Form.Group>



        </Form>
    )

}
