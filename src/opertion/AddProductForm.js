import React from 'react';
import { useFormik } from 'formik';


// Using bootstrap
import Form from 'react-bootstrap/Form';

export default function AddProductForm(props) {

    const { handleSubmit, handleChange, values, errors } = useFormik(
        {
            initialValues: {
                productName: "",
                productDesctiption: "",
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
        if (!values.productDesctiption) {
            errors.productName = "productDesctiption Name is required";
        }
        if (!values.manufacturer) {
            errors.productName = "manufacturer Name is required";
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
            <input type="text" placeholder="Enter SingleRow Name" name="productName" onChange={handleChange} values={values.productName} />
                {errors.productName ? errors.productName : null}
            </Form.Group>

            <Form.Group>
            <input type="text" placeholder="Enter productDesctiption Name" name="productDesctiption" onChange={handleChange} values={values.productDesctiption} />
                {errors.productName ? errors.productName : null}
            </Form.Group>

            <Form.Group>
            <input type="text" placeholder="Enter manufacturer Name" name="manufacturer" onChange={handleChange} values={values.manufacturer} />
                {errors.productName ? errors.productName : null}
            </Form.Group>

            <Form.Group>
            <input type="number" placeholder="Enter Quantity" name="quantity" onChange={handleChange} values={values.quantity} />
                {errors.quantity ? errors.quantity : null}
            </Form.Group>

            <Form.Group>
            <input type="number" placeholder="Enter Price" name="price" onChange={handleChange} values={values.price} />
                {errors.price ? errors.price : null}
            </Form.Group>

            <Form.Group>
            <button type="submit">Submit</button>
            </Form.Group>
           
          
        </Form>
    )

}
