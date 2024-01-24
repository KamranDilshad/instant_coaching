import { combineReducers } from 'redux';

import coachRegisterReducer from './CoachReducer';
import traineeRegisterReducer from './TraineesReducer';
import authReducer from './AuthReducer';

const RootReducer = combineReducers({
	auth: authReducer,
	coachRegister: coachRegisterReducer,
	traineeRegister: traineeRegisterReducer,
});

export default RootReducer;
