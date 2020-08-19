import React from 'react';
import { View, Text } from 'react-native';
import { AuthNavProps } from '../../../../navigation/Auth/types';

export const RegisterScreen = ({
	navigation,
	route,
}: AuthNavProps<'Register'>) => {
	return (
		<View>
			<Text>Register</Text>
		</View>
	);
};
