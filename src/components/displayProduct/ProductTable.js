import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

//using component
import ProductSingleRow from './ProductSingleRow.js';

// Using bootstrap
import Table from 'react-bootstrap/Table';


class ProductTable extends React.Component {
    render() {

        let productNodes = this.props.products.map(product =>
            (
              <ProductSingleRow id={product.id} productName={product.productName} quantity={product.quantity} price={product.price} />
            ));

            
        return (

            <>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Action(s)</th>
                </tr>
              </thead>
              <tbody>
                {productNodes}
              </tbody>
            </Table>

            <br />
                <Link to="/addProduct">Add Product</Link>
          </>

         
        );
    }
}


const mapStatetoProps = (state) => {
    return {
        products: state.products
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {

    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(ProductTable);
