import React from 'react';
import { connect } from 'react-redux';
import * as actioncreator from '../../actions/productActions';
import history from '../../history';
import { Redirect } from 'react-router-dom';

class DeleteProductForm extends React.Component {

  render() {
    console.log("DeleteProduct render")
    console.log(this.props)
    if(localStorage.getItem("isLogin")=="false")
    return <Redirect to="/login" />;
    
    if(this.props.product!=null){
      console.log(this.props.product.id)
      this.props.deleteProduct(this.props.product.id)  
    }
   
    history.push('/')
    
    return(
      <>
      </>
    );  
     
    
  }
}

const mapStatetoProps = (state,ownProps) => {
  let id = ownProps.match.params.id
  return {
    product: state.products.find(product => product.id == id)
  }
}

const mapDispatchtoProps = (dispatch) => {

 
  return {    
    deleteProduct:(id) => dispatch(actioncreator.deleteProduct(id))
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(DeleteProductForm);
