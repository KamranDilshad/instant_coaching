// import axios from 'axios';

// const baseURL = process.env.REACT_APP_API_BASE_URL;
// console.log('🚀 ~ baseURL:', baseURL);

// const instance = axios.create({
// 	baseURL,
// 	timeout: 5000,
// 	headers: {
// 		'Content-Type': 'application/json',
// 		// You can add more headers here if needed
// 	},
// });

// export default instance;

import axios from 'axios';

const baseURL = process.env.REACT_APP_API_BASE_URL;
console.log('🚀 ~ baseURL:', baseURL);

const instance = axios.create({
	baseURL,
	timeout: 5000,
	headers: {
		'Content-Type': 'application/json',
		// You can add more headers here if needed
	},
});

// Add an interceptor for requests
instance.interceptors.request.use(
	(config) => {
		// Get the token from localStorage
		const token = localStorage.getItem('token');

		// If a token exists, add it to the Authorization header
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}

		return config;
	},
	(error) => {
		// Do something with request error
		return Promise.reject(error);
	}
);

export default instance;
