import { APPROVE_USER } from '../actions/AdminAction';

const initialState = {
	approveUser: [],
	loading: false,
	error: null,
};
const adminApproveReducer = (state = initialState, action) => {
	switch (action.type) {
		case APPROVE_USER:
			const approveUser = state.approveUser.map((updateRequest) => {
				if (updateRequest._id === action.payload.id) {
					console.log(
						'🚀 ~ approveUser ~ (updateRequest._id :',
						updateRequest._id
					);
					console.log(
						'🚀 ~ approveUser ~ action.payload.id:',
						action.payload.id
					);
					return action.payload;
				}
				return updateRequest;
			});

			return {
				...state,
				approveUser: approveUser,
			};

		default:
			return state;
	}
};

export default adminApproveReducer;
