import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../assets/css/style.css';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../redux/actions/AuthAction';
import avtar from '../assets/img/team/team-4.jpg';

const Header = () => {
	const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);
	const user = useSelector((state) => state?.auth?.user);
	console.log('🚀 ~ Header ~ user:', user);
	console.log('🚀 ~ Header ~ isLoggedIn:', isLoggedIn);
	const dispatch = useDispatch();
	const navigation = useNavigate();

	const handleLogout = () => {
		dispatch(logout());
		navigation('/login');
	};

	return (
		<div>
			<header id='header' className='fixed-top '>
				<div className='container d-flex align-items-center '>
					<h1 className='logo me-auto'>
						<a>Instant Coach</a>
					</h1>
					<a href='index.html' className='logo me-auto'>
						<img src='assets/img/logo.png' alt='' className='img-fluid' />
					</a>

					<nav id='navbar' className='navbar '>
						<ul>
							<li>
								<a className='nav-link scrollto active' href='#hero'>
									Home
								</a>
							</li>
							<li>
								<a className='nav-link scrollto' href='#about'>
									About
								</a>
							</li>
							<li>
								<a className='nav-link scrollto' href='#services'>
									Services
								</a>
							</li>

							<li>
								<a className='nav-link scrollto' href='#team'>
									Coaches
								</a>
							</li>

							<li>
								<a className='nav-link scrollto' href='#contact'>
									Contact
								</a>
							</li>
							<li className='dropdown'>
								<a href='#'>
									<span>Categories</span> <i className='bi bi-chevron-down'></i>
								</a>
								<ul>
									<li className='dropdown'>
										<a href='#'>
											<span>Sports</span>{' '}
											<i className='bi bi-chevron-right'></i>
										</a>
										<ul>
											<li>
												<a href='morepages/cricketcoaches.html'>Cricket</a>
											</li>
											<li>
												<a href='#'>Football</a>
											</li>
											<li>
												<a href='#'>Hockey</a>
											</li>
										</ul>
									</li>
									<li className='dropdown'>
										<a href='#'>
											<span>Fitness</span>
											<i className='bi bi-chevron-right'></i>
										</a>
										<ul>
											<li>
												<a href='#'>Workout</a>
											</li>
										</ul>
									</li>
								</ul>
							</li>

							{isLoggedIn ? (
								<li className='dropdown'>
									<a href='#'>
										<img
											src={user.role == 'trainer' ? user?.image : avtar}
											alt={`${user.firstName} ${user.lastName}`}
											style={{
												width: '50px',
												height: '50px',
												borderRadius: '50%',
											}}
											className='user-avatar'
										/>
										<span className='ps-2'>
											{user.role == 'trainer' ? user.firstName : user.fullName}
										</span>
										<i className='bi bi-chevron-down'></i>
									</a>
									<ul>
										<li>
											<Link to='/profile'>View Profile</Link>
										</li>
										<li>
											<button
												className=' ms-2 mt-2 getstarted  scrollto'
												onClick={handleLogout}
											>
												Logout
											</button>
										</li>
									</ul>
								</li>
							) : (
								<>
									<li>
										<Link to={'/coachregister'}>
											<span className='getstarted scrollto'>
												Become a Coach
											</span>
										</Link>
									</li>
									<li>
										<Link to={'/traineeregister'}>
											<span className='getstarted scrollto'>
												Become a Trainee
											</span>
										</Link>
									</li>
								</>
							)}
						</ul>
						<i className='bi bi-list mobile-nav-toggle'></i>
					</nav>
				</div>
			</header>
		</div>
	);
};

export default Header;
