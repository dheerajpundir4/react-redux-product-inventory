
import { render } from '@testing-library/react';
import { Link, Redirect } from 'react-router-dom';

import React from 'react'




export default class Logout extends React.Component{

    constructor(props){
        super(props)

        
    }
    
    render(){
    localStorage.clear();
    this.props.setUser(null)
    return (

        <Redirect to="/" />
    );
    }
}
