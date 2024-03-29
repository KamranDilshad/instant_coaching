import {
	APPROVE_USER_SUCCESS,
	APPROVE_USER_FAILURE,
} from '../actions/AdminAction';

const initialState = {
	approveUser: [],
	loading: false,
	error: null,
};

const adminApproveReducer = (state = initialState, action) => {
	switch (action.type) {
		case APPROVE_USER_SUCCESS:
			return {
				...state,
				approveUser: state.approveUser.map((updateRequest) => {
					if (updateRequest._id === action.payload.id) {
						return action.payload;
					}
					return updateRequest;
				}),
				loading: false,
				error: null,
			};
		case APPROVE_USER_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default adminApproveReducer;
