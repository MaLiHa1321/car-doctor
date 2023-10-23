import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    
   if(loading){
    return <div className='text-center'>

        <span className="loading loading-infinity loading-lg"></span>
    </div>
   }

    if(!user?.email){
        return <Navigate to="/login"></Navigate>
    }

    return children;
};

export default PrivateRoute;