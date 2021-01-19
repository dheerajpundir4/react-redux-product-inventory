import React from 'react';
import { Formik, useFormik } from 'formik';

export default function EditProductForm(props) {
    
    const { handleSubmit, handleChange, values, errors } = useFormik(
        {
       
            initialValues: {   
                id:props.product.id,         
                productName: props.product.productName,
                quantity:props.product.quantity,
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
        errors.productName = "SingleProduct Name is required";
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
            <h1>Add SingleProduct</h1>
            <div>
                <input type="text" placeholder="Enter SingleProduct Name" name="productName" onChange={handleChange} values={values.productName} />
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
