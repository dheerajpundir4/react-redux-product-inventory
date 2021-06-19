import Profile from '../components/Profile'
import React from 'react';
import {shallow} from './enzymes';

describe('Profile Page Test', () => {

    const user = {
        "email": "dhee@gmail.com",
        "password": "XXX",
        "firstName": "Dheeraj",
        "lastName": "Pundir",
        "mobileNumber": "1",
        "location": "1",
        "id": 3
    }


    const wrapperProfile = shallow(<Profile user={user}/>);


    const allTableData = wrapperProfile.find('td')

    const allTableDataValue = allTableData.map(name => name.text());

    it('Fist table data is id header', () => {
        expect(allTableDataValue[0]).toEqual("ID#");
    });

    it('Fist table data is id value', () => {
        expect(allTableDataValue[1]).toEqual("3");
    });


    it('email header', () => {
        expect(allTableDataValue[2]).toEqual("Email");
    });

    it('email value', () => {
        expect(allTableDataValue[3]).toEqual("dhee@gmail.com");
    });


    it('Location header', () => {
        expect(allTableDataValue[10]).toEqual("Location");
    });

    it('Location value', () => {
        expect(allTableDataValue[11]).toEqual("1");
    });


})
