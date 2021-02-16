import NavComponent from './NavComponent'
import React from 'react';
import { mount } from '../enzyme';
import { shallow } from '../enzyme';

describe('Login', () => {
    const wrapperLogout = shallow(<NavComponent user={true}/>);
    const wrapperLogin = shallow(<NavComponent user={false}/>);
    const headLogout= wrapperLogout.find('Link')
    const headLogin= wrapperLogin.find('Link')
   
   
    const headervalueLogout = headLogout.map(name => name.text());
    const headervalueLogin = headLogin.map(name => name.text()); 

    it('When user logined, form looked logout checking', () => {
        expect(headervalueLogout[4]).toEqual('Logout');
      });

      it('add product nav checking', () => {
        expect(headervalueLogout[3]).toEqual('Add Product');
      });


    it('When user logined, form looked logout checking', () => {
        expect(headervalueLogin[4]).toEqual('SignUp');
      });

      it('add product nav checking', () => {
        expect(headervalueLogin[3]).toEqual('Login');
      });
})
