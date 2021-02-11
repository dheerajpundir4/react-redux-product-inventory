import * as types from './actionTypes';
import axios from 'axios';


let currentID=100;

const URL ="http://localhost:4000/products";

export const loadProductsSuccess=(products)=>{
  return { type: types.LOAD_PRODUCTS_SUCCESS, products };
}
  
export const addProductSuccess=(product)=> {
    return { type: types.ADD_PRODUCT_SUCCESS, product: product};
  }

  export const editProductSuccess=(product)=> {
    return { type: types.EDIT_PRODUCT_SUCCESS, product: product};
  }

  export const deleteProductSuccess=(id)=> {
    return { type: types.DELETE_PRODUCT_SUCCESS, id: id};
  }



  export function loadProduct() {
    return function(dispatch) {

        axios.get(URL)
        .then(response => {
          dispatch(loadProductsSuccess(response.data));
          return response.data;
        }
        )
        .catch(error => { throw error     
         });  
   };
  }

  export function loadFilterProduct(productName) {
    return function(dispatch) {

        axios.get(URL)
        .then(response => {
          dispatch(loadProductsSuccess(response.data));
          return response.data;
        }
        )
        .catch(error => { throw error     
         });  
   };
  }


  export function addProduct(product){      
    return dispatch=>{   
      axios.post(URL,product).then(response=> {   
         dispatch(addProductSuccess(product))  
        window.history.back()    
     }) 

    }   
} 

export function editProduct(product){ 
  return dispatch=>{   
    axios.put(URL+"/"+product.id,product).then(response=> {   
       dispatch(editProductSuccess(product))  
       window.history.back()    
   }) 

  }   
} 

export function deleteProduct(id){
  return dispatch=>{   
    
    axios.delete(URL+"/"+id).then(response => {   
      dispatch(deleteProductSuccess(id))  
      window.history.back()
    }) 
  
}
}