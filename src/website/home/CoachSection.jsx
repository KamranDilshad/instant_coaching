import React from 'react';
import { Link } from 'react-router-dom';

const CoachSection = () => {
	return (
		<>
			<section id='team' className='services section-bg'>
				<div className='container' data-aos='fade-up'>
					<div className='section-title'>
						<h2>Coaches</h2>
						<p>
							A diverse team of dedicated professionals committed to empowering
							and guiding individuals toward success. Each coach brings a unique
							set of skills and experiences, ensuring a well-rounded and
							enriching learning environment. Discover the expertise, passion,
							and mentorship that define our coaching team, poised to inspire
							and elevate your journey to greatness.
						</p>
					</div>

					<div className='row '>
						<div
							className='col-xl-3 col-md-6 d-flex align-items-stretch text-center mx-auto  mt-4 mt-xl-0'
							data-aos='zoom-in'
							data-aos-delay='300'
						>
							<div className='icon-box'>
								<div className='icon'>
									<iconify-icon icon='noto:cricket-game'></iconify-icon>
								</div>
								<h2>
									<Link to={'/cricketcategory'}>CRICKET COACHES</Link>
								</h2>
							</div>
						</div>

						<div
							className='col-xl-3 col-md-6 d-flex align-items-stretch text-center mx-auto mt-4 mt-md-0 '
							data-aos='zoom-in'
							data-aos-delay='200'
						>
							<div className='icon-box'>
								<div className='icon'>
									<iconify-icon icon='solar:football-bold'></iconify-icon>
								</div>
								<h2>
									<Link to={'/footballCategory'}>FOOTBALL COACHES</Link>
								</h2>
							</div>
						</div>

						<div
							className='col-xl-3 col-md-6 d-flex align-items-stretch text-center mx-auto  mt-4 mt-xl-0'
							data-aos='zoom-in'
							data-aos-delay='300'
						>
							<div className='icon-box'>
								<div className='icon'>
									<iconify-icon icon='noto:field-hockey'></iconify-icon>
								</div>
								<h2>
									<Link to={'/hockeycategory'}>HOCKEY CAOCHES</Link>
								</h2>
							</div>
						</div>

						<div
							className='col-xl-3 col-md-6 d-flex align-items-stretch text-center mx-auto  mt-4 mt-xl-0'
							data-aos='zoom-in'
							data-aos-delay='300'
						>
							<div className='icon-box'>
								<div className='icon'>
									<iconify-icon icon='arcticons:home-workouts'></iconify-icon>
								</div>
								<h2>
									<Link to={'/fitnessCtegory'}>WORKOUT CAOCHES</Link>
								</h2>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default CoachSection;
