import React from 'react';
import { Link } from 'react-router-dom';

//using bootstrap
import Button from 'react-bootstrap/Button'



const SingleProduct = ({ id, productName, quantity, price }) => (


  <tr>
    <td> {productName}</td>
    <td> {quantity}</td>
    <td> {price}</td>
    <td>

      <Link to={"/view/" + id} style={{ textDecoration: 'none' }}>
        <Button variant="secondary" size="sm">View</Button>
      </Link>
      &nbsp;&nbsp;
      <Link to={"/delete/" + id} style={{ textDecoration: 'none' }}>
        <Button variant="secondary" size="sm"> Delete</Button>
      </Link>
      &nbsp;&nbsp;
      <Link to={"/edit/" + id} style={{ textDecoration: 'none' }}>
        <Button variant="secondary" size="sm">Edit</Button>
      </Link>

    </td>
  </tr>
);

export default SingleProduct;