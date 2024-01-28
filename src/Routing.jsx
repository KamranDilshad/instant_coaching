import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './website/pages/Login';
import Home from './website/home/Home';
import AboutUs from './website/pages/AboutUs';
import CoachRegisteration from './website/pages/coach/CoachRegisteration';
import CricketCoaches from './website/pages/coach/CricketCoaches';
import FootballCoaches from './website/pages/FootballCoaches';
import CricketServesis from './website/pages/coach/CricketServesis';
import TraineeRegister from './website/pages/TraineeRegister';
import MainAdmin from './admin/MainAdmin';
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

// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Login from './website/pages/Login';
// import Home from './website/home/Home';
// import AboutUs from './website/pages/AboutUs';
// import CoachRegisteration from './website/pages/coach/CoachRegisteration';
// import CricketCoaches from './website/pages/coach/CricketCoaches';
// import FootballCoaches from './website/pages/FootballCoaches';
// import CricketServices from './website/pages/coach/CricketServesis';
// import TraineeRegister from './website/pages/TraineeRegister';
// import MainAdmin from './admin/MainAdmin';
// import ProfileView from './website/pages/coach/Profile';
// import LunchProgram from './website/pages/coach/LunchProgram';
// import ProgramTableView from './website/pages/coach/ViewProgram';
// import StripePaymentForm from './website/pages/coach/PaymentCard';
// import LoginAdmin from './admin/LoginAdmin';
// import ProtectedRoute from './ProtectedRoutes';
// import { useSelector } from 'react-redux';

// function Routing() {
// 	const isAuthenticated = useSelector((state) => state?.auth?.isAuthenticated);
// 	console.log('🚀 ~ Routing ~ isAuthenticated:', isAuthenticated);
// 	return (
// 		<BrowserRouter>
// 			<Routes>
// 				{/* Website Routes */}
// 				<Route path='/' element={<Home />} />
// 				<Route path='/login' element={<Login />} />
// 				<Route path='/aboutus' element={<AboutUs />} />
// 				<Route path='/coachregister' element={<CoachRegisteration />} />
// 				<Route path='/traineeregister' element={<TraineeRegister />} />

// 				<Route
// 					path='/profile'
// 					element={
// 						<ProtectedRoute
// 							element={<ProfileView />}
// 							isAuthenticated={isAuthenticated}
// 						/>
// 					}
// 				/>
// 				<Route
// 					path='/cricketservices'
// 					element={
// 						<ProtectedRoute
// 							element={<CricketServices />}
// 							isAuthenticated={isAuthenticated}
// 						/>
// 					}
// 				/>
// 				<Route
// 					path='/cricketcoach'
// 					element={
// 						<ProtectedRoute
// 							element={<CricketCoaches />}
// 							isAuthenticated={isAuthenticated}
// 						/>
// 					}
// 				/>
// 				<Route
// 					path='/footballcoach'
// 					element={
// 						<ProtectedRoute
// 							element={<FootballCoaches />}
// 							isAuthenticated={isAuthenticated}
// 						/>
// 					}
// 				/>
// 				<Route
// 					path='/lunchprogram'
// 					element={
// 						<ProtectedRoute
// 							element={<LunchProgram />}
// 							isAuthenticated={isAuthenticated}
// 						/>
// 					}
// 				/>
// 				<Route
// 					path='/viewprogram'
// 					element={
// 						<ProtectedRoute
// 							element={<ProgramTableView />}
// 							isAuthenticated={isAuthenticated}
// 						/>
// 					}
// 				/>
// 				<Route
// 					path='/payment'
// 					element={
// 						<ProtectedRoute
// 							element={<StripePaymentForm />}
// 							isAuthenticated={isAuthenticated}
// 						/>
// 					}
// 				/>

// 				{/* Admin Routes */}
// 				<Route path='/admin/' element={<LoginAdmin />} />
// 				<Route path='/admin/app/*' element={<MainAdmin />} />
// 			</Routes>
// 		</BrowserRouter>
// 	);
// }

// export default Routing;
