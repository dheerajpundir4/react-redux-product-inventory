import React from 'react';

import { Redirect } from 'react-router-dom';

// Using bootstrap
import Table from 'react-bootstrap/Table';
import { useParams } from 'react-router-dom';
import axios from 'axios'


function ViewProductPage(props) {

  console.log("ViewProductPage render Page")
  let {id} =useParams()

  console.log(localStorage.getItem("isLogin")=="false")

  if(localStorage.getItem("isLogin")=="false")
  return <Redirect to="/login" />;
  

  let product = props.products.filter((p) => {
    if(p.id == id){

      const URL ="http://localhost:4000/products";
      
      axios.get(URL+"/"+id).then(response=>{
        response.data.views=response.data.views+1
        axios.put(URL+"/"+id,response.data).then(response=>{
          
        })
        
      })

      return true
    }
  })


  return (
      <div>
        <h2>Product Description</h2>
        <Table striped bordered hover>
          <tr>
            <th>ID#</th>
            <th>Product Name</th>
            <th>Product Description</th>
            <th>Manufacturer</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
          <tr>
            <td>{product[0].id}</td>
            <td>{product[0].productName}</td>
            <td>{product[0].productDescription}</td>
            <td>{product[0].manufacturer}</td>
            <td>{product[0].price}</td>
            <td>{product[0].quantity}</td>
          </tr>
        </Table>

        <a href="javascript:history.go(-1)"> Back </a>
      </div>
  );
}

export default ViewProductPage