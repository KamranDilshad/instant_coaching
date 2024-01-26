import React from 'react';
import './curosol.css';
import Button from '../Button';

const CricketServesis = () => {
	const testimonialsData = [
		{
			image: '../assets/img/team/zaheer.jpg',
			text: 'The cricket coaching services have been transformative, taking me from a novice to a skilled professional. Personalized training plans, one-on-one coaching, and a focus on mental aspects have significantly enhanced my game. The comprehensive approach and regular feedback sessions have been invaluable.',
			name: 'Zaheer Ansari',
			role: 'Cricketer',
		},
		{
			image: '../assets/img/team/mujahid.jpg',
			text: 'This coaching program has substantially improved my cricketing skills, offering effective techniques and emphasizing real-time decision-making. The holistic approach, including match simulations, has not only elevated my game but also instilled discipline and sportsmanship. Highly recommended for those seeking to enhance their cricket abilities.',
			name: 'Mujahid Awaise',
			role: 'Cricketer',
		},
		{
			image: '../assets/img/team/shoiab.jpg',
			text: 'My journey with the cricket coaching services has been transformative, providing a solid foundation in the game. The structured curriculum, coupled with cutting-edge training techniques, has shaped me into a skilled and strategic player. Beyond technical skills, the emphasis on teamwork and resilience has been pivotal in my growth as a cricketer.',
			name: 'Shoiab Riaz',
			role: 'Cricketer',
		},
	];

	return (
		<>
			<Button />
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
				<ol className='carousel-indicators'>
					{testimonialsData.map((_, index) => (
						<li
							key={index}
							data-target='#myCarousel'
							data-slide-to={index}
							className={index === 0 ? 'active' : ''}
						></li>
					))}
				</ol>

				<div className='carousel-inner'>
					{testimonialsData.map((testimonial, index) => (
						<div
							key={index}
							className={`carousel-item ${index === 0 ? 'active' : ''}`}
						>
							<div className='img-box'>
								<img src={testimonial.image} alt='' />
							</div>
							<p className='testimonial'>{testimonial.text}</p>
							<p className='overview'>
								<b>{testimonial.name}</b> {testimonial.role}
							</p>
						</div>
					))}
				</div>

				<a
					className='carousel-control-prev'
					href='#myCarousel'
					data-slide='prev'
				>
					<i className='fa fa-angle-left'></i>
				</a>
				<a
					className='carousel-control-next'
					href='#myCarousel'
					data-slide='next'
				>
					<i className='fa fa-angle-right'></i>
				</a>
			</div>
		</>
	);
};

export default CricketServesis;
