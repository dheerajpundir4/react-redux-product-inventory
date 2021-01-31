
import { Link, Redirect } from 'react-router-dom';




export default function Logout(){
    localStorage.removeItem('userId')
    localStorage.clear();
    return <Redirect to="/products" />;
}
