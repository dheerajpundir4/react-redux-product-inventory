import React from 'react'

import { loadProduct } from './actions/productActions';

import { connect } from 'react-redux';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Using component
import AllProductPage from './pages/ViewProduct/AllProductListPage';
import AboutPage from './pages/AboutPage';

import AddProductPage from './pages/AddProduct/AddProductPage';
import ViewProductPage from './pages/ViewProductPage';
import TopViewProduct from './pages/TopViewProduct'
import Login from './user/Login';
import Signup from './user/Signup';
import Logout from './user/Logout';
import DeleteProductPage from './opertion/DeleteProductForm';
import EditProductPage from './pages/EditProduct/EditProductPage';

import SuccessComponent from './components/SuccessComponent'



import NavComponent from './components/NavComponent'
import { Container } from 'react-bootstrap';

import axios from 'axios';

 class App extends React.Component {

  constructor() {

    console.log("App Constructor")
    super()
    this.state = {}
    this.checkUserValidation = this.checkUserValidation.bind(this)
    this.setUser = this.setUser.bind(this)

  }


  setUser = (user) => {

    console.log("App setUser")
    this.setState({
      user: user
    })
  }

  checkUserValidation() {
    console.log("App checkUserValidation")

    const config = {
      headers: {
        Authorization: "Bearer" + localStorage.getItem('token')
      }
    }

    const id = localStorage.getItem('id')

    axios.get('users/' + id, config).then(
      res => {
        console.log("--SUCCESS--")
        console.log(config)
        console.log(res)
        if (res.status = 200) {
          this.setUser(res.data)
        }
      },
      err => {
        console.log("--ERROR--")
        console.log(err)
      }
    )
  }



  componentDidMount() {

    console.log("App componentDidMount")

    this.checkUserValidation()
    this.props.loadProduct()


  }




  render() {

    console.log("App render")
    return (
      <Container fluid="xl">
        <Container>

          <NavComponent user={this.state.user} />
        </Container>

        <Container>


          <Router>
            <Switch>
           
              <Route path="/products" >
                <AllProductPage products={this.props.products}/>
              </Route>             
              <Route path="/about" component={AboutPage} />
              <Route path="/topViewProduct" component={TopViewProduct} />
            
              <Route path="/view/:id"  >
                  <ViewProductPage products={this.props.products}/>
              </Route>
              <Route path="/delete/:id" component={DeleteProductPage} />
              <Route path="/edit/:id" component={EditProductPage} />
              <Route path="/addProduct" component={AddProductPage} />
             
              <Route path="/Login" component={() => <Login setUser={this.setUser} />} />
              <Route path="/Signup" component={Signup} />
              <Route path="/Logout" component={Logout} />
              <Route path="/success/:id" component={SuccessComponent} />
              <Route path="/" >
                <AllProductPage products={this.props.products}/>
              </Route>
            </Switch>
          </Router>
        </Container>
      </Container>
    );
  }
}


const mapStatetoProps = (state) => {
  return {
    products: state.products
  }
}

export default connect(mapStatetoProps, { loadProduct })(App);

