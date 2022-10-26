import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContextProvider';
import Spinner from 'react-bootstrap/Spinner';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div
            className="d-flex justify-content-center align-items-center"
            style={{height: '600px'}}
        >
            <Spinner animation="border" variant="success" />
            <div className="text-center ms-2">Loading...</div>
        </div>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace ></Navigate>
    }

    return children;
};

export default PrivateRoute;