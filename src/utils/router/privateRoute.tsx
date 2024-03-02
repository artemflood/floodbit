import React from 'react';
import {Navigate, Outlet} from "react-router-dom";
import {useAuth} from "../hook";

const auth = true
const PrivateRoute = () => {
    const auth = useAuth()
    return (
        auth ? <Outlet/> : <Navigate to='login' />
    );
};

export default PrivateRoute;