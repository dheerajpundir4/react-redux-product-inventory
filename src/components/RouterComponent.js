import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Using component
import AllProductPage from '../pages/AllProduct/AllProductListPage';
import AboutPage from '../pages/AboutPage';

import AddProductPage from '../pages/AddProductPage';
import ViewProductPage from '../pages/ViewProductPage';
import TopViewProduct from '../pages/TopViewProduct'
import Login from '../user/Login';
import Signup from '../user/Signup';
import Logout from '../user/Logout';
import DeleteProductPage from '../opertion/DeleteProductForm';
import EditProductPage from '../pages/EditProductPage';

import SuccessComponent from './SuccessComponent'

export default class RouterComponent extends React.Component {

    render() {
        return (
            <>
                <Router>
                    <Switch>
                        <Route path="/products" component={()=>{<AllProductPage/>}} />
                        <Route path="/about" component={AboutPage} />
                        <Route path="/topViewProduct" component={TopViewProduct} />
                        <Route path="/addProduct" component={AddProductPage} />
                        <Route path="/view/:id" component={ViewProductPage} />
                        <Route path="/delete/:id" component={DeleteProductPage} />
                        <Route path="/edit/:id" component={EditProductPage} />
                        <Route exact path="/">
                            <AllProductPage />
                        </Route>
                        <Route path="/Login" component={Login} />
                        <Route path="/Signup" component={Signup} />
                        <Route path="/Logout" component={Logout} />
                        <Route path="/success/:id" component={SuccessComponent} />
                    </Switch>
                </Router>
            </>
        )
    }
}