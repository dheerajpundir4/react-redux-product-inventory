import React from 'react';
import { Link } from 'react-router-dom';

export default class DisplayProductDetail extends React.Component {

  
  render() {
   /* if (window.confirm('Are you sure you want to view the details?')) {
       
      } else {
        window.history.go(-1);
      }*/
     
    return (
      
      <div>
          <h2>Product Details</h2>
        <b> Product Name:</b> {this.props.match.params.id} 
        <br/><br/>
        <a href="javascript:history.go(-1)"> Back </a>
      </div>
    );
  }
}
