import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch, NavLink } from 'react-router-dom';
import AllProductPage from './components/displayProduct/AllProductPage';
import AboutPage from './components/AboutPage';
import AddProductPage from './components/addProduct/AddProductPage';
import ProductDetailsPage from './components/ProductDetailsPage';
import Login from './components/Login';
import Signup from './components/Signup';


class Links extends React.Component{
    render(){
      return (
        <nav>          
            <NavLink activeStyle={{fontWeight:"bold", color:"black" }} exact activeClassName="current" to="/">About</NavLink>&nbsp;&nbsp;&nbsp;
       
            <NavLink activeStyle={{fontWeight:"bold", color:"black"}}  activeClassName="current" to="/products">Products</NavLink>&nbsp;&nbsp;&nbsp;
            <NavLink activeStyle={{fontWeight:"bold", color:"black" }} exact activeClassName="current" to="/Login">Login</NavLink>&nbsp;&nbsp;&nbsp;
            <NavLink activeStyle={{fontWeight:"bold", color:"black" }} exact activeClassName="current" to="/Signup">Signup</NavLink>&nbsp;&nbsp;&nbsp;
         </nav> 
      );
    }
}

export default class App extends React.Component{
  render(){
    return (
       <Router>
         <div>
            <Links/>
            <Switch>
            <Route exact path="/products">
                <AllProductPage/>
              </Route>
              <Route path="/addProduct" component={AddProductPage} />
              <Route path="/products/:id" component={ProductDetailsPage} />
              <Route exact path="/">
                <AboutPage/>
              </Route>
              <Route path="/Login" component={Login} />
              <Route path="/Signup" component={Signup} />
            </Switch>
          </div>
      </Router> 
    );
  }
}
