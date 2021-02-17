import Signup from './Signup'
import React from 'react';
import { mount } from '../test/enzyme';
import { shallow } from '../test/enzyme';

describe('Signup', () => {
    const wrapper = shallow(<Signup/>);
    const value= wrapper.find('h3').text()

  



    it('Page header should be login', () => {
        expect(value).toEqual('SignUp');
      });
})
