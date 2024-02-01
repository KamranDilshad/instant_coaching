import axios from '../../axios.js';
import Swal from 'sweetalert2';

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

export const logout = () => {
	localStorage.removeItem('token');
	localStorage.removeItem('user');

	return {
		type: LOGOUT,
	};
};

export const login = (credentials, navigation) => async (dispatch) => {
	try {
		dispatch(loginRequest());

		const endpoint =
			credentials?.role === 'trainer'
				? '/api/trainers/login'
				: '/api/users/login';

		const response = await axios.post(endpoint, credentials);
		const data = response.data;

		if (response?.status === 200) {
			const userKey = credentials.role === 'trainer' ? 'trainer' : 'user';

			dispatch(loginSuccess(data[userKey]));
			localStorage.setItem('user', JSON.stringify(data[userKey]));

			localStorage.setItem('token', data.token);

			credentials?.role === 'admin'
				? navigation('/admin/app')
				: navigation('/');

			showSuccessAlert('Success', 'Login successful!');
		} else if (response?.status === 403) {
			dispatch(adminNotApproved(data.error));
			showErrorAlert('Access Denied', data.error);
		} else {
			dispatch(loginFailure(data.error));
			showErrorAlert('Error', data.error);
		}
	} catch (error) {
		const errorMessage =
			error.response?.data?.error || 'An unexpected error occurred';
		dispatch(loginFailure(errorMessage));
		showErrorAlert('Login Failed', errorMessage);
	}
};

const showSuccessAlert = (title, text) => {
	Swal.fire({
		title: title,
		text: text,
		icon: 'success',
		confirmButtonText: 'OK',
	});
};

const showErrorAlert = (title, text) => {
	Swal.fire({
		title: title,
		text: text,
		icon: 'error',
		confirmButtonText: 'OK',
	});
};
