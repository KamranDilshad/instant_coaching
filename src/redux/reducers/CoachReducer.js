import {
	DELETE_REGISTER_COACH,
	GET_REGISTER_COACH,
	REGISTER_COACH_FAILURE,
	REGISTER_COACH_SUCCESS,
	UPDATE_REGISTER_COACH,
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
			};
		case REGISTER_COACH_SUCCESS:
			return {
				...state,

				coachRegister: [...state.coachRegister, action.payload],
			};
		case REGISTER_COACH_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			};

		case UPDATE_REGISTER_COACH:
			const updatedcoachRegister = state.coachRegister.map((updateRequest) => {
				if (updateRequest._id === action.payload.id) {
					return action.payload;
				}
				return updateRequest;
			});

			return {
				...state,
				coachRegister: updatedcoachRegister,
			};

		case DELETE_REGISTER_COACH:
			const deletecoachRegister = state.coachRegister.filter(
				(item) => item._id !== action.payload
			);

			return {
				...state,
				coachRegister: deletecoachRegister,
			};

		default:
			return state;
	}
};

export default coachRegisterReducer;
