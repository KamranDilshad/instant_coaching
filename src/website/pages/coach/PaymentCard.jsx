import React, { useState } from 'react';
import Swal from 'sweetalert2';
import FooterSection from '../../home/FooterSection';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from "../../../axios.js"

const PaymentForm = () => {
  const { programId, trainerId } = useParams();
  console.log('🚀 ~ PaymentForm ~ trainerId:', trainerId);
  console.log('🚀 ~ PaymentForm ~ programId:', programId);
  const [amount, setAmount] = useState('');
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState('');

  const handleSetAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements || clientSecret) {
      return;
    }

    const requestData = {
      programId: programId,
      userId: trainerId,
      amount: Number(amount) * 100, 
    };

    setClientSecret(''); 
    await fetchClientSecret(requestData);
  };

  const fetchClientSecret = async (requestData) => {
    try {
      const response = await axios.post('/api/payment/create-payment-intent', requestData);
      if (response?.data?.clientSecret) {
        setClientSecret(response.data.clientSecret);
        await confirmPayment(response.data.clientSecret);
      }
    } catch (error) {
      console.error('Error fetching client secret:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong fetching the client secret!',
      });
    }
  };

  const confirmPayment = async (clientSecret) => {
    if (!clientSecret) return;

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (result.error) {
      console.log(result.error.message);
      Swal.fire({
        icon: 'error',
        title: 'Payment Error',
        text: result.error.message,
      });
    } else if (result.paymentIntent && result.paymentIntent.status === 'succeeded') {
      const paymentData = {
        programId,
        trainerId,
        amount: Number(amount) * 100, 
        paymentStatus: 'success', 
        paymentDate: new Date().toISOString() 
      };
      try {
        console.log(paymentData, "payment data")
        await axios.post('/api/payment/success', paymentData);
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Payment succeeded and recorded!',
        });
      } catch (error) {
        console.error('Error recording payment:', error);
        Swal.fire({
          icon: 'error',
          title: 'Recording Error',
          text: 'Payment succeeded, but recording failed!',
        });
      }
      console.log('Payment succeeded!');
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Payment succeeded!',
      });
    }
  };

  return (
    <>
      <div className='d-flex justify-center align-items-center mb-40'>
        <div className='container mt-16 w-50'>
          <div className='card' style={{ background: 'linear-gradient(to right, #3931af, #00c6ff)' }}>
            <div className='card-body'>
              <h5 className='card-title text-white'>Payment Information</h5>
              <form onSubmit={handleSubmit}>
                <div className='form-group'>
                  <label htmlFor='amount' className='text-white'>
                    Amount
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='amount'
                    value={amount}
                    onChange={handleSetAmountChange}
                    required
                  />
                </div>

                <div className='form-group'>
                  <label htmlFor='cardElement' className='text-white'>Card Details</label>
                  <CardElement id='cardElement' className='form-control' />
                </div>

                <button type='submit' className='btn btn-primary mt-2'>
                  Submit Payment
                </button>
                <Link to={'/cricketcoach'}>
                  <button type='button' className='btn btn-primary mt-2 ms-2'>
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
