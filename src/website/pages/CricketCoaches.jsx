import React from 'react';
import Button from './Button';

const CricketCoaches = () => {
	return (
		<>
			<Button />
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

					<div className='row'>
						<div className='col-lg-6' data-aos='zoom-in' data-aos-delay='100'>
							<div className='member d-flex align-items-start'>
								<div className='pic'>
									<img
										src='../assets/img/team/zaheer.jpg'
										className='img-fluid'
										alt=''
									/>
								</div>
								<div className='member-info'>
									<h4>Zaheer Ansari</h4>
									<span>Bowling Coach</span>
									<p>
										Explicabo voluptatem mollitia et repellat qui dolorum quasi
									</p>
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
											{' '}
											<i className='ri-linkedin-box-fill'></i>{' '}
										</a>
									</div>
								</div>
							</div>
						</div>

						<div
							className='col-lg-6 mt-4 mt-lg-0'
							data-aos='zoom-in'
							data-aos-delay='200'
						>
							<div className='member d-flex align-items-start'>
								<div className='pic'>
									<img
										src='../assets/img/team/mujahid.jpg'
										className='img-fluid'
										alt=''
									/>
								</div>
								<div className='member-info'>
									<h4>Mujahid Awaise</h4>
									<span>Batting Coach</span>
									<p>
										Aut maiores voluptates amet et quis praesentium qui senda
										para
									</p>
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
											{' '}
											<i className='ri-linkedin-box-fill'></i>{' '}
										</a>
									</div>
								</div>
							</div>
						</div>

						<div
							className='col-lg-6 mt-4'
							data-aos='zoom-in'
							data-aos-delay='300'
						>
							<div className='member d-flex align-items-start'>
								<div className='pic'>
									<img
										src='../assets/img/team/shoiab.jpg'
										className='img-fluid'
										alt=''
									/>
								</div>
								<div className='member-info'>
									<h4>Shoiab Riaz</h4>
									<span>Batting Coach</span>
									<p>
										Quisquam facilis cum velit laborum corrupti fuga rerum quia
									</p>
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
											{' '}
											<i className='ri-linkedin-box-fill'></i>{' '}
										</a>
									</div>
								</div>
							</div>
						</div>

						<div
							className='col-lg-6 mt-4'
							data-aos='zoom-in'
							data-aos-delay='400'
						>
							<div className='member d-flex align-items-start'>
								<div className='pic'>
									<img
										src='../assets/img/team/team-4.jpg'
										className='img-fluid'
										alt=''
									/>
								</div>
								<div className='member-info'>
									<h4>Amanda Jepson</h4>
									<span>Bowling Coach</span>
									<p>
										Dolorum tempora officiis odit laborum officiis et et
										accusamus
									</p>
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
											{' '}
											<i className='ri-linkedin-box-fill'></i>{' '}
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default CricketCoaches;
