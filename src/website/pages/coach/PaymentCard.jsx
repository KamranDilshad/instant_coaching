import React, { useState } from 'react';
import FooterSection from '../../home/FooterSection';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { payPayment } from '../../../redux/actions/PaymentAction';

const PaymentForm = () => {
	const { programId, trainerId } = useParams();
	console.log('🚀 ~ PaymentForm ~ trainerId:', trainerId);
	console.log('🚀 ~ PaymentForm ~ programId:', programId);
	// const [cardNumber, setCardNumber] = useState('');
	// const [expiryDate, setExpiryDate] = useState('');
	// const [cvc, setCvc] = useState('');
	const [amount, setAmount] = useState('');
	const dispatch = useDispatch();

	// const handleCardNumberChange = (e) => {
	// 	setCardNumber(e.target.value);
	// };

	// const handleExpiryDateChange = (e) => {
	// 	setExpiryDate(e.target.value);
	// };

	const handleSetAmountChange = (e) => {
		setAmount(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const requestData = {
			programId: programId,
			userId: trainerId,
			amount: amount,
		};

		dispatch(payPayment(requestData));
	};

	return (
		<>
			<div className='d-flex justify-center align-items-center mb-40'>
				<div className='container mt-16 w-50  '>
					<div
						className='card'
						style={{
							background: 'linear-gradient(to right, #3931af, #00c6ff)',
						}}
					>
						<div className='card-body'>
							<h5 className='card-title text-white'>Payment Information</h5>
							<form onSubmit={handleSubmit}>
								<div className='form-group'>
									<label htmlFor='cardNumber ' className='text-white'>
										Ammount
									</label>
									<input
										type='text'
										className='form-control'
										id='cardNumber'
										value={amount}
										onChange={handleSetAmountChange}
										required
									/>
								</div>
								{/* <div className='form-group'>
									<label htmlFor='cardNumber ' className='text-white'>
										Card Number
									</label>
									<input
										type='text'
										className='form-control'
										id='cardNumber'
										value={cardNumber}
										onChange={handleCardNumberChange}
										required
									/>
								</div>

								<div className='form-group '>
									<label htmlFor='expiryDate' className='text-white'>
										Expiry Date
									</label>
									<input
										type='text'
										className='form-control'
										id='expiryDate'
										value={expiryDate}
										onChange={handleExpiryDateChange}
										required
									/>
								</div>
								<div className='form-group '>
									<label htmlFor='cvc' className='text-white'>
										CVC
									</label>
									<input
										type='text'
										className='form-control'
										id='cvc'
										value={cvc}
										onChange={handleCvcChange}
										required
									/>
								</div> */}

								<button type='submit' className='btn btn-primary mt-2'>
									Submit Payment
								</button>
								<Link to={'/cricketcoach'}>
									<button type='submit' className='btn btn-primary mt-2 ms-2'>
										Cancel
									</button>
								</Link>
							</form>
						</div>
					</div>
				</div>
			</div>
			<FooterSection />
		</>
	);
};

export default PaymentForm;
