import React from 'react';
import SingleProduct from './SingleProduct.js';

export default class ProductList extends React.Component{
    render(){      
     
        let productNodes=this.props.products.map(product=>
            (
                <SingleProduct id={product.id} productName={product.productName} quantity={product.quantity} price={product.price}/>
            ));
             
            console.log(productNodes);
            return(
                <>
                     <table border="1px solid black">
          <thead>
            <tr>           
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {productNodes}
          </tbody>
        </table>
                </>
            )
    }
}
