import AddProductForm from './AddProductForm'
import React from 'react';
import { mount } from '../../enzyme';
import { shallow } from '../../enzyme';

describe('Add New Product Form', () => {
    const wrapper = shallow(<AddProductForm/>);
    const value= wrapper.find('h3').text()

  


    it('Add New Product form header check', () => {
        expect(value).toEqual('Add New Product');
      });
})
