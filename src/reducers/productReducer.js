import * as types from '../actions/actionTypes';
import initialState from './initialState';
import {addProduct} from '../actions/productActions'

export default function productReducer(state = initialState.products, action) {
  
 
    switch (action.type) {
      case types.LOAD_PRODUCTS_SUCCESS:
        return action.products;
  
      case types.ADD_PRODUCT_SUCCESS:
    
       // curd(action.product);
        return [          
          ...state,
          Object.assign({}, action.product)
        ]; 


        case types.DELETE_PRODUCT_SUCCESS:
    
          let newState = state.filter(product => product.id != action.id); // ES6 arrow fns
          window.history.back();
          return newState;

        case types.EDIT_PRODUCT_SUCCESS:
    
            let newState2 = state.map(product => {
                if(product.id!=action.id)
                return product
                return action.product
            });  // ES6 arrow fns
            window.history.back();
            return newState2;
     
  
      default:
        return state;
    }
  }
