import React from 'react'
import history from './history';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Using component
import AllProductPage from './components/ViewProduct/AllProductListPage';
import AboutPage from './AboutPage';

import AddProductPage from './components/AddProduct/AddProductPage';
import ViewProductPage from './components/ViewProduct/ViewProductPage';
import TopViewProduct from './components/ViewProduct/TopViewProduct'
import Login from './components/user/Login';
import Signup from './components/user/Signup';
import Logout from './components/user/Logout';
import DeleteProductPage from './components/DeleteProduct/DeleteProductForm';
import EditProductPage from './components/EditProduct/EditProductPage';

import SuccessComponent from './components/SuccessComponent'



import NavComponent from './components/NavComponent'
import { Container } from 'react-bootstrap';

import axios from 'axios';

class App extends React.Component {

  constructor() {

    console.log("App Constructor")
    super()
    this.state = {
      user:null
    }
    this.checkUserValidation = this.checkUserValidation.bind(this)
    this.setUser = this.setUser.bind(this)

  }


  //This method is called when we do first time login
  setUser = (user) => {

    console.log("App setUser")
    this.setState({
      user: user
    })
  }

  //This method is called when we fully load the App data
  checkUserValidation() {

    console.log("App checkUserValidation")

    const accessToken = localStorage.getItem('accessToken')
    const userId = localStorage.getItem('userId')

    console.log("accessToken "+accessToken)
    console.log("userId "+userId)

    const config = {
      headers: {
        Authorization: 'Bearer ' + accessToken
      }
    }

   

    axios.get('600/users/' + userId, config).then(
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
        this.setUser(null)     
        console.log(err)
      }
    )
  }



  componentDidMount() {

    console.log("App componentDidMount")

    this.checkUserValidation()
  }

  render() {

    console.log("App render")
    return (
      <div class="card">
        <Router history={history}>
          <div class="card-header">
            <NavComponent user={this.state.user} />
          </div>


          <div class="card-body" style={{height:1000 }} >
            <Switch>
              <Route path="/about" component={AboutPage} />
              <Route path="/topViewProduct" component={TopViewProduct} />

              <Route path="/view/:id" component={ViewProductPage} />

              <Route path="/delete/:id" component={DeleteProductPage} />
              <Route path="/edit/:id" component={EditProductPage} />
              <Route path="/addProduct" component={AddProductPage} />

              <Route path="/Login" component={() => <Login setUser={this.setUser} />} />
              <Route path="/Signup" component={Signup} />
              <Route path="/Logout" component={() => <Logout setUser={this.setUser} />} />
              <Route path="/success/:id" component={SuccessComponent} />
              <Route exact path="/" >
                <AllProductPage />
              </Route>
            </Switch>
          </div>
          <div class="card-footer text-muted text-center">

            2021 Copyright:
              </div>
        </Router>


      </div>
    );
  }
}

export default (App);

