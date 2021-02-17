import React from 'react';
import { connect } from 'react-redux';
import EditProductForm from './EditProductForm';
import * as actionCreator from '../../actions/productActions'
import { Redirect } from 'react-router-dom';



class EditProductPage extends React.Component {

  render() {

    console.log("EditProductPage render")
    
    const accessToken=localStorage.getItem('accessToken')
    const userID=localStorage.getItem('userId')
    const isLoggedIn= localStorage.getItem('isLoggedIn')
   
    if (accessToken==null || userID==null || isLoggedIn==null)
  return <Redirect to="/login" />;
  
   
  

    let product=this.props.product

    return (
      <div>
       

        <EditProductForm onEdit={this.props.editProduct} product={product} />

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

const mapDispatchtoProps = (dispatch) => {
  return {
    editProduct: (product) => dispatch(actionCreator.editProduct(product))
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(EditProductPage);
