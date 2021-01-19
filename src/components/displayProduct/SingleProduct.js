import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';



const SingleProduct=({id, productName,quantity,price})=>(
  

    <tr>
     
   
    <td> {productName}</td>
    <td> {quantity}</td>
    <td> {price}</td>   
    <td>
      <Link to={"/products/"+id} style={{ textDecoration: 'none'}}>View</Link>      
    </td>
  </tr>
 
  

);


export default SingleProduct;
