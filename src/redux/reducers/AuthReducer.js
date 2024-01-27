import {
	ADMIN_APPROVED,
	LOGIN_FAILURE,
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGOUT,
} from '../actions/AuthAction';

const initialState = {
	isAuthenticated: false,
	isInitialised: false,
	isLoggedIn: false,
	user: null,
	loading: false,
	error: null,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_REQUEST:
			return {
				...state,
				loading: true,
				error: null,
			};
		case LOGIN_SUCCESS:
			return {
				...state,
				isAuthenticated: true,
				isInitialised: true,
				user: action.payload,
				isLoggedIn: true,
				loading: false,
				error: null,
			};
		case ADMIN_APPROVED:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		case LOGIN_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		case LOGOUT:
			return {
				...state,
				isAuthenticated: false,
				isInitialised: true,
				isLoggedIn: false,
				user: null,
			};
		default:
			return state;
	}
};

export default authReducer;
