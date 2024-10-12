import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    if(loading){
        return (
            <div className='w-full py-20 text-center'>
                <h1 className='text-2xl font-medium text-center text-slate-800'>Loading...</h1>
            </div>
        )
    }

    if(user){
        return children;
    }
    
    return <Navigate to="/signIn" state={{ location}} replace={true}></Navigate>
};

export default PrivateRoute;