import React from 'react';
import './coach/curosol.css';
import Button from './Button';

const FootballCoaches = () => {
	return (
		<>
			<Button />
			<main id='main'>
				<section id='about' className='about'>
					<div className='container' data-aos='fade-up'>
						<div className='section-title'>
							<h2> Football Coaching</h2>
						</div>

						<div className='row content'>
							<div className='col-lg-12 pt-4 pt-lg-0 mb-5 text-center'>
								<h3>Overview</h3>
								<p>
									Take your football skills to new heights with specialized
									coaching tailored to your position.
								</p>

								<h3 className='mt-5'>Training Focus</h3>
								<p>
									Passing accuracy, ball control, position-specific drills, game
									strategies
								</p>
								<h3 className='mt-5'>Coach Expertise</h3>
								<p>
									Accomplished football coaches with a track record in player
									development.
								</p>
								<h3 className='mt-5'>Success Stories</h3>
								<p>
									Discover stories of players who have excelled on the field
									with the help of our football coaching.
								</p>
							</div>
						</div>
					</div>
				</section>
			</main>

			<h2>Testimonials</h2>
			<div id='myCarousel' className='carousel slide' data-ride='carousel'>
				<ol className='carousel-indicators'>
					<li
						data-target='#myCarousel'
						data-slide-to='0'
						className='active'
					></li>
					<li data-target='#myCarousel' data-slide-to='1'></li>
					<li data-target='#myCarousel' data-slide-to='2'></li>
				</ol>

				<div className='carousel-inner'>
					<div className='carousel-item active'>
						<div className='img-box'>
							<img src='../assets/img/team/zaheer.jpg' alt='' />
						</div>
						<p className='testimonial'>
							"I've had the privilege of playing alongside [Footballer Name] for
							the past few seasons, and it's been an absolute pleasure. His
							dedication, skill, and leadership on the field are truly
							remarkable. Whether it's a crucial goal, a game-changing assist,
							or motivating the team during tough times, [Footballer Name]
							consistently delivers top-notch performances. A true professional
							and an invaluable asset to any team!"
						</p>
						<p className='overview'>
							<b>Zaheer Ansari</b> Footballer{' '}
						</p>
					</div>
					<div className='carousel-item'>
						<div className='img-box'>
							<img src='../assets/img/team/mujahid.jpg' alt='' />
						</div>
						<p className='testimonial'>
							"As a fan, I can't express how fortunate we are to have
							[Footballer Name] representing our club. His flair, agility, and
							unmatched technical prowess make every match a spectacle.
							[Footballer Name] doesn't just play the game; he elevates it. His
							passion for the sport is evident in every stride and every
							precision pass. A genuine game-changer who leaves us on the edge
							of our seats, eagerly anticipating the next breathtaking moment."
						</p>
						<p className='overview'>
							<b>Mujahid Awaise</b>Footballer{' '}
						</p>
					</div>
					<div className='carousel-item'>
						<div className='img-box'>
							<img src='../assets/img/team/shoiab.jpg' alt='' />
						</div>
						<p className='testimonial'>
							"I've coached many talented players throughout my career, but
							[Footballer Name] stands out as one of the brightest stars I've
							had the pleasure to work with. His work ethic is unparalleled,
							always pushing himself to new heights. [Footballer Name] is not
							just a goal-scorer; he's a team player who understands the
							importance of collaboration on the pitch. His commitment to
							excellence sets a standard for others to follow. A true
							inspiration to aspiring footballers and a joy to have in any
							squad."
						</p>
						<p className='overview'>
							<b>Shoiab Riaz</b>Footballer
						</p>
					</div>
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

export default FootballCoaches;
