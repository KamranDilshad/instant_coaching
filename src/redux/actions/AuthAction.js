import axios from '../../axios.js';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

export const loginRequest = () => ({
	type: LOGIN_REQUEST,
});

export const loginSuccess = (userData) => ({
	type: LOGIN_SUCCESS,
	payload: userData,
});

export const loginFailure = (error) => ({
	type: LOGIN_FAILURE,
	payload: error,
});

export const logout = () => ({
	type: LOGOUT,
});

export const login = (token) => async (dispatch) => {
	dispatch(loginRequest());

	try {
		const response = await axios.post('', {
			access_token: token,
		});

		const { access, user: userData } = response.data;
		setSession(access, userData);

		dispatch(loginSuccess(userData));
	} catch (error) {
		dispatch(loginFailure(error.message));
	}
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
