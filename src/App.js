import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch, NavLink } from 'react-router-dom';
import AllProductPage from './components/AllProductPage';
import AboutPage from './components/AboutPage';
import AddProductPage from './components/AddProductPage';
import ProductDetailsPage from './components/ProductDetailsPage';


class Links extends React.Component{
    render(){
      return (
        <nav>
          
            <NavLink activeStyle={{fontWeight:"bold", color:"black" }} exact activeClassName="current" to="/">About</NavLink>&nbsp;&nbsp;&nbsp;
       
            <NavLink activeStyle={{fontWeight:"bold", color:"black"}}  activeClassName="current" to="/products">Products</NavLink>
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
              
            </Switch>
          </div>
      </Router> 
    );
  }
}