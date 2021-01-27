import React from 'react';
import { Formik, useFormik } from 'formik';

export default function AddProductForm(props) {
    
    const { handleSubmit, handleChange, values, errors } = useFormik(
        {
            initialValues: {
                productName: "",
                quantity: "",
                price: ""
            },
            validate,
            onSubmit(values) {
                console.log("we are here")
                console.log(props);
                props.onSave(values);          
               
            }
        }
    );


function validate(values) {
    const errors = {};
    if (!values.productName) {
        errors.productName = "ProductSingleRow Name is required";
    }
    if (!values.quantity) {
        errors.quantity = "Quantity is required";
    }
    if (!values.price) {
        errors.price = "Price is required";
    }
    if(values.price){       
        values.price="Rs. "+values.price
    }
    return errors
}




    return (
        <form onSubmit={handleSubmit}>
            <h1>Add ProductSingleRow</h1>
            <div>
                <input type="text" placeholder="Enter ProductSingleRow Name" name="productName" onChange={handleChange} values={values.productName} />
                {errors.productName?errors.productName:null}               
            </div>
            <br/>
            <div>
                <input type="number" placeholder="Enter Quantity" name="quantity" onChange={handleChange} values={values.quantity}/>
                {errors.quantity?errors.quantity:null}
            </div>
            <br/>
            <div>
                <input type="number" placeholder="Enter Price" name="price" onChange={handleChange} values={values.price} />
                {errors.price?errors.price:null}
            </div>
            <br/>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    )

}
