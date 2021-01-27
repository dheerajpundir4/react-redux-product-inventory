import axios from 'axios'

let currentID;

const _clone=function(item){
    return JSON.parse(JSON.stringify(item));
}
export default class ProductApi{

   //static getAllProduct(cb){  
   static getAllProduct(){ 

    var alpha;
        axios.get('http://localhost:4000/products')
        .then(response => {
          alpha= response.data
          console.log(alpha+"alpha")
        }
        )
        .catch(error => { throw error     
         });

       return alpha
    }

    static saveProduct(product){
        console.log("clone lenght"+_clone.item)
          //  currentID=_clone.leng+2;
           console.log("ProductSingleRow Saved");
           console.log(product.productName); 
           currentID=currentID+1;
          // product.id=currentID;
           axios.post('http://localhost:4000/products',{
            id: currentID,
            productName: product.productName,
            quantity: product.quantity,
            price:product.price
           }).then(function (response) {
            console.log(response);
          })
    }
    
}
