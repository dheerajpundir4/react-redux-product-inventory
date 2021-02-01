import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';


// get all the product
import { loadProduct } from '../../actions/productActions';
import { loadFilterProduct } from '../../actions/productActions';

//using component
import ProductSingleRow from '../oper/ProductSingleRow.js';

// Using bootstrap
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';




class AllProductListPage extends React.Component {

  componentDidMount() {

    this.props.loadProduct();
  }
  render() {

    let productNodes = this.props.products.map(product =>
      (
        <ProductSingleRow id={product.id} productName={product.productName} quantity={product.quantity} price={product.price} />
      ));


    return (

      <>

        <Form inline>
          <FormControl type="text" placeholder="Filter Product" className="mr-sm-2" />
          <Button variant="outline-info">Filter</Button>
        </Form>


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
        <br />

        <Link to="/topViewProduct">Top View Product</Link>
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

export default connect(mapStatetoProps, { loadProduct })(AllProductListPage);
