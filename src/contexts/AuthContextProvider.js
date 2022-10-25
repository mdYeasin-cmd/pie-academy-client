import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState('Forkan Uddin');

    const value = { user }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;