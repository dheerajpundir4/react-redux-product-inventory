import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// Using component
import AllProductPage from './components/pages/AllProductListPage';
import AboutPage from './components/pages/AboutPage';
import AddProductPage from './components/pages/AddProductPage';
import DisplayProductDetail from './components/pages/ViewProductDescriptionPage';
import Login from './components/Login';
import Signup from './components/Signup';
import Logout from './components/Logout';
import DeleteProductPage from './components/oper/DeleteProductForm';
import EditProductPage from './components/pages/EditProductPage';


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
              
              { (localStorage.getItem('userId')==null)?
                (
                  <>
                  <Nav.Link href="/Login">Login</Nav.Link>
                  <Nav.Link href="/Signup">SignUp</Nav.Link>
                  </>
                ):(
                  <>
                    <Nav.Link href="/Logout">Logout</Nav.Link>
                  </>

                )
                
              }
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
            <Route path="/Logout" component={Logout} />
          </Switch>
        </div>
      </Router>
    );
  }
}
