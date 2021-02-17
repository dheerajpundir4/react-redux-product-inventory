import {TableHead,TableBody} from '../components/ViewProduct/TableData'
import React from 'react';
import { mount } from './enzymes';
import { shallow } from './enzymes';

describe('TableHead Test', () => {

  // total th will be 6     
  const array_AllCusField= ["Product Description","Manufacturer","Quantity"]

    // total th will be 3     
    const array_NoCusField= []




    const wrapperAllCusField = shallow(<TableHead customizationCol={array_AllCusField}/>);
    const wrapperNoCusField = shallow(<TableHead customizationCol={array_NoCusField}/>);


    
    const headerAllCusField= wrapperAllCusField.find('th')
    const headerNoCusField= wrapperNoCusField.find('th')
    
  
   
  

    it('array_AllCusField', () => {
        expect(headerAllCusField.length).toEqual(6);
      });


      it('array_NoCusField', () => {
        expect(headerNoCusField.length).toEqual(3);
      });

     

   
})
