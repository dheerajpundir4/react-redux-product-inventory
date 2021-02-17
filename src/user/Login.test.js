import Login from './Login'
import React from 'react';
import { mount } from '../test/enzymes';
import { shallow } from '../test/enzymes';

describe('Login', () => {
    const wrapper = shallow(<Login/>);
    const value= wrapper.find('h3').text()

  

   

    it('Page header should be login', () => {
        expect(value).toEqual('Login');
      });
})
