import React from 'react';
import { connect } from 'react-redux';
import * as actioncreator from '../../actions/productActions';

import { Redirect } from 'react-router-dom';

class DeleteProductForm extends React.Component {

  render() {
    if(localStorage.getItem("isLogin")=="false")
    return <Redirect to="/login" />;
    
   
    let p = this.props.products.filter((product) => {     
  
      if(product.id == this.props.match.params.id)
      {
        this.props.deleteProduct(product.id) 
        return true
      }
    }) 
   
    
    return(
      <>
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
    deleteProduct:(id) => dispatch(actioncreator.deleteProduct(id))
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(DeleteProductForm);
