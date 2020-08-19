import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeTab } from '../../views/User/Tabs/Home';
import { FavoritesTab } from '../../views/User/Tabs/Favorites';
import { ProfileTab } from '../../views/User/Tabs/Profile';
import { SearchTab } from '../../views/User/Tabs/Search';

const { Navigator, Screen } = createBottomTabNavigator();

export const UserNavigation: React.FC = () => {
	return (
		<NavigationContainer>
			<Navigator screenOptions={{}}>
				<Screen name="Home" component={HomeTab} />
				<Screen name="Favorites" component={FavoritesTab} />
				<Screen name="Profile" component={ProfileTab} />
				<Screen name="Search" component={SearchTab} />
			</Navigator>
		</NavigationContainer>
	);
};
