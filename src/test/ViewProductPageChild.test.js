import ViewProductPageChild from '../components/ViewProduct/ViewProductPageChild'
import React from 'react';
import { mount } from './enzymes';
import { shallow } from './enzymes';

describe('ViewProductPageChild', () => {

  const product= [
    {
      "id": 1,
      "productName": "Moto G5",
      "productDescription": "Moto G5 Product Description",
      "manufacturer": "India",
      "quantity": 2,
      "price": 13000,
      "views": 126
    }]

    const wrapper = shallow(<ViewProductPageChild product={product}/>);
    const value= wrapper.find('h3').text()  
  

   

    it('View Product Page Header Check', () => {
        expect(value).toEqual('Product Description');
      });
})
