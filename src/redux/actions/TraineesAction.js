import axios from '../../axios.js';

export const GET_REGISTER_TRAINEE = 'GET_REGISTER_TRAINEE';
export const REGISTER_TRAINEE_SUCCESS = 'REGISTER_TRAINEE_SUCCESS';
export const REGISTER_TRAINEE_FAILURE = 'REGISTER_TRAINEE_FAILURE';
export const UPDATE_REGISTER_TRAINEE = 'UPDATE_REGISTER_TRAINEE';
export const DELETE_REGISTER_TRAINEE = 'DELETE_REGISTER_TRAINEE';

export const getAllTrainee = () => (dispatch) => {
	axios.get('/api/users/').then((res) => {
		dispatch({
			type: GET_REGISTER_TRAINEE,
			payload: res.data,
		});
	});
};

export const registerTrainee = (requestData) => (dispatch) => {
	axios
		.post('/api/users/register', requestData)
		.then((res) => {
			dispatch({
				type: REGISTER_TRAINEE_SUCCESS,
				payload: res.data,
			});
		})
		.catch((error) => {
			dispatch({
				type: REGISTER_TRAINEE_FAILURE,
				payload: error.message,
			});
		});
};

export const updateTrainee = (requestData) => (dispatch) => {
	axios.put(`/api/users/${requestData._id}/`, requestData).then((res) => {
		dispatch({
			type: UPDATE_REGISTER_TRAINEE,
			payload: res.data,
		});
	});
};

export const deleteTrainee = (traineeId) => (dispatch) => {
	axios.delete(`/api/users/${traineeId}/`).then(() => {
		dispatch({
			type: DELETE_REGISTER_TRAINEE,
			payload: traineeId,
		});
	});
};
