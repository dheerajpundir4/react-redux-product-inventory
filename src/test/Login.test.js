import Login from '../user/Login'
import React from 'react';
import { mount } from './enzymes';
import { shallow } from './enzymes';

describe('Login', () => {
    const wrapper = shallow(<Login/>);
    const value= wrapper.find('h3').text()

  

   

    it('Page header should be login', () => {
        expect(value).toEqual('Login');
      });
})
