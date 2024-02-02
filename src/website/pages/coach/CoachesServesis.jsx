import React, { useEffect } from 'react';
import './curosol.css';
import icon from '../../assets/img/skills.png';
import BackButton from '../Button';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllLunchPrograms } from '../../../redux/actions/LunchProgramAction';

const CoachesServesis = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	console.log('🚀 ~ CricketServesis ~ _id:', id);
	const cricketCoachesData = useSelector(
		(state) => state?.coachRegister?.coachRegister
	);

	console.log('🚀 ~ CricketServesis ~ cricketCoachesData:', cricketCoachesData);

	const existCoach = cricketCoachesData.filter((f) => f._id == id);
	console.log('🚀 ~ CricketServesis ~ existCoach:', existCoach);

	const luncProgramData = useSelector(
		(state) => state?.programs?.lunchPrograms
	);

	useEffect(() => {
		dispatch(getAllLunchPrograms());
	}, [dispatch]);

	const existProgram = luncProgramData.filter(
		(program) => program.trainerId === id
	);
	console.log('🚀 ~ CricketCoaches ~ existProgram:', existProgram);

	return (
		<>
			<BackButton />
			<section id='about' className='about'>
				<div className='container' data-aos='fade-up'>
					<div className='section-title'>
						<h2> Cricket Coaching</h2>
					</div>

					<div className='row content'>
						<div className='col-lg-12 pt-4 pt-lg-0 mb-5 text-center'>
							<h3>Overview</h3>
							<p>
								Learn and refine your cricket skills with personalized coaching
								tailored to your level.
							</p>

							<h3 className='mt-5'>Training Focus</h3>
							<p>
								Batting techniques, bowling strategies, fielding drills, match
								tactics.
							</p>
							<h3 className='mt-5'>Coach Expertise</h3>
							<p>
								Certified cricket coaches with experience in various formats of
								the game.
							</p>
							<h3 className='mt-5'>Success Stories</h3>
							<p>
								Explore testimonials and success stories from individuals who
								improved their cricket performance through our coaching.
							</p>
						</div>
					</div>
				</div>
			</section>

			<h2>Testimonials</h2>
			<div id='myCarousel' className='carousel slide' data-ride='carousel'>
				<div className='carousel-inner'>
					{existCoach.map((testimonial, index) => (
						<div key={index}>
							<div className='img-box'>
								<img src={testimonial.image} alt='' />
							</div>

							<p className='overview'>
								<b>{`${testimonial.firstName}  ${testimonial.lastName}`}</b>
								<b>{testimonial.role}</b>
								<b>{testimonial.phone}</b>
								<b>{testimonial.email}</b>
								<b>{testimonial.category}</b>
								<b>{testimonial.subCategory}</b>
							</p>
						</div>
					))}
					{/* <Link to={'/cricketcoach'}>
						<button type='submit' className='btn bg-primary getstarted scroll'>
							Cancel
						</button>
					</Link> */}
				</div>
			</div>
			{/* <CoachesCategory /> */}
			<section id='team' className='team section-bg'>
				<div className='container' data-aos='fade-up'>
					<div className='section-title'>
						<h2>Lunch Program</h2>

						<p>
							Magnam dolores commodi suscipit. Necessitatibus eius consequatur
							ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
							quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
							Quia fugiat sit in iste officiis commodi quidem hic quas.
						</p>
					</div>
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
											<Link to={`/payment/${program._id}/${program.trainerId}`}>
												{/* Pass programId and trainerId as parameters in the URL */}
												<Button className='bg-primary'>Book</Button>
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

export default CoachesServesis;
