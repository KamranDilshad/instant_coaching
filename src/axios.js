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

export default instance;
