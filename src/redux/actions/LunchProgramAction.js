import axios from '../../axios.js';

export const GET_ALL_LUNCH_PROGRAMS = 'GET_ALL_LUNCH_PROGRAMS';
export const ADD_LUNCH_PROGRAM_SUCCESS = 'ADD_LUNCH_PROGRAM_SUCCESS';
export const ADD_LUNCH_PROGRAM_FAILURE = 'ADD_LUNCH_PROGRAM_FAILURE';
export const UPDATE_LUNCH_PROGRAM = 'UPDATE_LUNCH_PROGRAM';
export const DELETE_LUNCH_PROGRAM = 'DELETE_LUNCH_PROGRAM';

export const getAllLunchPrograms = () => (dispatch) => {
	axios.get('/api/programs/').then((res) => {
		dispatch({
			type: GET_ALL_LUNCH_PROGRAMS,
			payload: res.data,
		});
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
		})
		.catch((error) => {
			dispatch({
				type: ADD_LUNCH_PROGRAM_FAILURE,
				payload: error.message,
			});
		});
};

export const updateLunchProgram = (requestData) => (dispatch) => {
	axios.put(`/api/programs/${requestData.id}/`, requestData).then((res) => {
		dispatch({
			type: UPDATE_LUNCH_PROGRAM,
			payload: res.data,
		});
	});
};

export const deleteLunchProgram = (lunchProgramId) => (dispatch) => {
	axios.delete(`/api/programs/${lunchProgramId}/`).then(() => {
		dispatch({
			type: DELETE_LUNCH_PROGRAM,
			payload: lunchProgramId,
		});
	});
};
