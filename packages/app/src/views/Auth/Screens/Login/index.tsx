import React from 'react';
import { Text, View, Button } from 'react-native';
import { AuthNavProps } from '../../../../navigation/Auth/types';

export const LoginScreen = ({ navigation, route }: AuthNavProps<'Login'>) => {
    return (
        <View>
            <Text>{route.name}</Text>
            <Button
                title="go to register"
                onPress={() => navigation.navigate('Register')}
            />
        </View>
    );
};
