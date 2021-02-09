import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';


// get all the product
import { loadProduct } from '../../actions/productActions';

//Classes of same folder
import {TableBody, TableHead} from './TableData.js';
import CustomizationField from './CustomizationField';

// Using bootstrap
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { Col, Row, Container } from 'react-bootstrap';




class AllProductListPage extends React.Component {


  constructor() {
    console.log("Constructor Called All ProductListPage")
    super()
    this.state = {
      value: '',
      pro: '',
      isFilter: false,
      isCustom: ''
    };

    this.handleFilter = this.handleFilter.bind(this)
    this.handleCustom = this.handleCustom.bind(this)

  }
  componentDidMount() {
    this.props.loadProduct();
  }

  handleCustom(selected) {
    console.log("+++++++++Custom Selected++++++++")
    console.log(selected)
    this.setState({ isCustom: selected })

  }

  handleFilter(event) {
    console.log("filer handlechange")
    console.log(event.target.value)
    this.setState({ value: event.target.value })
    if (event.target.value == "") {
      this.setState({ isfilter: false })

    }
    else {

      console.log(event.target.value != "")
      let product = this.props.products.filter(product => {
       
        if (product.productName.includes(event.target.value))
          return product
      })
     
      this.setState({ pro: product, isfilter: true })

    }
  }


  render() {

    console.log("Render Called All ProductListPage")

  
   
    let tableHead=(<TableHead customizationCol={this.state.isCustom}/>)
    let tableBody = ""




    if (this.state.isfilter) {


      tableBody = this.state.pro.map(product =>
        (
          <TableBody customizationCol={this.state.isCustom} product={product} />
        ));
    }
    else {
      tableBody = this.props.products.map(product =>
        (
          <TableBody customizationCol={this.state.isCustom} product={product} />
        ));

    }




    return (

      <Container>


        <Row>

          <Col sm="3">
            <Form>
              <Form.Control type="text"
                onChange={this.handleFilter}
                placeholder="Filter"
                value={this.state.value}
                className="mr-sm-2" />

            </Form>
          </Col>

          <Col  >

            {<CustomizationField handleCustomizationField={this.handleCustom} />}

          </Col>


        </Row>



        <Table striped bordered hover>
          <thead>
         { tableHead}
          </thead>
          <tbody>
            {tableBody}
          </tbody>
        </Table>

        <br />
        <Link to="/addProduct">Add Product</Link>
        <br />

        <Link to="/topViewProduct">Top View Product</Link>
      </Container>


    );
  }
}


const mapStatetoProps = (state) => {
  return {
    products: state.products
  }
}

export default connect(mapStatetoProps, { loadProduct })(AllProductListPage);
