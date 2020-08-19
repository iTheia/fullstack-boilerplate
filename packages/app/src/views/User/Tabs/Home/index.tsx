import React from 'react';
import { View, Text, Button } from 'react-native';
import { UserNavProps } from '../../../../navigation/User/types';

export const HomeTab = ({ navigation, route }: UserNavProps<'Home'>) => {
	return (
		<View>
			<Button
				title="Ho favs"
				onPress={() => {
					navigation.navigate('Favorites');
				}}
			/>
			<Text>Home Screen</Text>
		</View>
	);
};
