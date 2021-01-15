import React from 'react';
import { Link } from 'react-router-dom';



const Product=({id, productName,quantity,price})=>(
  

    <tr>
     
   
<td> <Link to={"/products/"+productName} style={{ textDecoration: 'none' }}>{productName}</Link></td>
    <td> <Link to={"/products/"+productName} style={{ textDecoration: 'none' }}>{quantity}</Link></td>
    <td> <Link to={"/products/"+productName} style={{ textDecoration: 'none' }}>{price}</Link></td>
   
  </tr>
  

);


export default Product;