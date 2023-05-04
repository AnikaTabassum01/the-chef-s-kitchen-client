import React, { useContext } from 'react';
import Loader from '../Pages/Shared/Loader/Loader';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const PrivateRoute = ({children}) => {
   
    const {user, loading} = useContext(AuthContext)
    const location = useLocation();

    if(loading){
       return <Loader></Loader>
    }
    
    if(user){
        return children;
    } else{
        return <Navigate to='/login' state={{from : location}} replace></Navigate>
    }

};

        export default PrivateRoute;