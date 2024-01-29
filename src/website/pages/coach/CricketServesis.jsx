import React from 'react';
import './curosol.css';

import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';

const CricketServesis = () => {
	const { id } = useParams();
	console.log('🚀 ~ CricketServesis ~ _id:', id);
	const cricketCoachesData = useSelector(
		(state) => state?.coachRegister?.coachRegister
	);

	console.log('🚀 ~ CricketServesis ~ cricketCoachesData:', cricketCoachesData);

	const existCoach = cricketCoachesData.filter((f) => f._id == id);
	console.log('🚀 ~ CricketServesis ~ existCoach:', existCoach);

	return (
		<>
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
							{/* <p className='testimonial'>{testimonial.text}</p> */}
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
					<Link to={'/cricketcoach'}>
						<button type='submit' className='btn bg-primary getstarted scroll'>
							Cancel
						</button>
					</Link>
					<Link to={'/payment'}>
						<button
							type='submit'
							className='btn bg-primary getstarted scroll ms-2'
						>
							Book
						</button>
					</Link>
				</div>
			</div>
		</>
	);
};

export default CricketServesis;
