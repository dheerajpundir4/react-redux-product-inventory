import Signup from '../user/Signup'
import React from 'react';
import { mount } from './enzymes';
import { shallow } from './enzymes';

describe('Signup', () => {
    const wrapper = shallow(<Signup/>);
    const value= wrapper.find('h3').text()

  



    it('Page header should be login', () => {
        expect(value).toEqual('SignUp');
      });
})
