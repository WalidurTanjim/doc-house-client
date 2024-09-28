import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [ user, setUser ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ service, setService ] = useState('All');

    const userInfo = {
        user, loading,
        service, setService
    }

    return (
        <AuthContext.Provider value={userInfo}>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;