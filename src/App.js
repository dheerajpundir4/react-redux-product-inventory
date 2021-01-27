import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// Using component
import AllProductPage from './components/displayProduct/ProductTable';
import AboutPage from './components/AboutPage';
import AddProductPage from './components/curd/AddProductPage';
import DisplayProductDetail from './components/curd/DisplayProductDetail';
import Login from './components/Login';
import Signup from './components/Signup';
import DeleteProductPage from './components/curd/DeleteProductPage';
import EditProductPage from './components/curd/EditProductPage';


// Using bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';



class Links extends React.Component {
  render() {
    return (
      <>
        <Navbar bg="light" expand="lg">
          <Nav className="mr-auto">
            <Nav.Link href="/">About</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/Login">Login</Nav.Link>
            <Nav.Link href="/Signup">SignUp</Nav.Link>
          </Nav>
        </Navbar>
      </>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Links />
          <Switch>
            <Route exact path="/products">
              <AllProductPage />
            </Route>
            <Route path="/addProduct" component={AddProductPage} />
            <Route path="/view/:id" component={DisplayProductDetail} />
            <Route path="/delete/:id" component={DeleteProductPage} />
            <Route path="/edit/:id" component={EditProductPage} />
            <Route exact path="/">
              <AboutPage />
            </Route>
            <Route path="/Login" component={Login} />
            <Route path="/Signup" component={Signup} />
          </Switch>
        </div>
      </Router>
    );
  }
}
