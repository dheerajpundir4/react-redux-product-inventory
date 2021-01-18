import React, { useState } from "react";
import { Link, Redirect  } from 'react-router-dom';
import axios from 'axios';

function Login(){

    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");


    console.log("hello");
    function postLogin() {
            console.log("inside the post method");
        axios.get('http://localhost:4000/login').then(result => {
         if (result.status === 200) {
       // setAuthTokens(result.data);
       console.log("hello dheeraj pundir")
        setLoggedIn(true);
      } else {
          console.log("hello pundir dheeraj");
        setIsError(true);
      }
    }).catch(e => {
        console.log("where is dheeraj");
      setIsError(true);
    });

    }


    if (isLoggedIn) {
        return <Redirect to="/" />;
      }

    return(
        <>
        { isError &&<p>username and passwork is incorrect</p> }
            <form>
            
            <input 
                type="userName" 
                value={userName}
                onChange={e => {
                    setUserName(e.target.value);
                  }}  
                placeholder="email" />
            <input 
                type="password"
                value="password"
                onChange={e => {
                    setPassword(e.target.value);
                  }}
                placeholder="password" />
                
            </form>
            <button onClick={postLogin}>Sign In</button>
            <Link to="/Signup">Don't have an account?</Link>
        </>
    )
}

export default Login;