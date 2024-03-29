import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// get all the product
import {loadProduct} from './store/actions/productActions';

//It is used to call server directly
import axios from 'axios';
//part of redux
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

console.log("We are in index page")

axios.defaults.baseURL='http://localhost:4000/';

console.log("loadProduct")

console.log(loadProduct())
// fist it go to action and then call reducer


  store.dispatch(loadProduct()); 




ReactDOM.render(
  <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
);

