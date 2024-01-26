import React from 'react';
import BackButton from '../Button';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CricketCoaches = () => {
	// Sample array of cricket coaches
	const cricketCoachesData = [
		{
			name: 'Zaheer Ansari',
			role: 'Bowling Coach',
			image: '../assets/img/team/zaheer.jpg',
		},
		{
			name: 'Mujahid Awaise',
			role: 'Batting Coach',
			image: '../assets/img/team/mujahid.jpg',
		},
		{
			name: 'Shoiab Riaz',
			role: 'Batting Coach',
			image: '../assets/img/team/shoiab.jpg',
		},
		{
			name: 'Amanda Jepson',
			role: 'Bowling Coach',
			image: '../assets/img/team/team-4.jpg',
		},
	];

	return (
		<>
			<BackButton />
			<section id='team' className='team section-bg'>
				<div className='container' data-aos='fade-up'>
					<div className='section-title'>
						<h2>Cricket Coaches</h2>
						<p>
							Magnam dolores commodi suscipit. Necessitatibus eius consequatur
							ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
							quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
							Quia fugiat sit in iste officiis commodi quidem hic quas.
						</p>
					</div>

					<div className='row '>
						{cricketCoachesData.map((coach, index) => (
							<div
								key={index}
								className='col-lg-6 mb-4'
								data-aos='zoom-in'
								data-aos-delay={100 * (index + 1)}
							>
								<div className='member d-flex align-items-start '>
									<div className='pic'>
										<img src={coach.image} className='img-fluid' alt='' />
									</div>
									<div className='member-info'>
										<h4>{coach.name}</h4>
										<span>{coach.role}</span>
										<p> {/* Add additional coach information here */}</p>
										<div className='social'>
											<a href=''>
												<i className='ri-twitter-fill'></i>
											</a>
											<a href=''>
												<i className='ri-facebook-fill'></i>
											</a>
											<a href=''>
												<i className='ri-instagram-fill'></i>
											</a>
											<a href=''>
												<i className='ri-linkedin-box-fill'></i>
											</a>
											{/* <span className='ms-3'>
												<Link to={''}>
													<Button className='ms-3 bg-primary  '>Book</Button>
												</Link>
											</span>
											<span className='ms-4'>
												<Link to={'/cricketservices'}>
													<Button className='ms-5 bg-primary'>View</Button>
												</Link>
											</span> */}
										</div>
										<div className='mt-3 '>
											<Link to={'/payment'}>
												<Button className=' bg-primary  '>Book</Button>
											</Link>

											<Link to={'/cricketservices'}>
												<Button className='ms-3 bg-primary'>View</Button>
											</Link>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default CricketCoaches;
