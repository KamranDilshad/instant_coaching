import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../assets/css/style.css';
import { Link } from 'react-router-dom';
import { logout } from '../../redux/actions/AuthAction';

const Header = () => {
	const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);
	console.log('🚀 ~ Header ~ isLoggedIn:', isLoggedIn);
	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(logout());
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

							<li>
								<Link to={'/coachregister'}>
									<span className='getstarted scrollto'>Become a Coach</span>
								</Link>
							</li>
							<li>
								<Link to={'/traineeregister'}>
									<span className='getstarted scrollto'>Become a Trainee</span>
								</Link>
							</li>
						</ul>
						<i className='bi bi-list mobile-nav-toggle'></i>
					</nav>
				</div>
			</header>
		</div>
	);
};

export default Header;
