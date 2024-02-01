import axios from '../../axios.js';
import Swal from 'sweetalert2';

export const GET_REGISTER_TRAINEE = 'GET_REGISTER_TRAINEE';
export const REGISTER_TRAINEE_SUCCESS = 'REGISTER_TRAINEE_SUCCESS';
export const REGISTER_TRAINEE_FAILURE = 'REGISTER_TRAINEE_FAILURE';
export const UPDATE_REGISTER_TRAINEE_SUCCESS =
	'UPDATE_REGISTER_TRAINEE_SUCCESS';
export const UPDATE_REGISTER_TRAINEE_FAILURE =
	'UPDATE_REGISTER_TRAINEE_FAILURE';
export const DELETE_REGISTER_TRAINEE_SUCCESS =
	'DELETE_REGISTER_TRAINEE_SUCCESS';
export const DELETE_REGISTER_TRAINEE_FAILURE =
	'DELETE_REGISTER_TRAINEE_FAILURE';

export const getAllTrainee = () => (dispatch) => {
	axios.get('/api/users/').then((res) => {
		dispatch({
			type: GET_REGISTER_TRAINEE,
			payload: res.data,
		});
	});
};

export const registerTrainee = (requestData, navigation) => (dispatch) => {
	axios
		.post('/api/users/register', requestData)
		.then((res) => {
			dispatch({
				type: REGISTER_TRAINEE_SUCCESS,
				payload: res.data,
			});

			showSuccessAlert('Success', 'Trainee registered successfully!');
			navigation('/login');
		})
		.catch((error) => {
			dispatch({
				type: REGISTER_TRAINEE_FAILURE,
				payload: error.message,
			});
			showErrorAlert('Error', error.message);
		});
};

export const updateTrainee = (requestData) => (dispatch) => {
	axios
		.patch(`/api/users/${requestData._id}`, requestData)
		.then((res) => {
			dispatch({
				type: UPDATE_REGISTER_TRAINEE_SUCCESS,
				payload: res.data,
			});
			showSuccessAlert('Success', 'Trainee updated successfully!');
		})
		.catch((error) => {
			dispatch({
				type: UPDATE_REGISTER_TRAINEE_FAILURE,
				payload: error.message,
			});
			showErrorAlert('Error', error.message);
		});
};

export const deleteTrainee = (traineeId) => (dispatch) => {
	axios
		.delete(`/api/users/${traineeId}/`)
		.then(() => {
			dispatch({
				type: DELETE_REGISTER_TRAINEE_SUCCESS,
				payload: traineeId,
			});
			showSuccessAlert('Success', 'Trainee deleted successfully!');
		})
		.catch((error) => {
			dispatch({
				type: DELETE_REGISTER_TRAINEE_FAILURE,
				payload: error.message,
			});
			showErrorAlert('Error', error.message);
		});
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
