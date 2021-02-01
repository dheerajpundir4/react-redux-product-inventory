import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import toastr from 'toastr';

import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import AddProductForm from '../opertion/AddProductForm';
import * as actionCreator from '../actions/productActions'


import * as productActions from '../actions/productActions';

class AddProductPage extends React.Component{
    render(){
      if(!(localStorage.getItem('userId')==null))
    {
      window.prompt("First Login")
      window.history.back()
    }
        return(
            <div>
              <h1>Add ProductSingleRow</h1>
            <AddProductForm onSave={this.props.saveProduct}/>
          
            </div>
        );
    }
}



function mapStateToProps(state) {
    return {
      product: state.product
    };
  }
  
  function mapDispatchToProps(dispatch) {
    console.log("Dispatch method");
    return {
    
        saveProduct:(product)=>dispatch(actionCreator.addProduct(product))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddProductPage));
