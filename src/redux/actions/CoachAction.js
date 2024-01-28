import axios from '../../axios.js';

export const GET_REGISTER_COACH = 'GET_REGISTER_COACH';
export const REGISTER_COACH_SUCCESS = 'REGISTER_COACH_SUCCESS';
export const REGISTER_COACH_FAILURE = 'REGISTER_COACH_FAILURE';
export const UPDATE_REGISTER_COACH = 'UPDATE_REGISTER_COACH';
export const DELETE_REGISTER_COACH = 'DELETE_REGISTER_COACH';

export const getAllCoach = () => (dispatch) => {
	axios.get('api/trainers/all').then((res) => {
		dispatch({
			type: GET_REGISTER_COACH,
			payload: res.data,
		});
	});
};

export const registerCoach = (requestData) => (dispatch) => {
	axios
		.post('api/trainers/register', requestData)
		.then((res) => {
			// Dispatch the success action with the received data
			dispatch({
				type: REGISTER_COACH_SUCCESS,
				payload: res.data,
			});
		})
		.catch((error) => {
			// Dispatch the failure action with the error message
			dispatch({
				type: REGISTER_COACH_FAILURE,
				payload: error.message,
			});
		});
};

export const updateCoach = (requestData) => (dispatch) => {
	axios.put(`api/trainers/${requestData.id}/`, requestData).then((res) => {
		dispatch({
			type: UPDATE_REGISTER_COACH,
			payload: res.data,
		});
	});
};

export const deleteCoach = (coachRequestId) => (dispatch) => {
	axios.delete(`api/trainers/${coachRequestId}/`).then(() => {
		dispatch({
			type: DELETE_REGISTER_COACH,
			payload: coachRequestId,
		});
	});
};
