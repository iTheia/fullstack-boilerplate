import React, { useEffect, useContext } from 'react';
import { AuthNavigation } from './Auth';
import { UserNavigation } from './User';
import { FullsizeLoader } from '../components/FullSizeLoader/FullSizeLoader';
import { AuthContext } from '../contexts/Auth';

export const Navigator: React.FC = () => {
	const { currentUser } = useContext(AuthContext);
	useEffect(() => {
		console.log(currentUser);
	}, [currentUser]);

	if (currentUser === false) return <AuthNavigation></AuthNavigation>;
	if (currentUser) return <UserNavigation></UserNavigation>;
	else return <FullsizeLoader></FullsizeLoader>;
};
