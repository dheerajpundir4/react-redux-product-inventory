import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Prompt } from 'react-router'

// Using bootstrap
import Table from 'react-bootstrap/Table';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import ViewProductPageChild from './ViewProductPageChild';


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
       
      <ViewProductPageChild product={this.props.product}/>
       
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



