import axios from '../../axios.js';
import Swal from 'sweetalert2';

export const GET_REGISTER_COACH = 'GET_REGISTER_COACH';
export const REGISTER_COACH_SUCCESS = 'REGISTER_COACH_SUCCESS';
export const REGISTER_COACH_FAILURE = 'REGISTER_COACH_FAILURE';
export const UPDATE_REGISTER_COACH_SUCCESS = 'UPDATE_REGISTER_COACH_SUCCESS';
export const UPDATE_REGISTER_COACH_FAILURE = 'UPDATE_REGISTER_COACH_FAILURE';
export const DELETE_REGISTER_COACH_SUCCESS = 'DELETE_REGISTER_COACH_SUCCESS';
export const DELETE_REGISTER_COACH_FAILURE = 'DELETE_REGISTER_COACH_FAILURE';

export const getAllCoach = () => (dispatch) => {
	axios.get('api/trainers/all').then((res) => {
		dispatch({
			type: GET_REGISTER_COACH,
			payload: res.data,
		});
	});
};

export const registerCoach = (requestData, navigation) => (dispatch) => {
	axios
		.post('api/trainers/register', requestData)
		.then((res) => {
			dispatch({
				type: REGISTER_COACH_SUCCESS,
				payload: res.data,
			});
			navigation('/login');
			showSuccessAlert('Success', 'Coach registered successfully!');
		})
		.catch((error) => {
			dispatch({
				type: REGISTER_COACH_FAILURE,
				payload: error.message,
			});
			showErrorAlert('Error', error.message);
		});
};

export const updateCoach = (requestData) => (dispatch) => {
	axios
		.patch(`api/trainers/${requestData._id}`, requestData)
		.then((res) => {
			dispatch({
				type: UPDATE_REGISTER_COACH_SUCCESS,
				payload: res.data,
			});
			showSuccessAlert('Success', 'Coach updated successfully!');
		})
		.catch((error) => {
			dispatch({
				type: UPDATE_REGISTER_COACH_FAILURE,
				payload: error.message,
			});
			showErrorAlert('Error', error.message);
		});
};

export const deleteCoach = (coachRequestId) => (dispatch) => {
	axios
		.delete(`api/trainers/${coachRequestId}`)
		.then(() => {
			dispatch({
				type: DELETE_REGISTER_COACH_SUCCESS,
				payload: coachRequestId,
			});
			showSuccessAlert('Success', 'Coach deleted successfully!');
		})
		.catch((error) => {
			dispatch({
				type: DELETE_REGISTER_COACH_FAILURE,
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
