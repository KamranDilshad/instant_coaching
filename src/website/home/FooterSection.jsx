import React from 'react';

const FooterSection = () => {
	return (
		<footer id='footer'>
			<div className='footer-top'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-3 col-md-6 footer-contact'>
							<h3>INSTANT COACHES</h3>
							<p>
								<strong>Phone:</strong> +1 5589 55488 55
								<br />
								<strong>Email:</strong> info@example.com
								<br />
							</p>
						</div>

						<div className='col-lg-3 col-md-6 footer-links'>
							<h4>Useful Links</h4>
							<ul>
								<li>
									<i className='bx bx-chevron-right'></i>{' '}
									<a href='#home'>Home</a>
								</li>
								<li>
									<i className='bx bx-chevron-right'></i>{' '}
									<a href='#about'>About us</a>
								</li>
								<li>
									<i className='bx bx-chevron-right'></i>{' '}
									<a href='#services'>Services</a>
								</li>
								<li>
									<i className='bx bx-chevron-right'></i>{' '}
									<a href='#team'>Coaches</a>
								</li>
								<li>
									<i className='bx bx-chevron-right'></i>{' '}
									<a href='#contact'>Contact</a>
								</li>
								{/* <li><i className="bx bx-chevron-right"></i> <a href="#policy">Privacy policy</a></li> */}
							</ul>
						</div>

						<div className='col-lg-3 col-md-6 footer-links'>
							<h4>Our Services</h4>
							<ul>
								<li>
									<i className='bx bx-chevron-right'></i>{' '}
									<a href='#'>Cricket Training</a>
								</li>
								<li>
									<i className='bx bx-chevron-right'></i>{' '}
									<a href='#'>Hockey Training</a>
								</li>
								<li>
									<i className='bx bx-chevron-right'></i>{' '}
									<a href='#'>Football Training</a>
								</li>
								<li>
									<i className='bx bx-chevron-right'></i>{' '}
									<a href='#'>Gym Training</a>
								</li>
							</ul>
						</div>

						<div className='col-lg-3 col-md-6 footer-links'>
							<h4>Our Social Networks</h4>
							<p>
								Explore and engage with our vibrant community on social media.
								Follow us on Facebook, Instagram, and Twitter for real-time
								updates. Connect with us today to amplify your journey with
								Instant Coaches.
							</p>
							<div className='social-links mt-3'>
								<a href='#' className='twitter'>
									<i className='bx bxl-twitter'></i>
								</a>
								<a href='#' className='facebook'>
									<i className='bx bxl-facebook'></i>
								</a>
								<a href='#' className='instagram'>
									<i className='bx bxl-instagram'></i>
								</a>
								<a href='#' className='google-plus'>
									<i className='bx bxl-skype'></i>
								</a>
								<a href='#' className='linkedin'>
									<i className='bx bxl-linkedin'></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='container footer-bottom clearfix'>
				<div className='copyright'>
					&copy; Copyright{' '}
					<strong>
						<span>InstantCoaches</span>
					</strong>
					. All Rights Reserved
				</div>
				<div className='credits'>
					Designed by{' '}
					<a href='https://web.facebook.com/zaheeer.ansari'>
						Instant Coaches Developers
					</a>
				</div>
			</div>
		</footer>
	);
};

export default FooterSection;
