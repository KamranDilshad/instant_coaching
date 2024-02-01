import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import '../../assets/css/coachregistration.css';
import { Link, useNavigate } from 'react-router-dom';
import { registerCoach } from '../../../redux/actions/CoachAction';

const CoachRegisteration = () => {
	const dispatch = useDispatch();
	const navigation = useNavigate();

	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			password: '',
			confirmPassword: '',
			email: '',
			phone: '',
			category: '',
			subCategory: '',
			gender: 'male',
			image: null,
		},
		validationSchema: Yup.object({
			firstName: Yup.string().required('Required'),
			lastName: Yup.string().required('Required'),
			password: Yup.string().required('Required'),
			confirmPassword: Yup.string()
				.oneOf([Yup.ref('password'), null], 'Passwords must match')
				.required('Required'),
			email: Yup.string().email('Invalid email address').required('Required'),
			phone: Yup.string()
				.matches(/^[0-9]{10}$/, 'Invalid phone number')
				.required('Required'),
			category: Yup.string().required('Required'),
			subCategory: Yup.string().required('Required'),
			image: Yup.mixed().required('Required'),
		}),

		onSubmit: async (values) => {
			const formData = new FormData();
			formData.append('firstName', values.firstName);
			formData.append('lastName', values.lastName);
			formData.append('password', values.password);
			formData.append('confirmPassword', values.confirmPassword);
			formData.append('email', values.email);
			formData.append('phone', values.phone);
			formData.append('category', values.category);
			formData.append('subCategory', values.subCategory);
			formData.append('gender', values.gender);
			formData.append('image', values.image);

			try {
				// Dispatch the action to post data to Redux using FormData
				await dispatch(registerCoach(formData));
				navigation('/login');
			} catch (error) {
				// Handle error
				console.error('Error registering coach:', error);
			}
		},
	});

	return (
		<>
			<div className='container register'>
				<div className='row'>
					<div className='col-md-3 register-left'>
						<img src='https://image.ibb.co/n7oTvU/logo_white.png' alt='' />
						<h3>Welcome</h3>
						<p>You are 30 seconds away from earning your own money!</p>
						<Link to={'/login'}>
							<input type='submit' name='' value='Login' />
						</Link>
						<br />
					</div>
					<div className='col-md-9 register-right'>
						<div className='tab-content' id='myTabContent'>
							<div
								className='tab-pane fade show active'
								id='home'
								role='tabpanel'
								aria-labelledby='home-tab'
							>
								<h3 className='register-heading'>Apply as a Coach</h3>
								<form onSubmit={formik.handleSubmit}>
									<div className='row register-form'>
										<div className='col-md-6'>
											<div className='form-group mb-3'>
												<input
													type='text'
													className='form-control'
													placeholder='First Name *'
													name='firstName'
													value={formik.values.firstName}
													onChange={formik.handleChange}
												/>
												{formik.touched.firstName && formik.errors.firstName ? (
													<div className='error'>{formik.errors.firstName}</div>
												) : null}
											</div>

											<div className='form-group mb-3'>
												<input
													type='text'
													className='form-control'
													placeholder='Last Name *'
													name='lastName'
													value={formik.values.lastName}
													onChange={formik.handleChange}
												/>
												{formik.touched.lastName && formik.errors.lastName ? (
													<div className='error'>{formik.errors.lastName}</div>
												) : null}
											</div>

											<div className='form-group mb-3'>
												<input
													type='password'
													className='form-control'
													placeholder='Password *'
													name='password'
													value={formik.values.password}
													onChange={formik.handleChange}
												/>
												{formik.touched.password && formik.errors.password ? (
													<div className='error'>{formik.errors.password}</div>
												) : null}
											</div>

											<div className='form-group mb-3'>
												<input
													type='password'
													className='form-control'
													placeholder='Confirm Password *'
													name='confirmPassword'
													value={formik.values.confirmPassword}
													onChange={formik.handleChange}
												/>
												{formik.touched.confirmPassword &&
												formik.errors.confirmPassword ? (
													<div className='error'>
														{formik.errors.confirmPassword}
													</div>
												) : null}
											</div>
										</div>

										<div className='col-md-6 '>
											<div className='form-group mb-3'>
												<input
													type='email'
													className='form-control'
													placeholder='Your Email *'
													name='email'
													value={formik.values.email}
													onChange={formik.handleChange}
												/>
												{formik.touched.email && formik.errors.email ? (
													<div className='error'>{formik.errors.email}</div>
												) : null}
											</div>

											<div className='form-group mb-3'>
												<input
													type='text'
													minLength='10'
													maxLength='10'
													name='phone'
													className='form-control'
													placeholder='Your Phone *'
													value={formik.values.phone}
													onChange={formik.handleChange}
												/>
												{formik.touched.phone && formik.errors.phone ? (
													<div className='error'>{formik.errors.phone}</div>
												) : null}
											</div>

											<div className='form-group mb-3'>
												<input
													type='text'
													className='form-control'
													placeholder='Category *'
													name='category'
													value={formik.values.category}
													onChange={formik.handleChange}
												/>
												{formik.touched.lastName && formik.errors.category ? (
													<div className='error'>{formik.errors.category}</div>
												) : null}
											</div>

											<div className='form-group mb-3'>
												<input
													type='text'
													className='form-control'
													placeholder='Sub_Category *'
													name='subCategory'
													value={formik.values.subCategory}
													onChange={formik.handleChange}
												/>
												{formik.touched.lastName &&
												formik.errors.subCategory ? (
													<div className='error'>
														{formik.errors.subCategory}
													</div>
												) : null}
											</div>
										</div>

										<div className='d-flex justify-content-between'>
											<div className='form-group mb-3'>
												<div className='maxl'>
													<label className='radio inline'>
														<input
															type='radio'
															name='gender'
															value='male'
															checked={formik.values.gender === 'male'}
															onChange={() =>
																formik.setFieldValue('gender', 'male')
															}
														/>
														<span> Male </span>
													</label>
													<label className='radio inline'>
														<input
															type='radio'
															name='gender'
															value='female'
															checked={formik.values.gender === 'female'}
															onChange={() =>
																formik.setFieldValue('gender', 'female')
															}
														/>
														<span>Female </span>
													</label>
												</div>
												<div className='col-md-6'>
													<div className='form-group mb-3'>
														<label htmlFor='image'>Profile Image *</label>
														<input
															type='file'
															id='image'
															name='image'
															accept='image/*'
															onChange={(event) => {
																formik.setFieldValue(
																	'image',
																	event.currentTarget.files[0]
																);
															}}
															onBlur={formik.handleBlur}
														/>
														{formik.touched.image && formik.errors.image ? (
															<div className='error'>{formik.errors.image}</div>
														) : null}
													</div>
												</div>
											</div>
											<div className='col-md-6 '>
												<input
													type='submit'
													className='btnRegister'
													value='Register'
												/>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CoachRegisteration;
