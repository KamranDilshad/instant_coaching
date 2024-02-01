import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../assets/css/coachregistration.css';
import { Link, useNavigate } from 'react-router-dom';
import { registerTrainee } from '../../redux/actions/TraineesAction';

const TraineeRegister = () => {
	const dispatch = useDispatch();
	const navigation = useNavigate();

	const formik = useFormik({
		initialValues: {
			fullName: '',
			email: '',
			password: '',
			confirmPassword: '',
		},
		validationSchema: Yup.object({
			fullName: Yup.string().required('Required'),
			password: Yup.string().required('Required'),
			confirmPassword: Yup.string()
				.oneOf([Yup.ref('password'), null], 'Passwords must match')
				.required('Required'),
			email: Yup.string().email('Invalid email address').required('Required'),
		}),
		onSubmit: (values) => {
			const requestData = {
				fullName: values.fullName,
				email: values.email,
				password: values.password,
				confirmPassword: values.confirmPassword,
			};

			dispatch(registerTrainee(requestData, navigation));
			// navigation('/login');
		},
	});

	return (
		<>
			<div className='mt-6 container register'>
				<div className='row'>
					<div className='col-md-3 register-left'>
						<img src='https://image.ibb.co/n7oTvU/logo_white.png' alt='' />
						<h3>Welcome</h3>
						<p>You are 30 seconds away from fit your health!</p>
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
								<h3 className='register-heading'>Apply as a Trainee</h3>
								<form onSubmit={formik.handleSubmit}>
									<div className='row register-form'>
										<div className='col-md-6'>
											<div className='form-group mb-3'>
												<input
													type='text'
													className='form-control'
													placeholder='Full Name *'
													name='fullName'
													value={formik.values.fullName}
													onChange={formik.handleChange}
												/>
												{formik.touched.fullName && formik.errors.fullName ? (
													<div className='error'>{formik.errors.fullName}</div>
												) : null}
											</div>

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
										</div>

										<div className='col-md-6 '>
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

										<div className='d-flex justify-center'>
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

export default TraineeRegister;
