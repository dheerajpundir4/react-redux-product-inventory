import React from 'react';
import { connect } from 'react-redux';
import EditProductForm from './EditProductForm';
import * as actionCreator from '../../actions/productActions'
import { Redirect } from 'react-router-dom';



class EditProductPage extends React.Component {

  render() {
    if(localStorage.getItem("isLogin")=="false")
  return <Redirect to="/login" />;
  
   
    if(!(localStorage.getItem('userId')==null))
    {
      window.prompt("First Login")
      window.history.back()
    }

    let p = this.props.products.filter((product) => {
      return product.id == this.props.match.params.id
    })

    return (
      <div>
        <h2>Edit Product Page</h2>

        <EditProductForm onEdit={this.props.editProduct} product={p[0]} />

      </div>
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
    editProduct: (product) => dispatch(actionCreator.editProduct(product))
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(EditProductPage);
