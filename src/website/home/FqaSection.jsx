import React from 'react';

const FqaSection = () => {
	return (
		<>
			<section id='faq' className='faq section-bg'>
				<div className='container' data-aos='fade-up'>
					<div className='section-title'>
						<h2>Frequently Asked Questions</h2>
						<p>
							Explore the answers to common queries about Instant Coaches and
							our transformative coaching approach. If you have additional
							questions, feel free to reach out for personalized assistance.
						</p>
					</div>

					<div className='faq-list'>
						<ul>
							<li data-aos='fade-up' data-aos-delay='100'>
								<i className='bx bx-help-circle icon-help'></i>{' '}
								<a
									data-bs-toggle='collapse'
									className='collapse'
									data-bs-target='#faq-list-1'
								>
									As a trainee, what can I expect from Instant Coaches' training
									programs? <i className='bx bx-chevron-down icon-show'></i>
									<i className='bx bx-chevron-up icon-close'></i>
								</a>
								<div
									id='faq-list-1'
									className='collapse show'
									data-bs-parent='.faq-list'
								>
									<p>
										Instant Coaches provides dynamic training programs designed
										to cater to your unique needs and goals. Our expert coaches
										deliver personalized guidance, focusing on skill development
										and overall growth. Whether you're a novice or an
										experienced individual, our training programs offer a
										transformative journey, blending expertise, motivation, and
										practical strategies for a well-rounded learning experience.
									</p>
								</div>
							</li>

							<li data-aos='fade-up' data-aos-delay='200'>
								<i className='bx bx-help-circle icon-help'></i>{' '}
								<a
									data-bs-toggle='collapse'
									data-bs-target='#faq-list-2'
									className='collapsed'
								>
									How does Instant Coaches support individual progress and
									growth? <i className='bx bx-chevron-down icon-show'></i>
									<i className='bx bx-chevron-up icon-close'></i>
								</a>
								<div
									id='faq-list-2'
									className='collapse'
									data-bs-parent='.faq-list'
								>
									<p>
										At Instant Coaches, we believe in results-driven mentorship.
										Our coaches are dedicated to ensuring your progress and
										growth as an individual. Beyond just technical skills, we
										provide insights, motivation, and a supportive learning
										environment. The emphasis on individual progress sets
										Instant Coaches apart, fostering an environment where
										trainees are empowered to reach their full potential.
									</p>
								</div>
							</li>

							<li data-aos='fade-up' data-aos-delay='300'>
								<i className='bx bx-help-circle icon-help'></i>{' '}
								<a
									data-bs-toggle='collapse'
									data-bs-target='#faq-list-3'
									className='collapsed'
								>
									What makes Instant Coaches' training methodology effective for
									both beginners and advanced trainees?{' '}
									<i className='bx bx-chevron-down icon-show'></i>
									<i className='bx bx-chevron-up icon-close'></i>
								</a>
								<div
									id='faq-list-3'
									className='collapse'
									data-bs-parent='.faq-list'
								>
									<p>
										Instant Coaches adopts a versatile training methodology that
										accommodates individuals at every skill level. Whether
										you're a beginner looking to establish a solid foundation or
										an advanced trainee aiming for mastery, our coaching
										approach is adaptable. The combination of foundational
										principles and advanced techniques ensures that each trainee
										experiences a progressive and effective training journey.
									</p>
								</div>
							</li>

							<li data-aos='fade-up' data-aos-delay='400'>
								<i className='bx bx-help-circle icon-help'></i>{' '}
								<a
									data-bs-toggle='collapse'
									data-bs-target='#faq-list-4'
									className='collapsed'
								>
									How does Instant Coaches foster a sense of community among
									trainees? <i className='bx bx-chevron-down icon-show'></i>
									<i className='bx bx-chevron-up icon-close'></i>
								</a>
								<div
									id='faq-list-4'
									className='collapse'
									data-bs-parent='.faq-list'
								>
									<p>
										Instant Coaches places great emphasis on building a
										supportive community among trainees. Through shared goals,
										collaborative training sessions, and interactive forums, our
										platform fosters a sense of camaraderie. Trainees not only
										benefit from expert coaching but also from a community that
										encourages mutual support, motivation, and the celebration
										of individual and collective achievements. Join us in a
										community-driven approach to fitness and skill development.
									</p>
								</div>
							</li>

							<li data-aos='fade-up' data-aos-delay='500'>
								<i className='bx bx-help-circle icon-help'></i>{' '}
								<a
									data-bs-toggle='collapse'
									data-bs-target='#faq-list-5'
									className='collapsed'
								>
									How does Instant Coaches tailor its training programs to suit
									individual needs?{' '}
									<i className='bx bx-chevron-down icon-show'></i>
									<i className='bx bx-chevron-up icon-close'></i>
								</a>
								<div
									id='faq-list-5'
									className='collapse'
									data-bs-parent='.faq-list'
								>
									<p>
										Instant Coaches understands that each trainee is unique. Our
										training programs are meticulously crafted to cater to
										individual needs, ensuring a customized learning experience.
										From personalized workout plans to skill-specific drills, we
										focus on your strengths and areas of improvement,
										guaranteeing a training program that aligns with your
										aspirations.
									</p>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</section>
		</>
	);
};

export default FqaSection;
