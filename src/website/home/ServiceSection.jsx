import React from 'react';
import { Link } from 'react-router-dom';

const ServiceSection = () => {
	return (
		<>
			<section id='services' className='services section-bg'>
				<div className='container' data-aos='fade-up'>
					<div className='section-title'>
						<h2>Services</h2>
						<p>
							Embark on a transformative journey with our specialized coaching
							services designed to elevate your skills and foster personal
							growth. Explore our comprehensive range of coaching offerings,
							including Cricket, Hockey, Football, and Workout Programs. Each
							service is meticulously crafted to cater to your unique goals,
							guided by expert coaches dedicated to bringing out the best in
							you. Whether you're an aspiring athlete seeking sports excellence
							or on a fitness journey towards a healthier lifestyle, our
							services provide a tailored approach, ensuring you receive the
							personalized attention needed to thrive in your chosen pursuit.
							Choose your path to success with [Your Platform Name]'s diverse
							and impactful coaching services.
						</p>
					</div>

					<div className='row'>
						<div
							className='col-xl-3 col-md-6 d-flex align-items-stretch'
							data-aos='zoom-in'
							data-aos-delay='100'
						>
							<div className='icon-box'>
								<div className='icon '>
									<iconify-icon
										className='w-75 h-75'
										icon='emojione-monotone:cricket-game'
									></iconify-icon>
								</div>
								<h4>
									<Link to={'/cricketservices'}>CRICKET COACHING</Link>
								</h4>
								<p>
									{' '}
									Learn and refine your cricket skills with personalized
									coaching tailored to your level.
								</p>
							</div>
						</div>

						<div
							className='col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0'
							data-aos='zoom-in'
							data-aos-delay='200'
						>
							<div className='icon-box'>
								<div className='icon'>
									<iconify-icon icon='ion:football-outline'></iconify-icon>
								</div>
								<h4>
									<Link to={'/cricketservices'}>FootBall COACHING</Link>
								</h4>
								<p>
									Take your football skills to new heights with specialized
									coaching tailored to your position.
								</p>
							</div>
						</div>

						<div
							className='col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0'
							data-aos='zoom-in'
							data-aos-delay='300'
						>
							<div className='icon-box'>
								<div className='icon'>
									<iconify-icon icon='emojione-monotone:field-hockey'></iconify-icon>
								</div>
								<h4>
									<Link to={'/cricketservices'}>Hockey COACHING</Link>
								</h4>
								<p>
									Elevate your hockey game with expert coaching designed to
									enhance your skills.
								</p>
							</div>
						</div>

						<div
							className='col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0'
							data-aos='zoom-in'
							data-aos-delay='400'
						>
							<div className='icon-box'>
								<div className='icon'>
									<iconify-icon icon='iconoir:gym'></iconify-icon>
								</div>
								<h4>
									<Link to={'/cricketservices'}>Workout COACHING</Link>
								</h4>
								<p>
									Achieve your fitness goals with personalized workout programs
									designed by expert coaches.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ServiceSection;
