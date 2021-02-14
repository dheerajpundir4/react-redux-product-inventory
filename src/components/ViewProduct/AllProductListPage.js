import React,{Suspense} from 'react'


import { connect } from 'react-redux';


import { Link } from 'react-router-dom'

// get all the product


//Classes of same folder
import { TableBody, TableHead } from './TableData.js';
// Using bootstrap
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import {Container } from 'react-bootstrap';




const CustomizationField=React.lazy(() => {

  return new Promise(resolve => setTimeout(resolve, 5 * 1000)).then(
    () =>
      Math.floor(Math.random() * 10) >= 0
        ? import('./CustomizationField')
        : Promise.reject(new Error())
  );
  
});



class AllProductListPage extends React.Component {


  constructor() {
    console.log("Inside All ProductListPage Constructor")
   
    super()
    this.state = {
      VALUE_OF_FILTER_FORM: '',
      ARRAY_FILTER_PRODUCTS: '',
      IS_FILTER: false,
      ARRAY_CUSTOM_COLUMN: ''
    };
  
  
    this.handleFilter = this.handleFilter.bind(this)
    this.handleCustom = this.handleCustom.bind(this)

  }
  componentDidMount() {
    console.log("ProductListPage CompnentDidMount")   
  
  }

  handleCustom(arrayOfSelectedColumn) {
   
    this.setState({ 
      ARRAY_CUSTOM_COLUMN: arrayOfSelectedColumn 
    })

  }

  handleFilter(event) {
   

    if (event.target.value == "") {

      this.setState({
        IS_FILTER: false,
        VALUE_OF_FILTER_FORM: event.target.value
      })

    }
    else {

      let product = this.props.products.filter(product => {

        if (product.productName.includes(event.target.value))
          return product
      })

      this.setState({
        ARRAY_FILTER_PRODUCTS: product,
        IS_FILTER: true,
        VALUE_OF_FILTER_FORM: event.target.value
      })

    }
  }


  render() {   

    console.log("ProductListPage render")
    console.log(this.props)
   

    let tableHead = (<TableHead customizationCol={this.state.ARRAY_CUSTOM_COLUMN} />)
    let tableBody = ""

    if (this.state.IS_FILTER) {


      tableBody = this.state.ARRAY_FILTER_PRODUCTS.map(product =>
        (
          <TableBody customizationCol={this.state.ARRAY_CUSTOM_COLUMN} product={product} />
        ));
    }
    else {
      tableBody = this.props.products.map(product =>
        (
          <TableBody customizationCol={this.state.ARRAY_CUSTOM_COLUMN} product={product} />
        ));

    }




    return (
      <React.Suspense fallback={<h1>LazyLoading</h1>}>

      <Container>

      <React.Suspense fallback={<h1>LazyLoading</h1>}>

      <div className="w-auto h-auto">
        
        {<CustomizationField handleCustomizationField={this.handleCustom} />}
       
        </div>

      
      <div className="w-auto h-auto d-inline-block">
       
            <Form>
              <Form.Control type="text"
                onChange={this.handleFilter}
                placeholder="Filter"
                value={this.state.VALUE_OF_FILTER_FORM}
                className="mr-sm-2" />

            </Form>
        
            </div>

          

        </React.Suspense>

        <Table striped bordered hover>
          <thead>
            {tableHead}
          </thead>
          <tbody>
            {tableBody}
          </tbody>
        </Table>

        <br />
      
        <br />

     
      </Container>

      </React.Suspense>
    );
  }

}



const mapStatetoProps = (state) => {
  return {
    products: state.products
  }
}


export default connect(mapStatetoProps)(AllProductListPage);


