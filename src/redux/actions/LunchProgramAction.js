import axios from '../../axios.js';
import Swal from 'sweetalert2';

export const GET_ALL_LUNCH_PROGRAMS = 'GET_ALL_LUNCH_PROGRAMS';
export const ADD_LUNCH_PROGRAM_SUCCESS = 'ADD_LUNCH_PROGRAM_SUCCESS';
export const ADD_LUNCH_PROGRAM_FAILURE = 'ADD_LUNCH_PROGRAM_FAILURE';
export const UPDATE_LUNCH_PROGRAM_SUCCESS = 'UPDATE_LUNCH_PROGRAM_SUCCESS';
export const UPDATE_LUNCH_PROGRAM_FAILURE = 'UPDATE_LUNCH_PROGRAM_FAILURE';
export const DELETE_LUNCH_PROGRAM_SUCCESS = 'DELETE_LUNCH_PROGRAM_SUCCESS';
export const DELETE_LUNCH_PROGRAM_FAILURE = 'DELETE_LUNCH_PROGRAM_FAILURE';

export const getAllLunchPrograms = () => (dispatch) => {
	axios
		.get('/api/programs/')
		.then((res) => {
			dispatch({
				type: GET_ALL_LUNCH_PROGRAMS,
				payload: res.data,
			});
		})
		.catch((error) => {
			showErrorAlert('Error', error.message);
		});
};

export const addLunchProgram = (requestData) => (dispatch) => {
	axios
		.post('/api/programs/', requestData)
		.then((res) => {
			dispatch({
				type: ADD_LUNCH_PROGRAM_SUCCESS,
				payload: res.data,
			});
			showSuccessAlert('Success', 'Lunch program added successfully!');
		})
		.catch((error) => {
			dispatch({
				type: ADD_LUNCH_PROGRAM_FAILURE,
				payload: error.message,
			});
			showErrorAlert('Error', error.message);
		});
};

export const updateLunchProgram = (requestData) => (dispatch) => {
	axios
		.put(`/api/programs/${requestData._id}`, requestData)
		.then((res) => {
			dispatch({
				type: UPDATE_LUNCH_PROGRAM_SUCCESS,
				payload: res.data,
			});
			showSuccessAlert('Success', 'Lunch program updated successfully!');
		})
		.catch((error) => {
			dispatch({
				type: UPDATE_LUNCH_PROGRAM_FAILURE,
				payload: error.message,
			});
			showErrorAlert('Error', error.message);
		});
};

export const deleteLunchProgram = (lunchProgramId) => (dispatch) => {
	axios
		.delete(`/api/programs/${lunchProgramId}`)
		.then((response) => {
			if (response?.status === 200) {
				dispatch({
					type: DELETE_LUNCH_PROGRAM_SUCCESS,
					payload: lunchProgramId,
				});
				showSuccessAlert('Success', 'Lunch program deleted successfully!');
			}
		})
		.catch((error) => {
			dispatch({
				type: DELETE_LUNCH_PROGRAM_FAILURE,
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
