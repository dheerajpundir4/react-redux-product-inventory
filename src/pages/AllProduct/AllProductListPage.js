import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';


// get all the product
import { loadProduct } from '../../actions/productActions';

//Classes of same folder
import Columns from './Columns.js';
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
        //   console.log("checkig the value")
        //  console.log(product.productName)
        //  console.log(event.target.value)
        //  console.log(product.productName == event.target.value)
        if (product.productName.includes(event.target.value))
          return product
      })
      //  console.log("===product===")
      //  console.log(product)
      //   console.log(this.state.isfilter)
      this.setState({ pro: product, isfilter: true })

    }
  }


  render() {

    console.log("Render Called All ProductListPage")

    /* console.log(this.state.pro)
     console.log(this.props.products)
     console.log(this.state.pro.length)
     console.log(this.state.pro != null)*/
    console.log(this.state.isfilter)

    console.log(this.state.isCustom)

    let productNodes = ""




    if (this.state.isfilter) {


      productNodes = this.state.pro.map(product =>
        (
          <Columns customizationCol={this.state.isCustom} product={product} />
        ));
    }
    else {
      productNodes = this.props.products.map(product =>
        (
          <Columns customizationCol={this.state.isCustom} product={product} />
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

            {<CustomizationField cusValue={this.handleCustom} />}

          </Col>


        </Row>



        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Product Name</th>

              {this.state.isCustom.includes('productDescription') ?
                <th>Product Desctiption</th> : <></>}

              {this.state.isCustom.includes('manufacturer') ?
                <th>manufacturer</th> :
                <></>}

              <th>Price</th>

              {this.state.isCustom.includes('quantity') ?
                <th>Quantity</th> :
                <></>}

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
