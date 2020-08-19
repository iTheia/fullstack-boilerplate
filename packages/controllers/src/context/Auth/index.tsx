import React, { createContext, useState, useEffect, useContext } from 'react';
import { IAuthContext, IUser } from './types';
import { AppContext } from '../App';

export const AuthContext = createContext<IAuthContext>({
    currentUser: null,
});

export const AuthProvider: React.FC = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<IUser | false | null>(null);
    const { setIsLoading } = useContext(AppContext);

    useEffect(() => {
        setIsLoading(true);
        /* authentificar */
        setIsLoading(false);
    }, [setIsLoading]);
    return (
        <AuthContext.Provider value={{ currentUser }}>
            {children}
        </AuthContext.Provider>
    );
};
