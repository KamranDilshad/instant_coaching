import React from 'react';

const HeroSection = () => {
	return (
		<>
			<section id='hero' className='d-flex align-items-center'>
				<div className='container'>
					<div className='row'>
						<div
							className='col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1'
							data-aos='fade-up'
							data-aos-delay='200'
						>
							<h1>Polish Your Skills by Coaching</h1>
							<h2>
								We are team of talented Coaches making you professional &
								enhanced your skills
							</h2>
							<div className='d-flex justify-content-center justify-content-lg-start'>
								<a href='#about' className='btn-get-started scrollto'>
									Get Started
								</a>
							</div>
						</div>
						<div
							className='col-lg-6 order-1 order-lg-2 hero-img'
							data-aos='zoom-in'
							data-aos-delay='200'
						>
							<img
								src='assets/img/hero-img.png'
								className='img-fluid animated'
								alt=''
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default HeroSection;
