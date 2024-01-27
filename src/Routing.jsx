import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from './admin/Admin';
import Login from './website/pages/Login';
import Home from './website/home/Home';
import AboutUs from './website/pages/AboutUs';
import CoachRegisteration from './website/pages/coach/CoachRegisteration';
import CricketCoaches from './website/pages/coach/CricketCoaches';
import FootballCoaches from './website/pages/FootballCoaches';
import CricketServesis from './website/pages/coach/CricketServesis';

import TraineeRegister from './website/pages/TraineeRegister';
import MainAdmin from './admin/MainAdmin';
import AdminRoute from './admin/pages/Charts/AdminRoute';
import ProfileView from './website/pages/coach/Profile';
import LunchProgram from './website/pages/coach/LunchProgram';
import ProgramTableView from './website/pages/coach/ViewProgram';
import StripePaymentForm from './website/pages/coach/PaymentCard';
import LoginAdmin from './admin/LoginAdmin';
function Routing() {
	return (
		<BrowserRouter>
			<Routes>
				{/* Website */}

				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/profile' element={<ProfileView />} />
				<Route path='/aboutus' element={<AboutUs />} />
				<Route path='/coachregister' element={<CoachRegisteration />} />
				<Route path='/traineeregister' element={<TraineeRegister />} />
				<Route path='/cricketservices' element={<CricketServesis />} />
				<Route path='/cricketcoach' element={<CricketCoaches />} />
				<Route path='/footballcoach' element={<FootballCoaches />} />
				<Route path='/lunchprogram' element={<LunchProgram />} />
				<Route path='/viewprogram' element={<ProgramTableView />} />
				<Route path='/payment' element={<StripePaymentForm />} />

				{/* Admin Route */}

				<Route path='/admin/' element={<LoginAdmin />} />
				<Route path='/admin/app/*' element={<MainAdmin />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Routing;
