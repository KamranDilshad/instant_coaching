import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './website/pages/Login';
import Home from './website/home/Home';
import AboutUs from './website/pages/AboutUs';
import CoachRegisteration from './website/pages/coach/CoachRegisteration';
import FootballCoaches from './website/pages/FootballCoaches';
import TraineeRegister from './website/pages/TraineeRegister';
import MainAdmin from './admin/MainAdmin';
import ProfileView from './website/pages/coach/Profile';
import LunchProgram from './website/pages/coach/LunchProgram';
import ProgramTableView from './website/pages/coach/ViewProgram';
import StripePaymentForm from './website/pages/coach/PaymentCard';
import LoginAdmin from './admin/LoginAdmin';
import ProtectedRoute from './ProtectedRoutes';
import { useSelector } from 'react-redux';
import UpdateProgram from './website/pages/coach/UpdateProgram';
import CoachesCategory from './website/pages/coach/CoachesCategory';
import CoachesServesis from './website/pages/coach/CoachesServesis';
import FootballCategory from './website/pages/coach/FootballCategory';
import CricketCategory from './website/pages/coach/CricketCategory';
import HockeyCategory from './website/pages/coach/HockeyCategory';
import FitnessCategory from './website/pages/coach/FitnessCategory';

function Routing() {
	console.log('Before', process.env.REACT_APP_STRIPE_PK);
	const stripePromise = loadStripe(
		'pk_test_51KHkSsGpMGlAcNZe4RTGbHNAMaNFrGsQszQEUhRsobpuRLTZmW5v9RUC4mKifMvP06IOF8XDUJkDmfYQnFr0O0SI007LIYQlIJ'
	);
	console.log('Stripe Promise', stripePromise);
	const isAuthenticated = useSelector((state) => state?.auth?.isAuthenticated);
	console.log('🚀 ~ Routing ~ isAuthenticated:', isAuthenticated);
	return (
		<BrowserRouter>
			<Routes>
				{/* Website Routes */}
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/aboutus' element={<AboutUs />} />
				<Route path='/coachregister' element={<CoachRegisteration />} />
				<Route path='/traineeregister' element={<TraineeRegister />} />

				<Route
					path='/profile'
					element={
						<ProtectedRoute
							element={<ProfileView />}
							isAuthenticated={isAuthenticated}
						/>
					}
				/>
				<Route
					path='/coachesservices/:id'
					element={
						<ProtectedRoute
							element={<CoachesServesis />}
							isAuthenticated={isAuthenticated}
						/>
					}
				/>
				{/* <Route
					path='/cricketcoach'
					element={
						<ProtectedRoute
							element={<CoachesCategory />}
							isAuthenticated={isAuthenticated}
						/>
					}
				/> */}

				<Route
					path='/cricketcategory'
					element={
						<ProtectedRoute
							element={<CricketCategory />}
							isAuthenticated={isAuthenticated}
						/>
					}
				/>

				<Route
					path='/footballcategory'
					element={
						<ProtectedRoute
							element={<FootballCategory />}
							isAuthenticated={isAuthenticated}
						/>
					}
				/>

				<Route
					path='/hockeycategory'
					element={
						<ProtectedRoute
							element={<HockeyCategory />}
							isAuthenticated={isAuthenticated}
						/>
					}
				/>
				<Route
					path='/fitnesscategory'
					element={
						<ProtectedRoute
							element={<FitnessCategory />}
							isAuthenticated={isAuthenticated}
						/>
					}
				/>
				<Route
					path='/lunchprogram'
					element={
						<ProtectedRoute
							element={<LunchProgram />}
							isAuthenticated={isAuthenticated}
						/>
					}
				/>
				<Route
					path='/viewprogram'
					element={
						<ProtectedRoute
							element={<ProgramTableView />}
							isAuthenticated={isAuthenticated}
						/>
					}
				/>
				<Route
					path='/updateprogram/:id'
					element={
						<ProtectedRoute
							element={<UpdateProgram />}
							isAuthenticated={isAuthenticated}
						/>
					}
				/>
				<Route
					path='/payment/:programId/:trainerId'
					element={
						<ProtectedRoute
							element={
								<Elements stripe={stripePromise}>
									<StripePaymentForm />
								</Elements>
							}
							isAuthenticated={isAuthenticated}
						/>
					}
				/>

				{/* Admin Routes */}
				<Route path='/admin/' element={<LoginAdmin />} />
				<Route path='/admin/app/*' element={<MainAdmin />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Routing;
