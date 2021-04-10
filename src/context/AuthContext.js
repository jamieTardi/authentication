import React, { useContext, useState } from 'react';
import { auth } from '../firebase';

const AuthContext = React.createContext();

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider() {
	const [currentUser, setCurrentUser] = useState();

	function login(email, password) {
		return auth.createUserWithEmailAndPassword(email, password);
	}

	//setting the current user
	auth.onAuthStateChanged((user) => {
		setCurrentUser(user);
	});
	const value = {
		currentUser,
	};
	return <AuthContext.Provider>{children}</AuthContext.Provider>;
}
