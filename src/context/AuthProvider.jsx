import { createUserWithEmailAndPassword, deleteUser, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateEmail, updatePassword, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import appAuth from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = appAuth;

const AuthProvider = ({ children }) => {
    const [ user, setUser ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ service, setService ] = useState('All'); // all services of appointment page
    const [ open, setOpen ] = useState(false); // show or hide modal after click "Book appointment button" of slot
    const [ selectedSlot, setSelectedSlot ] = useState(null);
    const [ selectedOptions, setSelectedOptions ] = useState([]);
    const [ appointmentDate, setAppointmentDate ] = useState('');

    // createUser
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // updateUserProfile
    const updateUserProfile = (user, username) => {
        return updateProfile(user, {
            displayName: username
        })
    }

    // updateUserProfileImage
    const updateUserProfileImage = (user, image) => {
        return updateProfile(user, {
            photoURL: image
        })
    }

    // emailVerification
    const emailVerification = user => {
        return sendEmailVerification(user);
    }

    // signInUser
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // updateUserEmail
    const updateUserEmail = (user, email) => {
        return updateEmail(user, email);
    }

    // updateUserPassword
    const updateUserPassword = (user, newPassword) => {
        return updatePassword(user, newPassword);
    }

    // resetPassword
    const resetPassword = email => {
        return sendPasswordResetEmail(auth, email);
    }

    // userDelete
    const userDelete = user => {
        return deleteUser(user);
    }

    // logOut
    const logOut = () => {
        return signOut(auth);
    }


    // observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            console.log(currentUser);
        });

        return () => {
            unsubscribe();
        }
    }, []);

    const userInfo = {
        user, loading,
        service, setService,
        open, setOpen,
        selectedSlot, setSelectedSlot,
        selectedOptions, setSelectedOptions,
        appointmentDate, setAppointmentDate,
        createUser,
        updateUserProfile,
        updateUserProfileImage,
        emailVerification,
        signInUser,
        updateUserEmail,
        updateUserPassword,
        resetPassword,
        userDelete,
        logOut
    }

    return (
        <AuthContext.Provider value={userInfo}>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;