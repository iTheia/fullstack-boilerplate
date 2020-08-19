import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/core';

export type UserParamList = {
	Home: undefined;
	Profile: undefined;
	Search: undefined;
	Favorites: undefined;
};

export type UserNavProps<T extends keyof UserParamList> = {
	navigation: StackNavigationProp<UserParamList, T>;
	route: RouteProp<UserParamList, T>;
};
