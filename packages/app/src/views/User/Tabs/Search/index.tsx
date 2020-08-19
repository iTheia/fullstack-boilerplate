import React from 'react';
import { View, Text } from 'react-native';
import { UserNavProps } from '../../../../navigation/User/types';

export const SearchTab = ({ route, navigation }: UserNavProps<'Search'>) => {
	return (
		<View>
			<Text>Search</Text>
		</View>
	);
};
