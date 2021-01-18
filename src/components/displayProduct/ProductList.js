import React from 'react';
import SingleProduct from './SingleProduct.js';

export default class ProductList extends React.Component{
    render(){
      
      console.log("we are in product list");
      console.log(this.props);

        let productNodes=this.props.products.map(product=>
            (
                <SingleProduct productName={product.productName} quantity={product.quantity} price={product.price}/>
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
