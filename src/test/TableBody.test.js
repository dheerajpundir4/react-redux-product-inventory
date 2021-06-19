import {TableBody} from '../components/ViewProduct/TableData'
import React from 'react';
import {shallow} from './enzymes';

describe('Table Body Test', () => {

    // total th will be 6
    const array_AllCusField = ["Product Description", "Manufacturer", "Quantity"]

    // total th will be 4     
    const array_One_CusField = ["Product Description"]

    const product = {
        id: 1,
        productName: "Moto G5",
        productDescription: "Moto G5 Product Description",
        manufacturer: "India",
        quantity: 2,
        price: 13000
    }


    const wrapperAllCusField = shallow(<TableBody customizationCol={array_AllCusField} product={product}/>);
    const wrapperOneCusField = shallow(<TableBody customizationCol={array_One_CusField} product={product}/>);


    const headerAllCusField = wrapperAllCusField.find('td')

    const valueAllCusField = headerAllCusField.map(name => name.text());

    const header_OneCusField = wrapperOneCusField.find('td')

    const value_OneCusField = header_OneCusField.map(name => name.text());


    it('Customizable all Field Inclued', () => {
        expect(headerAllCusField.length).toEqual(5);
    });


    it('Customizaion 1 field selected', () => {
        expect(header_OneCusField.length).toEqual(3);
    });


    it('Customizable all Field search 3rd column value that is Price', () => {
        expect(valueAllCusField[2]).toEqual("13000");
    });

    it('Customizable all Field search 4th column value that is quantity', () => {
        expect(valueAllCusField[3]).toEqual("2");
    });

    it('Customizaion 1 field selected search 1st column value that is product name', () => {
        expect(value_OneCusField[0]).toEqual("Moto G5");
    });


})
