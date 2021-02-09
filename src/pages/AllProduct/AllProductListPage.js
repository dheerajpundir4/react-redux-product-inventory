import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

// get all the product
import { loadProduct } from '../../actions/productActions';

//Classes of same folder
import { TableBody, TableHead } from './TableData.js';
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
      VALUE_OF_FILTER_FORM: '',
      ARRAY_FILTER_PRODUCTS: '',
      IS_FILTER: false,
      ARRAY_CUSTOM_COLUMN: ''
    };

    this.handleFilter = this.handleFilter.bind(this)
    this.handleCustom = this.handleCustom.bind(this)

  }
  componentDidMount() {
    this.props.loadProduct();
  }

  handleCustom(arrayOfSelectedColumn) {
    console.log("Inside Handle Custome")
    
    this.setState({ 
      ARRAY_CUSTOM_COLUMN: arrayOfSelectedColumn 
    })

  }

  handleFilter(event) {
    console.log("Inside HandleFilter")

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

    console.log("Render Called All ProductListPage")



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

      <Container>


        <Row>

          <Col sm="3">
            <Form>
              <Form.Control type="text"
                onChange={this.handleFilter}
                placeholder="Filter"
                value={this.state.VALUE_OF_FILTER_FORM}
                className="mr-sm-2" />

            </Form>
          </Col>

          <Col  >

            {<CustomizationField handleCustomizationField={this.handleCustom} />}

          </Col>


        </Row>



        <Table striped bordered hover>
          <thead>
            {tableHead}
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
