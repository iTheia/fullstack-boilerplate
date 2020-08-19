import React from 'react';
import { View, Text } from 'react-native';
import { UserNavProps } from '../../../../navigation/User/types';

export const ProfileTab = ({ navigation, route }: UserNavProps<'Profile'>) => {
	return (
		<View>
			<Text>Index</Text>
		</View>
	);
};
