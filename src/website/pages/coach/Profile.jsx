import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import BackButton from '../Button';
import Header from '../../home/Header';
import FooterSection from '../../home/FooterSection';
import { useNavigate } from 'react-router-dom';

const ProfileView = () => {
	const dispatch = useDispatch();
	// const user = useSelector((state) => state.auth.user);
	const user = '';

	const navigation = useNavigate();
	// Local state to manage form data
	const [formData, setFormData] = useState({
		firstName: user.firstName,
		lastName: user.lastName,
		password: '',
		confirmPassword: '',
		email: user.email,
		phone: user.phone,
		category: user.category,
		subCategory: user.subCategory,
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Validate and dispatch the update action
		// dispatch(updateUserProfile(formData));
		navigation('/login');
	};

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
						<Card.Title className='text-white mb-4'>Profile</Card.Title>
						<Form onSubmit={handleSubmit}>
							<Form.Group className='mb-3'>
								<Form.Label htmlFor='firstName' className='text-white'>
									First Name
								</Form.Label>
								<Form.Control
									type='text'
									id='firstName'
									name='firstName'
									value={formData.firstName}
									onChange={handleChange}
									required
								/>
							</Form.Group>
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
