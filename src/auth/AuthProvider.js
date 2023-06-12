import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = () => {
        setIsAuthenticated(true);
    };

    const logout = () => {
        setIsAuthenticated(false);
    };

    const authData = {
        isAuthenticated: isAuthenticated,
        login: login,
        logout: logout,
    };

    return <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };

