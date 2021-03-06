import {Navigate} from 'react-router-dom';
import *as authService from '../../service/authService';
const Logout = ({
    onLogout
})=>{
    onLogout();
    authService.logout()
    return <Navigate to ="/login" replace={true}/>
}

export  default Logout;
