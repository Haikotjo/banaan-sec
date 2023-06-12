import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthProvider';

function PrivateRoute({ path, element }) {
    const { isAuthenticated } = useContext(AuthContext);

    return isAuthenticated ? (
        <Route path={path} element={element} />
    ) : (
        <Navigate to="/signin" replace />
    );
}

export default PrivateRoute;