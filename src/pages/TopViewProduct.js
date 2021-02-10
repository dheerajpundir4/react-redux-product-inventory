import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


// Using bootstrap
import Table from 'react-bootstrap/Table';


class TopViewProduct extends React.Component {
  
    constructor(){
      console.log("TopViewProduct Constructor")      
      super()
    }

  render() {

    console.log("TopViewProduct render");
   

    let p = this.props.products.filter((product) => {    
        console.log("hey dheeraj") 
      return product.id ==="2"
    }) 

    
   

    return (
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

  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(TopViewProduct);