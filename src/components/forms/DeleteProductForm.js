import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actioncreator from '../../actions/productActions';
import { act } from 'react-dom/cjs/react-dom-test-utils.production.min';

class DeleteProductForm extends React.Component {

  render() {
    let p = this.props.products.filter((product) => {     
      return product.id == this.props.match.params.id
    }) 
    this.props.deleteProduct(p[0].id) 
    
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
