import axios from '../../axios.js';
import Swal from 'sweetalert2';

export const PAYMENT_SUCCESS = 'PAYMENT_SUCCESS';
export const PAYMENT_FAILURE = 'PAYMENT_FAILURE';

export const paymentSuccess = (responseData) => ({
	type: PAYMENT_SUCCESS,
	payload: responseData,
});

export const paymentFailure = (error) => ({
	type: PAYMENT_FAILURE,
	payload: error,
});

export const payPayment = (requestData) => async (dispatch) => {
	try {
		const response = await axios.post(
			'/api/payment/create-payment-intent',
			requestData,
			{
				headers: {
					Authorization: 'Bearer YOUR_STRIPE_SECRET_KEY',
					'Content-Type': 'application/json', // Add this line if needed
				},
			}
		);

		if (response?.status === 200) {
			dispatch(paymentSuccess(response.data));
			showSuccessAlert('Success', 'Payment successfully!');
		} else {
			dispatch(
				paymentFailure(response?.data?.error || 'An unexpected error occurred')
			);
			showErrorAlert(
				'Error',
				response?.data?.error || 'An unexpected error occurred'
			);
		}
	} catch (error) {
		dispatch(paymentFailure('An unexpected error occurred'));
		showErrorAlert('Error', 'An unexpected error occurred');
	}
};

const showSuccessAlert = (title, text) => {
	Swal.fire({
		title: title,
		text: text,
		icon: 'success',
		confirmButtonText: 'OK',
	});
};

const showErrorAlert = (title, text) => {
	Swal.fire({
		title: title,
		text: text,
		icon: 'error',
		confirmButtonText: 'OK',
	});
};
