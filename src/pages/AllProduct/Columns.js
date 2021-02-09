import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//using bootstrap
import Button from 'react-bootstrap/Button'



const Columns = ({ abc, product }) => {

  let id = product.id

  console.log("singleRow")




  return (




    <tr>

      <td>  {product.productName}</td>
      { abc.includes('productDescription') ? <td>  {product.productDesctiption}</td> : <></>}
      {abc.includes('manufacturer') ? <td>  {product.manufacturer}</td> : <></>}
      <td>  {product.price}</td>
      {abc.includes('quantity') ? <td>  {product.quantity}</td> : <></>}

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
}

export default Columns;
