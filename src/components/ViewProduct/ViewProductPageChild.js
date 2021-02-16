import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Prompt } from 'react-router'

// Using bootstrap
import Table from 'react-bootstrap/Table';
import { useParams } from 'react-router-dom';
import axios from 'axios'


class ViewProductPageChild extends React.Component {
    constructor(props){
        super(props)       
    }
  render() {
    return (
      <div>
        <Prompt message="Are you sure you want to leave?" />

        <h3>Product Description</h3>
        <Table striped bordered hover>
          <tr>
            <th>ID#</th>
            <th>Product Name</th>
            <th>Product Description</th>
            <th>Manufacturer</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
          <tr>
            <td>{this.props.product.id}</td>
            <td>{this.props.product.productName}</td>
            <td>{this.props.product.productDescription}</td>
            <td>{this.props.product.manufacturer}</td>
            <td>{this.props.product.price}</td>
            <td>{this.props.product.quantity}</td>
          </tr>
        </Table>

        <a href="javascript:history.go(-1)"> Back </a>
      </div>
    );
  }
}

const mapStatetoProps = (state, ownProps) => {
  let id = ownProps.match.params.id
  return {
    product: state.products.find(product => product.id == id)
  }
}

export default ViewProductPageChild;



