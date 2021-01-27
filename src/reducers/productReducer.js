import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function productReducer(state = initialState.products, action) {

  switch (action.type) {

    // via productAction we got all the products
    case types.LOAD_PRODUCTS_SUCCESS:
      return action.products;

    case types.ADD_PRODUCT_SUCCESS:     
      return [
        ...state,
        Object.assign({}, action.product)
      ];


    case types.DELETE_PRODUCT_SUCCESS:
      let newStateDelete = state.filter(product => product.id != action.id); // ES6 arrow funciton     
      return newStateDelete;

    case types.EDIT_PRODUCT_SUCCESS:

      let newStateEdit = state.map(product => {
        if (product.id != action.id)
          return product
        return action.product
      });  // ES6 arrow fns     
      return newStateEdit;


    default:
      return state;
  }
}
