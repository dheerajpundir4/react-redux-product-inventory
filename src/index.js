import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// get all the product
import {loadProduct} from './actions/productActions';

//part of redux
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

// fist it go to action and then call reducer
store.dispatch(loadProduct());

ReactDOM.render(
  <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
);

