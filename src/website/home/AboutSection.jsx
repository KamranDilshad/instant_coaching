import React from 'react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
	return (
		<>
			<section id='about' className='about'>
				<div className='container' data-aos='fade-up'>
					<div className='section-title'>
						<h2>About Us</h2>
					</div>

					<div className='row content'>
						<div className='col-lg-6'>
							<p>
								Welcome to our <b>Instant Coaches</b> platform, a cutting-edge
								online destination dedicated to facilitating personal growth
								through expert coaching in sports and fitness. Our mission is to
								eliminate the complexities of finding the right coach, offering
								a seamless and accessible experience for individuals seeking
								excellence in their chosen pursuits. Our purpose is
							</p>
							<ul>
								<li>
									<i className='ri-check-double-line'></i> Streamline the
									process of coach selection, and communication through the web
									application.
								</li>
								<li>
									<i className='ri-check-double-line'></i> Empower users to
									choose coaches based on their specific needs and preferences.
								</li>
								<li>
									<i className='ri-check-double-line'></i> Improve the overall
									coaching experience for both coaches and trainee.
								</li>
								<li>
									<i className='ri-check-double-line'></i> Eliminate the need
									for manual processes and paperwork to finding coaching
									services.
								</li>
							</ul>
						</div>

						<div className='col-lg-6 pt-4 pt-lg-0'>
							<h3>Why Instant Coaches</h3>
							<p>
								At the heart of <b>Instant Coaches</b> lies a commitment to
								user-centricity, efficiency, and empowerment. We understand that
								the journey to personal growth is unique for each individual,
								and our platform is meticulously designed to cater to diverse
								needs. Whether you're an
							</p>
							<Link to={'/aboutus'}>
								<span className='btn-learn-more'>Learn More</span>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default AboutSection;
