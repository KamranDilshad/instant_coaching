import React, { createContext, useEffect, useReducer } from 'react';
import jwtDecode from 'jwt-decode';
import axios from '../redux/axios.js';
import { MatxLoading } from 'app/components';

import { useDispatch } from 'react-redux';

const initialState = {
	isAuthenticated: false,
	isInitialised: false,
	user: null,
};

const isValidToken = (accessToken) => {
	if (!accessToken) {
		return false;
	}

	const decodedToken = jwtDecode(accessToken);
	const currentTime = Date.now() / 1000;
	return decodedToken.exp > currentTime;
};

const setSession = (accessToken, user) => {
	if (accessToken) {
		localStorage.setItem('accessToken', accessToken);
		localStorage.setItem('userProfile', JSON.stringify(user));
		axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
	} else {
		localStorage.removeItem('accessToken');
		localStorage.removeItem('userProfile');
		delete axios.defaults.headers.common.Authorization;
	}
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'INIT': {
			const { isAuthenticated, user } = action.payload;

			return {
				...state,
				isAuthenticated,
				isInitialised: true,
				user,
			};
		}
		case 'LOGIN': {
			const { userData: user } = action.payload;

			return {
				...state,
				isAuthenticated: true,
				user,
			};
		}
		case 'LOGOUT': {
			return {
				...state,
				isAuthenticated: false,
				user: null,
			};
		}
		case 'REGISTER': {
			const { user } = action.payload;

			return {
				...state,
				isAuthenticated: true,
				user,
			};
		}
		default: {
			return { ...state };
		}
	}
};

const AuthContext = createContext({
	...initialState,
	method: 'JWT',
	login: () => Promise.resolve(),
	logout: () => {},
	register: () => Promise.resolve(),
});

export const AuthProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const reduxDispatch = useDispatch();

	const login = async (token) => {
		const response = await axios.post('', {
			access_token: token,
		});

		const { access, user: userData } = response.data;
		setSession(access, userData);

		dispatch({
			type: 'LOGIN',
			payload: {
				userData,
			},
		});
	};

	const register = async (email, username, password) => {
		const response = await axios.post('', {
			email,
			username,
			password,
		});

		const { accessToken, user } = response.data;

		setSession(accessToken);

		dispatch({
			type: 'REGISTER',
			payload: {
				user,
			},
		});
	};

	const logout = () => {
		setSession(null, null);
		dispatch({ type: 'LOGOUT' });
	};

	useEffect(() => {
		(async () => {
			try {
				const accessToken = window.localStorage.getItem('accessToken');
				const user = JSON.parse(window.localStorage.getItem('userProfile'));
				if (accessToken && isValidToken(accessToken)) {
					setSession(accessToken, user);
					dispatch({
						type: 'INIT',
						payload: {
							isAuthenticated: true,
							user,
						},
					});
				} else {
					dispatch({
						type: 'INIT',
						payload: {
							isAuthenticated: false,
							user: null,
						},
					});
				}
			} catch (err) {
				console.error(err);
				dispatch({
					type: 'INIT',
					payload: {
						isAuthenticated: false,
						user: null,
					},
				});
			}
		})();
	}, []);

	// if (!state.isInitialised) {
	// 	return <MatxLoading />;
	// }

	return (
		<AuthContext.Provider
			value={{
				...state,
				method: 'JWT',
				login,
				logout,
				register,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
