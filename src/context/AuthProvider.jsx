import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [ user, setUser ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ service, setService ] = useState('All'); // all services of appointment page
    const [open, setOpen] = useState(false); // show or hide modal after click "Book appointment button" of slot

    const userInfo = {
        user, loading,
        service, setService,
        open, setOpen
    }

    return (
        <AuthContext.Provider value={userInfo}>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;