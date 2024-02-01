import { PAYMENT_FAILURE, PAYMENT_SUCCESS } from '../actions/PaymentAction';

const initialState = {
	approveUser: [],
	loading: false,
	error: null,
};

const paymentReducer = (state = initialState, action) => {
	switch (action.type) {
		case PAYMENT_SUCCESS:
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
		case PAYMENT_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default paymentReducer;
