import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';


// get all the product
import { loadProduct } from '../../actions/productActions';

//Classes of same folder
import SingleRow from './SingleRow.js';
import CustomizationField from './CustomizationField';

// Using bootstrap
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import axios from 'axios';




class AllProductListPage extends React.Component {


  constructor() {
    super()
    this.state = {     
      value:'',
      pro:'',
      isFilter:false
    };

    this.handleChange=this.handleChange.bind(this)
  }
    componentDidMount(){
      this.props.loadProduct();
    } 


  display(value) {
    console.log("Hello")
    console.log(value)
   
    console.log(value.includes("productName"));
   
  }

  handleChange(event){
    console.log("filer handlechange Product")   
    console.log(event.target.value)
    this.setState({value:event.target.value})
    if(event.target.value==""){
      this.setState({isfilter:false})
      
    }
    else{
     
      console.log(event.target.value!="")
     let product=this.props.products.filter(product=>{
       console.log("checkig the value")
       console.log(product.productName)
       console.log(event.target.value)
       console.log(product.productName==event.target.value)      
       if(product.productName.includes(event.target.value))
       return product
     })
     console.log("===product===")
     console.log(product)
     console.log(this.state.isfilter)
     this.setState({pro:product,isfilter:true})
    
    }
  }

 
  
  render() {
      
    console.log("rendter")
    console.log(this.state.pro)
    console.log(this.props.products)
    console.log(this.state.pro.length)
    console.log(this.state.pro!=null)

    console.log(this.state.isfilter)

    let productNodes=""

    if(this.state.isfilter){

      productNodes = this.state.pro.map(product =>
        (
          <SingleRow id={product.id} productName={product.productName} quantity={product.quantity} price={product.price} />
        ));
    }
    else{
      productNodes = this.props.products.map(product =>
        (
          <SingleRow id={product.id} productName={product.productName} quantity={product.quantity} price={product.price} />
        ));

    }

   

  
    return (

      <>
        {<CustomizationField cusValue={this.display} />}
        <Form inline>
          <Form.Control type="text"
          onChange={this.handleChange}
           placeholder="Filter" 
           value={this.state.value}
           className="mr-sm-2" />
          
        </Form>


        <Table striped bordered hover>
          <thead>
            <tr>
              {(false) ? (<th>Product Name</th>) : <></>}
              <th>Quantity</th>
              <th>Price</th>
              <th>Action(s)</th>
            </tr>
          </thead>
          <tbody>
            {productNodes}
          </tbody>
        </Table>

        <br />
        <Link to="/addProduct">Add Product</Link>
        <br />

        <Link to="/topViewProduct">Top View Product</Link>
      </>


    );
  }
}


const mapStatetoProps = (state) => {  
  return {
    products: state.products
  }
}

export default connect(mapStatetoProps, { loadProduct })(AllProductListPage);
