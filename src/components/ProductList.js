import React from 'react';
import Product from './Product';

export default class ProductList extends React.Component{
    render(){
      
      console.log("we are in product list");
      console.log(this.props);

        let productNodes=this.props.products.map(product=>
            (
                <Product  productName={product.productName} quantity={product.quantity} price={product.price}/>
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