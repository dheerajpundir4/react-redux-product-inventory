import NavComponent from '../components/Nav/NavComponent'
import React from 'react';
import { mount } from '../enzyme';
import { shallow } from '../enzyme';

describe('Login', () => {

  const user={
    "email": "asdf@gmail1",
    "password": "$2a$10$zf0CFjUA/8NNnA7G.83MS.pR18ML5LJRXGYnB4VoV2bYNSdgrRtnC",
    "fistName": "asdf",
    "lastName": "asdf",
    "mobileNumber": "asdf",
    "location": "sadf",
    "id": 2

  }
    const wrapperLogout = shallow(<NavComponent user={user}/>);
    const wrapperLogin = shallow(<NavComponent user={null}/>);


    const headLogout= wrapperLogout.find('Link')
    const headLogin= wrapperLogin.find('Link')
   
   
    const headervalueLogout = headLogout.map(name => name.text());
    const headervalueLogin = headLogin.map(name => name.text()); 

    it('When user logined, form looked logout checking', () => {
        expect(headervalueLogout[5]).toEqual('Logout');
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
