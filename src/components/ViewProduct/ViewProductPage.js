import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Prompt } from 'react-router'

// Using bootstrap
import Table from 'react-bootstrap/Table';
import { useParams } from 'react-router-dom';
import axios from 'axios'


class ViewProductPage extends React.Component {
  render() {

    console.log("ViewProductPage render")

    if (localStorage.getItem("isLogin") == "false")
      return <Redirect to="/login" />;


    let product = this.props.product




    const URL = "http://localhost:4000/products";

    axios.get(URL + "/" + product.id).then(response => {
      response.data.views = response.data.views + 1
      axios.put(URL + "/" + product.id, response.data).then(response => {

      })

    })

    return (
      <div>
        <Prompt message="Are you sure you want to leave?" />

        <h2>Product Description</h2>
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
            <td>{product.id}</td>
            <td>{product.productName}</td>
            <td>{product.productDescription}</td>
            <td>{product.manufacturer}</td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
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

export default connect(mapStatetoProps)(ViewProductPage);



