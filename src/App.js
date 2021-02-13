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
            localStorage.setItem("isLogin","true")
        }
      },
      err => {
       
        console.log("--ERROR--")
        localStorage.setItem("isLogin","false")
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
      <Container fluid="xl">
        <Container>

         
        </Container>

        <Container>


          <Router history={history}>
          <NavComponent user={this.state.user} />
            <Switch>
           
                      
              <Route path="/about" component={AboutPage} />
              <Route path="/topViewProduct" component={TopViewProduct} />
            
              <Route path="/view/:id" component={ViewProductPage} />
                 
              <Route path="/delete/:id" component={DeleteProductPage} />
              <Route path="/edit/:id" component={EditProductPage} />
              <Route path="/addProduct" component={AddProductPage} />
             
              <Route path="/Login" component={() => <Login setUser={this.setUser} />} />
              <Route path="/Signup" component={Signup} />
              <Route path="/Logout" component={Logout} />
              <Route path="/success/:id" component={SuccessComponent} />
              <Route exact path="/" >
                <AllProductPage/>
              </Route>
            </Switch>
          </Router>
        </Container>
      </Container>
    );
  }
}

export default (App);

