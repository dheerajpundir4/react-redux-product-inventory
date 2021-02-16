import Signup from './Signup'
import React from 'react';
import { mount } from '../../enzyme';
import { shallow } from '../../enzyme';

describe('Signup', () => {
    const wrapper = shallow(<Signup/>);
    const value= wrapper.find('h3').text()

  

    console.log(value)

    it('Page header should be login', () => {
        expect(value).toEqual('SignUp');
      });
})
