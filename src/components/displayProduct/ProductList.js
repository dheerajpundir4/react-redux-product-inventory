import React from 'react';

//using component
import SingleProduct from './SingleProduct.js';

// Using bootstrap
import Table from 'react-bootstrap/Table';

export default class ProductList extends React.Component {

  render() {

    let productNodes = this.props.products.map(product =>
      (
        <SingleProduct id={product.id} productName={product.productName} quantity={product.quantity} price={product.price} />
      ));

    return (
      <>
        <Table striped bordered hover>
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
        </Table>
      </>
    )
  }
}