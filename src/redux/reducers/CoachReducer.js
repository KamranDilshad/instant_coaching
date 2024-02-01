import {
	DELETE_REGISTER_COACH,
	GET_REGISTER_COACH,
	REGISTER_COACH_FAILURE,
	REGISTER_COACH_SUCCESS,
	UPDATE_REGISTER_COACH_SUCCESS,
	UPDATE_REGISTER_COACH_FAILURE,
	DELETE_REGISTER_COACH_SUCCESS,
	DELETE_REGISTER_COACH_FAILURE,
} from '../actions/CoachAction';

const initialState = {
	coachRegister: [],
	loading: false,
	error: null,
};

const coachRegisterReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_REGISTER_COACH:
			return {
				...state,
				coachRegister: [...action.payload],
				loading: false,
				error: null,
			};
		case REGISTER_COACH_SUCCESS:
			return {
				...state,
				coachRegister: [...state.coachRegister, action.payload],
				loading: false,
				error: null,
			};
		case REGISTER_COACH_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		case UPDATE_REGISTER_COACH_SUCCESS:
			const updatedcoachRegister = state.coachRegister.map((updateRequest) => {
				if (updateRequest._id === action.payload.id) {
					return action.payload;
				}
				return updateRequest;
			});

			return {
				...state,
				coachRegister: updatedcoachRegister,
				loading: false,
				error: null,
			};
		case UPDATE_REGISTER_COACH_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		case DELETE_REGISTER_COACH_SUCCESS:
			const deletecoachRegister = state.coachRegister.filter(
				(item) => item._id !== action.payload
			);

			return {
				...state,
				coachRegister: deletecoachRegister,
				loading: false,
				error: null,
			};
		case DELETE_REGISTER_COACH_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default coachRegisterReducer;
