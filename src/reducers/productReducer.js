import * as types from '../actions/actionTypes';
import initialState from './initialState';
import {addProduct} from '../actions/productActions'

export default function productReducer(state = initialState.products, action) {
  
 
    switch (action.type) {
      case types.LOAD_PRODUCTS_SUCCESS:
        return action.products;
  
      case types.ADD_PRODUCT_SUCCESS:
    
       // addProduct(action.product);       
        return [          
          ...state,
          Object.assign({}, action.product)
        ]; 
     
  
      default:
        return state;
    }
  }