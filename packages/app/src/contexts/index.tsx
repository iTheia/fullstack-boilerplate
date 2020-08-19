import React from 'react';
import { Navigator } from '../navigation';
import { AppProvider, AuthProvider } from '@ventas/controllers/dist';

export const Providers: React.FC = () => (
    <AppProvider>
        <AuthProvider>
            <Navigator />
        </AuthProvider>
    </AppProvider>
);
