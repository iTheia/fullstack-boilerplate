import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../../views/Auth/Screens/Login';
import { AuthParamList } from './types';
import { RegisterScreen } from '../../views/Auth/Screens/Register';

const { Navigator, Screen } = createStackNavigator<AuthParamList>();

interface AuthNavigation {}

export const AuthNavigation: React.FC<AuthNavigation> = ({}) => {
	return (
		<NavigationContainer>
			<Navigator>
				<Screen name="Login" component={LoginScreen} />
				<Screen name="Register" component={RegisterScreen} />
			</Navigator>
		</NavigationContainer>
	);
};
