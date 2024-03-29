import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { login } from '../redux/actions/AuthAction';
import logo from '../website/assets/img/logo.png';

const LoginAdmin = () => {
	const dispatch = useDispatch();
	const navigation = useNavigate();
	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: Yup.object({
			email: Yup.string().email('Invalid email address').required('Required'),
			password: Yup.string().required('Required'),
		}),
		onSubmit: async (values) => {
			const credentials = {
				email: values.email,
				password: values.password,
				role: 'admin',
			};
			await dispatch(login(credentials, navigation));
		},
	});

	return (
		<div>
			<section
				className='h-100 gradient-form'
				style={{ backgroundColor: '#eee' }}
			>
				<div className='container h-100  '>
					<div className='row d-flex justify-content-center align-items-center h-100 '>
						<div className='col-xl-10 '>
							<div className='card rounded-3 text-color  h-75 mb-4'>
								<div className='row g-0'>
									<div className='col-lg-6'>
										<div className='card-body p-md-5 mx-md-4'>
											<div className='text-center'>
												<p className='text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-2'>
													Log in
												</p>
												<div class='text-center '>
													<img
														src={logo}
														class='img-fluid rounded mx-auto d-block'
														alt='login image'
													/>
												</div>
												<h4 className='mt-3 mb-2 pb-1'>
													We are The Admin Team
												</h4>
											</div>

											<form onSubmit={formik.handleSubmit}>
												<p>Please login to your account</p>

												<div className='form-outline mb-3 mt-2'>
													<label
														className='form-label'
														htmlFor='form2Example11'
													>
														Email
													</label>
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

												<div className='form-outline mb-3'>
													<label
														className='form-label'
														htmlFor='form2Example22'
													>
														Password
													</label>
													<input
														type='password'
														id='form2Example22'
														className='form-control'
														placeholder='Password'
														name='password'
														value={formik.values.password}
														onChange={formik.handleChange}
													/>

													{formik.touched.password && formik.errors.password ? (
														<div className='error'>
															{formik.errors.password}
														</div>
													) : null}
												</div>

												<div className='text-end pt-1 mb-2 '>
													<button
														type='submit'
														className='btn btn-primary btn-block fa-lg gradient-custom-2 mb-3'
													>
														Login
													</button>
												</div>
											</form>
										</div>
									</div>
									<div className='col-lg-6 d-flex align-items-center gradient-custom-2'>
										<div className='text-white px-3 py-4 p-md-5 mx-md-4'>
											<h4 className='mb-4'>We are more than just a company</h4>
											<p className='small mb-0'>
												Lorem ipsum dolor sit amet, consectetur adipisicing
												elit, sed do eiusmod tempor incididunt ut labore et
												dolore magna aliqua. Ut enim ad minim veniam, quis
												nostrud exercitation ullamco laboris nisi ut aliquip ex
												ea commodo consequat.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default LoginAdmin;
