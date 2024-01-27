import axios from '../../axios.js';
import Swal from 'sweetalert2';

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

export const login = (credentials) => async (dispatch) => {
  // dispatch(loginRequest());

  // try {
  // 	const response = await axios.post('/api/user/login', {
  // 		access_token: token,
  // 	});

  // 	const { access, user: userData } = response.data;
  // 	setSession(access, userData);

  // 	dispatch(loginSuccess(userData));
  // } catch (error) {
  // 	dispatch(loginFailure(error.message));
  // }

  // try {
  // 	dispatch(loginRequest());

  // 	// Make an API request to authenticate user
  // 	const response = await fetch('/api/users/login', {
  // 		method: 'POST',
  // 		headers: {
  // 			'Content-Type': 'application/json',
  // 		},
  // 		body: JSON.stringify(credentials),
  // 	});

  // 	const data = await response.json();

  // 	if (response.ok) {
  // 		dispatch(loginSuccess(data.user));
  // 		// Save JWT token in localStorage or cookies
  // 		localStorage.setItem('token', data.token);
  // 		localStorage.setItem('user', data.user);
  // 	} else {
  // 		dispatch(loginFailure(data.error));
  // 	}
  // } catch (error) {
  // 	dispatch(loginFailure('An error occurred'));
  // }

  try {
    dispatch(loginRequest());

    // Make an API request to authenticate user using Axios
    const endpoint = credentials.role === 'trainer' ? '/api/trainers/login' : '/api/users/login';

    // Make an API request to authenticate user using Axios
    const response = await axios.post(endpoint, credentials);

    console.log(response, "Successfully logged in")
    const data = response.data;

    if (response.status === 200) {
      dispatch(loginSuccess(data.user));
      // Save JWT token in localStorage or cookies
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
    } else {
      dispatch(loginFailure(data.error));
    }
  } catch (error) {
    const errorMessage = error.response?.data?.error || 'An error occurred';
    dispatch(loginFailure(errorMessage));
    Swal.fire({
      title: 'Error!',
      text: errorMessage,
      icon: 'error',
      confirmButtonText: 'OK'
    });

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
