import React from 'react';
import { Formik, useFormik } from 'formik';

// Using bootstrap
import Form from 'react-bootstrap/Form';


export default function EditProductForm(props) {

    const { handleSubmit, handleChange, values, errors } = useFormik(
        {

            initialValues: {
                id: props.product.id,
                productName: props.product.productName,
                productDesctiption:props.product.productDesctiption,
                manufacturer:props.product.manufacturer,
                quantity: props.product.quantity,
                price: props.product.price
               
            },
            validate,
            onSubmit(values) {
                console.log("dheeraj")
                console.log(props.product.id);
                props.onEdit(values);

            }
        }
    );


    function validate(values) {

        const errors = {};
        if (!values.productName) {
            errors.productName = "Product Name is required";
        }
        if (!values.quantity) {
            errors.quantity = "Quantity is required";
        }
        if (!values.price) {
            errors.price = "Price is required";
        }
        if (values.price) {
            values.price = "Rs. " + values.price
        }
        return errors
    }




    return (
        <Form onSubmit={handleSubmit}>

            <Form.Group>
                <input type="text" placeholder={props.product.productName} name="productName" onChange={handleChange} values={values.productName} />
                {errors.productName ? errors.productName : null}
            </Form.Group>

            <Form.Group>
                <input type="text" placeholder={props.product.productDesctiption} name="productName" onChange={handleChange} values={values.productName} />
                {errors.productName ? errors.productName : null}
            </Form.Group>

            <Form.Group>
                <input type="text" placeholder={props.product.manufacturer} name="productName" onChange={handleChange} values={values.productName} />
                {errors.productName ? errors.productName : null}
            </Form.Group>

            <Form.Group>
                <input type="number" placeholder={props.product.quantity} name="quantity" onChange={handleChange} values={values.quantity} />
                {errors.quantity ? errors.quantity : null}
            </Form.Group>


            <Form.Group>
                <input type="number" placeholder={props.product.price} name="price" onChange={handleChange} values={values.price} />
                {errors.price ? errors.price : null}
            </Form.Group>

            <Form.Group>
                <button type="submit">Submit</button>
            </Form.Group>

        </Form>
    )

}
