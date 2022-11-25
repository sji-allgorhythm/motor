import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import { SpinnerDotted } from 'spinners-react';


const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <div className='flex justify-center h-screen'>

                <SpinnerDotted size={60} thickness={100} speed={100} color="rgba(140, 3, 39, 1)"/>
            </div>
        )
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    return children;
}

export default PrivateRoute