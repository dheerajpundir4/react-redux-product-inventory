import React from 'react';

// Using bootstrap
import Table from 'react-bootstrap/Table';
import { useParams } from 'react-router-dom';


function ViewProductPage(props) {

  console.log("ViewProductPage render Page")
  let {id} =useParams()

  

  let product = props.products.filter((p) => {
    return p.id == id
  })


  return (
      <div>
        <h2>Product Description</h2>
        <Table striped bordered hover>
          <tr>
            <th>ID#</th>
            <th>Product Name</th>
            <th>Product Description</th>
            <th>Manufacturer</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
          <tr>
            <td>{product[0].id}</td>
            <td>{product[0].productName}</td>
            <td>{product[0].productDesctiption}</td>
            <td>{product[0].manufacturer}</td>
            <td>{product[0].price}</td>
            <td>{product[0].quantity}</td>
          </tr>
        </Table>

        <a href="javascript:history.go(-1)"> Back </a>
      </div>
  );
}

export default ViewProductPage