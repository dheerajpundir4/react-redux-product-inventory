import React from 'react'

////////////////////////////
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Using component
import AllProductPage from './pages/AllProduct/AllProductListPage';
import AboutPage from './pages/AboutPage';

import AddProductPage from './pages/AddProductPage';
import ViewProductPage from './pages/ViewProductPage';
import TopViewProduct from './pages/TopViewProduct'
import Login from './user/Login';
import Signup from './user/Signup';
import Logout from './user/Logout';
import DeleteProductPage from './opertion/DeleteProductForm';
import EditProductPage from './pages/EditProductPage';

import SuccessComponent from './components/SuccessComponent'




///////////////////////












import NavComponent from './components/NavComponent'
import { Card, Container } from 'react-bootstrap';

import axios from 'axios';

export default class App extends React.Component {

  state = {}

  componentDidMount() {

    const config = {
      headers: {
        Authorization: "Bearer" + localStorage.getItem('token')
      }
    }

    const id = localStorage.getItem('id')

    axios.get('users/' + id, config).then(
      res => {
        console.log("=======success===========")
        console.log(config)
        console.log(res)
        if (res.status = 200) {
          console.log("not sure what to do")

          this.setUser(res.data)


          console.log("this.state.user")
          console.log(this.state.user)
        }

      },
      err => {
        console.log("=======error===========")
        console.log(err)
      }
    )
    console.log("++++++++++++++++++++++++")
  }


  setUser = (us) => {
    this.setState({
      user: us
    })
  }

  render() {
    return (
      <Container fluid="xl">
        <Container>

          <NavComponent user={this.state.user} />
        </Container>

        <Container>


          <Router>
            <Switch>
              <Route path="/products" component={AllProductPage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/topViewProduct" component={TopViewProduct} />
              <Route path="/addProduct" component={AddProductPage} />
              <Route path="/view/:id" component={ViewProductPage} />
              <Route path="/delete/:id" component={DeleteProductPage} />
              <Route path="/edit/:id" component={EditProductPage} />
              <Route exact path="/">
                <AllProductPage />
              </Route>
              <Route path="/Login" component={() => <Login setUser={this.setUser} />} />
              <Route path="/Signup" component={Signup} />
              <Route path="/Logout" component={Logout} />
              <Route path="/success/:id" component={SuccessComponent} />
            </Switch>
          </Router>
        </Container>
      </Container>
    );
  }
}
