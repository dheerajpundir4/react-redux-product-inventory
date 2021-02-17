import React from 'react';
import { connect } from 'react-redux';
import * as actioncreator from '../../actions/productActions';
import history from '../../history';
import { Redirect } from 'react-router-dom';

class DeleteProductPage extends React.Component {
  constructor(props){
    super(props)
    console.log("We are in Delete Product Page Constructor")
  
   console.log(props)
  }

  render() {
    //history.push('/')
    //What is the use of it
    console.log("DeleteProduct render")
    console.log(this.props)
    const accessToken=localStorage.getItem('accessToken')
    const userID=localStorage.getItem('userId')
    const isLoggedIn= localStorage.getItem('isLoggedIn')
   
    if (accessToken==null || userID==null || isLoggedIn==null)
    return <Redirect to="/login" />;

   
  
    if( window.confirm("Are you sure want to delete this record!") && this.props.product!=null){
      console.log(this.props.product.id)
      this.props.deleteProduct(this.props.product.id) 
     
     
    }
    
   
   
    
    return(
    <>
   
  
     <Redirect to="/" />
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

export default connect(mapStatetoProps, mapDispatchtoProps)(DeleteProductPage);
