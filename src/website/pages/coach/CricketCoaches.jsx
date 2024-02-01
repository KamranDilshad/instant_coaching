import React, { useState, useEffect } from 'react';
import BackButton from '../Button';
import { Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCoach } from '../../../redux/actions/CoachAction';
import WhatsAppButton from './WhasupButton';
import { getAllLunchPrograms } from '../../../redux/actions/LunchProgramAction';
import icon from '../../assets/img/skills.png';

const CricketCoaches = () => {
	const location = useLocation();
	const isCricketCoachPage = location.pathname.includes('cricketcoach');
	console.log('🚀 ~ CricketCoaches ~ isCricketCoachPage:', isCricketCoachPage);

	const cricketCoachesData = useSelector(
		(state) => state?.coachRegister?.coachRegister
	);
	const luncProgramData = useSelector(
		(state) => state?.programs?.lunchPrograms
	);
	console.log('🚀 ~ CricketCoaches ~ luncProgramData:', luncProgramData);

	const dispatch = useDispatch();

	const [selectedCoachId, setSelectedCoachId] = useState(
		cricketCoachesData.length > 0 ? cricketCoachesData[0]._id : null
	);
	console.log('🚀 ~ CricketCoaches ~ selectedCoachId:', selectedCoachId);

	useEffect(() => {
		if (isCricketCoachPage) {
			dispatch(getAllCoach());
		} else {
			dispatch(getAllLunchPrograms());
		}
	}, [dispatch, isCricketCoachPage]);

	const existProgram = luncProgramData.filter(
		(program) => program.trainerId === selectedCoachId
	);
	console.log('🚀 ~ CricketCoaches ~ existProgram:', existProgram);

	return (
		<>
			<BackButton />
			<section id='team' className='team section-bg'>
				<div className='container' data-aos='fade-up'>
					<div className='section-title'>
						{isCricketCoachPage ? (
							<h2>Cricket Coaches</h2>
						) : (
							<h2>Lunch Program</h2>
						)}

						<p>
							Magnam dolores commodi suscipit. Necessitatibus eius consequatur
							ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
							quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
							Quia fugiat sit in iste officiis commodi quidem hic quas.
						</p>
					</div>
					{isCricketCoachPage ? (
						<div className='row '>
							{cricketCoachesData.map((coach, index) => (
								<div
									key={index}
									className='col-lg-6 mb-4'
									data-aos='zoom-in'
									data-aos-delay={100 * (index + 1)}
								>
									<div className='member d-flex align-items-start '>
										<div className=''>
											<img
												src={coach.image}
												style={{
													width: '150px',
													height: '150px',
													borderRadius: '50%',
												}}
												alt=''
											/>
										</div>
										<div className='member-info'>
											<h4>{coach.firstName}</h4>
											<span>{coach.role}</span>
											<span>
												{coach.phone}{' '}
												<WhatsAppButton phoneNumber={coach.phone} />
											</span>

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
											</div>
											<div className='mt-3 '>
												<Link to={`/cricketservices/${coach._id}`}>
													<Button className='ms-3 bg-primary'>View</Button>
												</Link>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					) : (
						<div className='row '>
							{existProgram.map((program, index) => (
								<div
									key={index}
									className='col-lg-6 mb-4'
									data-aos='zoom-in'
									data-aos-delay={100 * (index + 1)}
									programId={program._id}
									trainerId={program.trainerId}
								>
									<div className='member d-flex align-items-start '>
										<div className=''>
											<img
												src={icon}
												style={{
													width: '150px',
													height: '150px',
													borderRadius: '50%',
												}}
												alt=''
											/>
										</div>
										<div className='member-info'>
											<h4>{program.title}</h4>
											<span>{program.description}</span>
											<span>{program.price}</span>

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
											</div>
											<div className='mt-3 '>
												<Link
													to={`/payment/${program._id}/${program.trainerId}`}
												>
													{/* Pass programId and trainerId as parameters in the URL */}
													<Button className='bg-primary'>Book</Button>
												</Link>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					)}
				</div>
			</section>
		</>
	);
};

export default CricketCoaches;
