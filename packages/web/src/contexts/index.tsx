import React from 'react';
import { Routes } from '../routes';
import { AppProvider, AuthProvider } from '@ventas/controllers/dist';

export const Providers: React.FC = () => (
    <AppProvider>
        <AuthProvider>
            <Routes />
        </AuthProvider>
    </AppProvider>
);
