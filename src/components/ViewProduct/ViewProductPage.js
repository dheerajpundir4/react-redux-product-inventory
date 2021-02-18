import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Prompt } from 'react-router'
import { Container } from 'react-bootstrap';



// Using bootstrap
import Table from 'react-bootstrap/Table';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import ViewProductPageChild from './ViewProductPageChild';


class ViewProductPage extends React.Component {
  render() {
    console.log("ViewProductPage render")

    const accessToken=localStorage.getItem('accessToken')
    const userID=localStorage.getItem('userId')
    const isLoggedIn= localStorage.getItem('isLoggedIn')

    console.log(accessToken)
    console.log(userID)
    console.log(isLoggedIn)
   
    if (accessToken==null || userID==null || isLoggedIn==null)
      return <Redirect to="/login" />;

      console.log("hellol")

    let product = this.props.product




    const URL = "http://localhost:4000/products";

    axios.get(URL + "/" + product.id).then(response => {
      response.data.views = response.data.views + 1
      axios.put(URL + "/" + product.id, response.data).then(response => {

      })

    })

    return (
      <>
      <Container>
       
      <ViewProductPageChild product={this.props.product}/>
       
      </Container>
      </>
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



