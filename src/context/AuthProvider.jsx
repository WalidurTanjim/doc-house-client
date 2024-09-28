import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [ user, setUser ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    

    return (
        <div>
            
        </div>
    );
};

export default AuthProvider;