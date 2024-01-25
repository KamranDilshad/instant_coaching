import {
	GET_ALL_LUNCH_PROGRAMS,
	ADD_LUNCH_PROGRAM_SUCCESS,
	ADD_LUNCH_PROGRAM_FAILURE,
	UPDATE_LUNCH_PROGRAM,
	DELETE_LUNCH_PROGRAM,
} from '../actions/LunchProgramAction';

const initialState = {
	lunchPrograms: [],
	error: null,
};

const lunchProgramReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ALL_LUNCH_PROGRAMS:
			return {
				...state,
				lunchPrograms: action.payload,
				error: null,
			};
		case ADD_LUNCH_PROGRAM_SUCCESS:
			return {
				...state,
				lunchPrograms: [...state.lunchPrograms, action.payload],
				error: null,
			};
		case ADD_LUNCH_PROGRAM_FAILURE:
			return {
				...state,
				error: action.payload,
			};
		case UPDATE_LUNCH_PROGRAM:
			const updatedPrograms = state.lunchPrograms.map((program) =>
				program.id === action.payload.id ? action.payload : program
			);
			return {
				...state,
				lunchPrograms: updatedPrograms,
				error: null,
			};
		case DELETE_LUNCH_PROGRAM:
			const filteredPrograms = state.lunchPrograms.filter(
				(program) => program.id !== action.payload
			);
			return {
				...state,
				lunchPrograms: filteredPrograms,
				error: null,
			};
		default:
			return state;
	}
};

export default lunchProgramReducer;
