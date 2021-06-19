import EditProductForm from '../components/EditProduct/EditProductForm'
import React from 'react';
import {shallow} from './enzymes';

describe('EditProductForm', () => {


    const product = [
        {
            "id": 1,
            "productName": "Moto G5",
            "productDescription": "Moto G5 Product Description",
            "manufacturer": "India",
            "quantity": 2,
            "price": 13000,
            "views": 126
        }]


    const wrapper = shallow(<EditProductForm product={product}/>);
    const value = wrapper.find('h3').text()


    it('Page header should be Edit form header', () => {
        expect(value).toEqual('Edit Product Page');
    });
})
