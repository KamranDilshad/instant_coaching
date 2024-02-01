import {
	GET_REGISTER_TRAINEE,
	REGISTER_TRAINEE_FAILURE,
	REGISTER_TRAINEE_SUCCESS,
	UPDATE_REGISTER_TRAINEE_SUCCESS,
	UPDATE_REGISTER_TRAINEE_FAILURE,
	DELETE_REGISTER_TRAINEE_SUCCESS,
	DELETE_REGISTER_TRAINEE_FAILURE,
} from '../actions/TraineesAction';

const initialState = {
	traineeRegister: [],
	loading: false,
	error: null,
};

const traineeRegisterReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_REGISTER_TRAINEE:
			return {
				...state,
				traineeRegister: [...action.payload],
				loading: false,
				error: null,
			};
		case REGISTER_TRAINEE_SUCCESS:
			return {
				...state,
				traineeRegister: [...state.traineeRegister, action.payload],
				loading: false,
				error: null,
			};
		case REGISTER_TRAINEE_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		case UPDATE_REGISTER_TRAINEE_SUCCESS:
			const updatedTraineeRegister = state.traineeRegister.map(
				(updateRequest) => {
					if (updateRequest.id === action.payload.id) {
						return action.payload;
					}
					return updateRequest;
				}
			);

			return {
				...state,
				traineeRegister: updatedTraineeRegister,
				loading: false,
				error: null,
			};
		case UPDATE_REGISTER_TRAINEE_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		case DELETE_REGISTER_TRAINEE_SUCCESS:
			const deleteTraineeRegister = state.traineeRegister.filter(
				(item) => item._id !== action.payload
			);

			return {
				...state,
				traineeRegister: deleteTraineeRegister,
				loading: false,
				error: null,
			};
		case DELETE_REGISTER_TRAINEE_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default traineeRegisterReducer;
