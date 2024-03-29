import React, {useState} from 'react';
import { useFormik } from 'formik';

// Using bootstrap
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Prompt } from 'react-router'




export default function EditProductForm(props) {

    const [WAS_USER_INPUT, setUSERINPUT] = useState(false);

    const { handleSubmit, handleChange, values, errors } = useFormik(
        {

            initialValues: {
                id: props.product.id,
                productName: props.product.productName,
                productDescription: props.product.productDescription,
                manufacturer: props.product.manufacturer,
                quantity: props.product.quantity,
                price: props.product.price,
                views:props.product.views

            },
            validate,
            onSubmit(values) {
                console.log("dheeraj")
                setUSERINPUT(false)
                console.log(props.product.id);
                if(window.confirm("Are you sure want to Edit this record!"))
                props.onEdit(values);

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

        if(values.productName!="" 
        || Object. keys(errors).length!=0
        
        ){
            setUSERINPUT(true)
        }
        else{
            setUSERINPUT(false)
        }
       
        return errors
    }




    return (
        <>
        <Prompt when={WAS_USER_INPUT} message="Are you Sure want to move out"/>
          
       
        <Form onSubmit={handleSubmit}>
        <h3>Edit Product Page</h3>
            <Form.Group as={Row}>
                <Col sm="3">
                    <Form.Label>Product Name</Form.Label>
                </Col>
                <Col>
                <Form.Control type="text" placeholder={props.product.productName} name="productName" onChange={handleChange} values={values.productName} />
              
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
                <Form.Control  type="text"
                 placeholder={props.product.productDescription} 
                 name="productDescription" 
                 onChange={handleChange}
                  values={values.productDescription} />
              
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
                <Form.Control  type="text" 
                placeholder={props.product.manufacturer} 
                name="manufacturer" 
                onChange={handleChange}
                 values={values.manufacturer} />
               
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
                <Form.Control  type="number" placeholder={props.product.quantity} name="quantity" onChange={handleChange} values={values.quantity} />
              
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
                <Form.Control  type="number" placeholder={props.product.price} name="price" onChange={handleChange} values={values.price} />
              
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
                <Button variant="primary" type="submit">Submit</Button>
                </Col>
                <Col>                   
                </Col>
            </Form.Group>

           
        </Form>
        </>
    )

}
