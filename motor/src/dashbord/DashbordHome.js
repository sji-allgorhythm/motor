import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider';

export const DashbordHome = () => {
    const { user } = useContext(AuthContext);
    return (
        <>
            <h3>Welcome To DashbordHome </h3>
            <h4>{user && user?.displayName}</h4>
            <h4>{user && user?.email}</h4>
        </>
    )
}
