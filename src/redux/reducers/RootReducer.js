import { combineReducers } from 'redux';

import coachRegisterReducer from './CoachReducer';
import traineeRegisterReducer from './TraineesReducer';
import authReducer from './AuthReducer';
import lunchProgramReducer from './LunchProgramReducer';

const RootReducer = combineReducers({
	auth: authReducer,
	coachRegister: coachRegisterReducer,
	traineeRegister: traineeRegisterReducer,
	programs: lunchProgramReducer,
});

export default RootReducer;
