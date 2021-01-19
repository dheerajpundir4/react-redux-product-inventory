import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';



const SingleProduct=({id, productName,quantity,price})=>(
  

    <tr>
     
   
    <td> {productName}</td>
    <td> {quantity}</td>
    <td> {price}</td>   
    <td>
      <Link to={"/view/"+id} style={{ textDecoration: 'none'}}>View</Link>
      <Link to={"/delete/"+id} style={{ textDecoration: 'none'}}>Delete</Link>
      <Link to={"/edit/"+id} style={{ textDecoration: 'none'}}>Edit</Link>     
        
    </td>
  </tr>
 
  

);


export default SingleProduct;
