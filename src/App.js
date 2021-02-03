import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

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


// Using bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';



class Links extends React.Component {
  render() {
   
      return (
        <>
           <Navbar bg="light">
           
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

            <Route path="/topViewProduct" component={TopViewProduct} />
            <Route path="/addProduct" component={AddProductPage} />
            <Route path="/view/:id" component={ViewProductPage} />
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
