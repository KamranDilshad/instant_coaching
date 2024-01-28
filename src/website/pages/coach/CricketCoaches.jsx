import React, { useEffect } from 'react';
import BackButton from '../Button';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CricketCoaches = () => {
	const cricketCoachesData = useSelector(
		(state) => state?.coachRegister?.coachRegister
	);
	useEffect(() => {
		console.log(
			'🚀 ~ CricketCoaches ~ cricketCoachesData:',
			cricketCoachesData
		);

		dispatch(getAllCoach());
	}, [dispatch]);

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
										<h4>{coach.firstName}</h4>
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
