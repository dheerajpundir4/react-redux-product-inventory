import * as types from './actionTypes';
import ProductApi from '../data/ProductApi';
import axios from 'axios';


let currentID=100;

const URL ="http://localhost:4000/products";


const _clone=function(item){
  return JSON.parse(JSON.stringify(item));
}



export const loadProductsSuccess=(products)=>{
  return { type: types.LOAD_PRODUCTS_SUCCESS, products };
}
  
export const addProductSuccess=(product)=> {
    return { type: types.ADD_PRODUCT_SUCCESS, product: product};
  }



  export function loadProduct() {
    console.log("calling load product");
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
      currentID=currentID+1;  
      axios.post(URL,{
       id: currentID,
       productName: product.productName,
       quantity: product.quantity,
       price:product.price
       
      }).then(response=> {   
         dispatch(addProductSuccess(product))  
         window.history.back()    
     }) 

    }  
     
  
   
} 

export function deleteProduct(id){
    axios.delete(URL+"/"+id).then(function (response) {   
    }) 
    window.history.back()
}