import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import BackButton from '../Button';
import Header from '../../home/Header';
import FooterSection from '../../home/FooterSection';
import { useNavigate } from 'react-router-dom';
import { updateCoach } from '../../../redux/actions/CoachAction';
import avtar from '../../assets/img/team/team-4.jpg';
import { updateTrainee } from '../../../redux/actions/TraineesAction';

const ProfileView = () => {
	const dispatch = useDispatch();

	const user = useSelector((state) => state?.auth?.user);

	const navigation = useNavigate();
	// Local state to manage form data
	const [formData, setFormData] = useState(
		user.role == 'trainer'
			? {
					firstName: user.firstName,
					lastName: user.lastName,
					email: user.email,
					phone: user.phone,
					category: user.category,
					subCategory: user.subCategory,
					_id: user._id,
			  }
			: {
					fullName: user.fullName,
					email: user.email,
					_id: user._id,
			  }
	);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (user.role == 'trainer') {
			dispatch(updateCoach(formData));
		} else {
			dispatch(updateTrainee(formData));
		}
		navigation('/login');
	};

	console.log('🚀 ~ handleSubmit ~ formData:', formData);

	return (
		<>
			<BackButton />

			<div className='container  pt-20 mb-3'>
				<Card
					style={{
						background: 'linear-gradient(to right, #3931af, #00c6ff)',
					}}
				>
					<Card.Body>
						<Card.Title className='text-white mb-4'>
							Profile
							<div className='  d-flex justify-center'>
								<img
									src={user.role == 'trainer' ? user.image : avtar}
									// alt={`${user.firstName} ${user.lastName}`}
									style={{
										width: '100px',
										height: '100px',
										borderRadius: '50%',
									}}
									className='user-avatar'
								/>
							</div>
						</Card.Title>
						<Form onSubmit={handleSubmit}>
							<Form.Group className='mb-3'>
								<Form.Label htmlFor='firstName' className='text-white'>
									{user.role == 'trainer' ? 'First Name' : 'Full Name'}
								</Form.Label>
								<Form.Control
									type='text'
									id={user.role == 'trainer' ? 'firstName' : 'fullName'}
									name={user.role == 'trainer' ? 'firstName' : 'fullName'}
									value={
										user.role == 'trainer'
											? formData.firstName
											: formData.fullName
									}
									onChange={handleChange}
									required
								/>
							</Form.Group>
							{user.role == 'trainer' ? (
								<>
									<Form.Group className='mb-3'>
										<Form.Label htmlFor='lastName' className='text-white'>
											Last Name
										</Form.Label>
										<Form.Control
											type='text'
											id='lastName'
											name='lastName'
											value={formData.lastName}
											onChange={handleChange}
											required
										/>
									</Form.Group>
									<Form.Group className='mb-3'>
										<Form.Label htmlFor='email' className='text-white'>
											Email
										</Form.Label>
										<Form.Control
											type='email'
											id='email'
											name='email'
											value={formData.email}
											onChange={handleChange}
											required
										/>
									</Form.Group>
									<Form.Group className='mb-3'>
										<Form.Label htmlFor='phone' className='text-white'>
											Phone
										</Form.Label>
										<Form.Control
											type='tel'
											id='phone'
											name='phone'
											value={formData.phone}
											onChange={handleChange}
											required
										/>
									</Form.Group>
									<Form.Group className='mb-3'>
										<Form.Label htmlFor='category' className='text-white'>
											Category
										</Form.Label>
										<Form.Control
											type='text'
											id='category'
											name='category'
											value={formData.category}
											onChange={handleChange}
											required
										/>
									</Form.Group>
									<Form.Group className='mb-3'>
										<Form.Label htmlFor='subCategory' className='text-white'>
											Subcategory
										</Form.Label>
										<Form.Control
											type='text'
											id='subCategory'
											name='subCategory'
											value={formData.subCategory}
											onChange={handleChange}
											required
										/>
									</Form.Group>
								</>
							) : (
								<Form.Group className='mb-3'>
									<Form.Label htmlFor='email' className='text-white'>
										Email
									</Form.Label>
									<Form.Control
										type='email'
										id='email'
										name='email'
										value={formData.email}
										onChange={handleChange}
										required
									/>
								</Form.Group>
							)}

							<Button type='submit' variant='primary'>
								Update Profile
							</Button>
						</Form>
					</Card.Body>
				</Card>
			</div>

			<FooterSection />
		</>
	);
};

export default ProfileView;
