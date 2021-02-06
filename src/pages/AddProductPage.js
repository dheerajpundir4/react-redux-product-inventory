import React from 'react';
import {connect} from 'react-redux';

import { Redirect } from 'react-router-dom';

import {withRouter} from 'react-router-dom';
import AddProductForm from '../opertion/AddProductForm';
import * as actionCreator from '../actions/productActions'

class AddProductPage extends React.Component{

   isLogged=false

  componentDidMount(){

   
  }


    render(){

      
      console.log("render run first in AddProductPage then component did mount")
   console.log(this.props.user==undefined)
   console.log(this.props.user) 

   if(this.props.user==undefined){
     this.isLogged=false;
   }
   else{
     this.isLogged=true;
   }
   console.log("isLogged"+this.isLogged)

      if(this.isLogged){
    
        return(
            <div>
             
            <AddProductForm onSave={this.props.saveProduct}/>
          
            </div>
        );
      }
      else{
        return(
          <>
          <h1>First do Login</h1>
          <Redirect to="/login" />;
          </>
        );
      }
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
