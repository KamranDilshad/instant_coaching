import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import BackButton from '../Button';
import FooterSection from '../../home/FooterSection';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateLunchProgram } from '../../../redux/actions/LunchProgramAction';

const UpdateProgram = () => {
	const { id } = useParams();
	const proramData = useSelector((state) => state?.programs?.lunchPrograms);
	const existProgram = proramData.filter((program) => program._id == id);
	const { title, description, price } = existProgram[0];
	const dispatch = useDispatch();
	const navigation = useNavigate();
	const [UpdateProgramData, setUpdateProgramData] = useState({
		title: title,
		description: description,
		price: price,
		_id: id,
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUpdateProgramData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(updateLunchProgram(UpdateProgramData));
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
						<Card.Title className='text-white mb-4'>Update Program</Card.Title>
						<Form onSubmit={handleSubmit}>
							<Form.Group className='mb-3'>
								<Form.Label htmlFor='title' className='text-white'>
									Title
								</Form.Label>
								<Form.Control
									type='text'
									id='title'
									name='title'
									value={UpdateProgramData.title}
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
									value={UpdateProgramData.description}
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
									value={UpdateProgramData.price}
									onChange={handleChange}
									required
								/>
							</Form.Group>
							<Button type='submit' variant='primary'>
								Update Program
							</Button>
							<Button className='ms-4' variant='primary'>
								Back
							</Button>
						</Form>
					</Card.Body>
				</Card>
			</div>
			<FooterSection />
		</>
	);
};

export default UpdateProgram;
