import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';


// get all the product
import { loadProduct } from '../../actions/productActions';

//Classes of same folder
import SingleRow from './SingleRow.js';
import CustomizationField from './CustomizationField';

// Using bootstrap
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import axios from 'axios';




class AllProductListPage extends React.Component {


  constructor() {
    super()
    this.state = {
      assignvalue:"naveen sing"
    };
  }
    componentDidMount(){
      this.props.loadProduct();
    } 


  display(value) {
    console.log("Hello")
    console.log(value)
    console.log(value.includes("productName"));
   
  }

 
  
  render() {
      console.log(this.state.assignvalue)
    let productNodes = this.props.products.map(product =>
      (
        <SingleRow id={product.id} productName={product.productName} quantity={product.quantity} price={product.price} />
      ));

  
    return (

      <>
        {<CustomizationField cusValue={this.display} />}
        <Form inline>
          <FormControl type="text" placeholder="Filter Product" className="mr-sm-2" />
          <Button variant="outline-info">Filter</Button>
        </Form>


        <Table striped bordered hover>
          <thead>
            <tr>
              {(false) ? (<th>Product Name</th>) : <></>}
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

export default connect(mapStatetoProps, { loadProduct })(AllProductListPage);
