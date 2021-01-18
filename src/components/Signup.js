import React from "react";
import { Link } from 'react-router-dom';

function Signup(){
    return (
        <>
         <form>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <input type="password" placeholder="password again" />
        <button>Sign Up</button>
        <Link to="/login">Already have an account?</Link>
      </form>
        </>
    )
}

export default Signup;