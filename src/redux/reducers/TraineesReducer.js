import {
	DELETE_REGISTER_TRAINEE,
	GET_REGISTER_TRAINEE,
	REGISTER_TRAINEE_FAILURE,
	REGISTER_TRAINEE_SUCCESS,
	UPDATE_REGISTER_TRAINEE,
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
			};
		case REGISTER_TRAINEE_SUCCESS:
			return {
				...state,
				traineeRegister: [...state.traineeRegister, action.payload],
			};
		case REGISTER_TRAINEE_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			};

		case UPDATE_REGISTER_TRAINEE:
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
			};

		case DELETE_REGISTER_TRAINEE:
			const deleteTraineeRegister = state.traineeRegister.filter(
				(item) => item._id !== action.payload
			);

			return {
				...state,
				traineeRegister: deleteTraineeRegister,
			};

		default:
			return state;
	}
};

export default traineeRegisterReducer;
