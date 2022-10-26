import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (profileInfo) => {
        return updateProfile(auth.currentUser, profileInfo);
    }

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const providerLogIn = (provider) => {
        return signInWithPopup(auth, provider);
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {

        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser);
        });

        return () => unSubscribe();

    }, [])

    const value = { 
        user, 
        providerLogIn,
        createUser, 
        logOut,
        logIn,
        updateUserProfile,
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;