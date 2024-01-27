import axios from '../../axios.js';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const ADMIN_APPROVED = 'ADMIN_APPROVED';
export const LOGOUT = 'LOGOUT';

export const loginRequest = () => ({
	type: LOGIN_REQUEST,
});

export const loginSuccess = (userData) => ({
	type: LOGIN_SUCCESS,
	payload: userData,
});

export const adminNotApproved = (error) => ({
	type: ADMIN_APPROVED,
	payload: error,
});

export const loginFailure = (error) => ({
	type: LOGIN_FAILURE,
	payload: error,
});

export const logout = () => ({
	type: LOGOUT,
});

export const login = (credentials) => async (dispatch) => {
	try {
		dispatch(loginRequest());

		const endpoint =
			credentials.role === 'trainer'
				? '/api/trainers/login'
				: '/api/users/login';

		const response = await axios.post(endpoint, credentials);
		const data = response.data;

		if (response.status === 200) {
			dispatch(loginSuccess(data.user));
			localStorage.setItem('token', data.token);
			localStorage.setItem('user', JSON.stringify(data.user));
		} else if (response.status === 403) {
			dispatch(adminNotApproved(data.error));
		} else {
			dispatch(loginFailure(data.error));
		}
	} catch (error) {
		dispatch(loginFailure('User Not approved'));
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
