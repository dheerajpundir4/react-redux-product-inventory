import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actioncreator from '../../actions/productActions';
import { act } from 'react-dom/cjs/react-dom-test-utils.production.min';

class DeleteProductPage extends React.Component {

  render() {
    let p = this.props.products.filter((product) => {
      console.log(product.id)
      console.log(this.props.match.params.id)
      return product.id == this.props.match.params.id
    }) 

    
   

    return (
      <div>
        <h2>Delete Product Page</h2>
        <table>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>price</th>
            <th>quantity</th>
          </tr>
          <tr>
            <td>{p[0].id}</td>
            <td>{p[0].productName}</td>
            <td>{p[0].quantity}</td>
            <td>{p[0].price}</td>
          </tr>
        </table>
        {this.props.deleteProduct(p[0].id)}
        <a href="javascript:history.go(-1)"> Back </a>
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
    deleteProduct:(id) => dispatch(actioncreator.deleteProduct(id))
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(DeleteProductPage);