import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import BackButton from '../Button';
import FooterSection from '../../home/FooterSection';
import { useDispatch } from 'react-redux';
import { addLunchProgram } from '../../../redux/actions/LunchProgramAction';
import { Link, useNavigate } from 'react-router-dom';

const LunchProgram = () => {
	const dispatch = useDispatch();
	const navigation = useNavigate();
	const [lunchProgramData, setLunchProgramData] = useState({
		title: '',
		description: '',
		price: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setLunchProgramData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addLunchProgram(lunchProgramData));
		navigation('/viewprogram');
	};

	return (
		<>
			<BackButton />
			<div className='container pt-20 mb-3'>
				<Card
					style={{
						background: 'linear-gradient(to right, #3931af, #00c6ff)',
					}}
				>
					<Card.Body>
						<Card.Title className='text-white mb-4'>Lunch Program</Card.Title>
						<Form onSubmit={handleSubmit}>
							<Form.Group className='mb-3'>
								<Form.Label htmlFor='title' className='text-white'>
									Title
								</Form.Label>
								<Form.Control
									type='text'
									id='title'
									name='title'
									value={lunchProgramData.title}
									onChange={handleChange}
									required
								/>
							</Form.Group>
							<Form.Group className='mb-3'>
								<Form.Label htmlFor='description' className='text-white'>
									Description
								</Form.Label>
								<Form.Control
									as='textarea'
									rows={3}
									id='description'
									name='description'
									value={lunchProgramData.description}
									onChange={handleChange}
									required
								/>
							</Form.Group>
							<Form.Group className='mb-3'>
								<Form.Label htmlFor='price' className='text-white'>
									Price
								</Form.Label>
								<Form.Control
									type='text'
									id='price'
									name='price'
									value={lunchProgramData.price}
									onChange={handleChange}
									required
								/>
							</Form.Group>
							<Button type='submit' variant='primary'>
								Add Lunch Program
							</Button>
							<Link to={'/viewprogram'}>
								<Button className='ms-4' variant='primary'>
									View Program
								</Button>
							</Link>
						</Form>
					</Card.Body>
				</Card>
			</div>
			<FooterSection />
		</>
	);
};

export default LunchProgram;
