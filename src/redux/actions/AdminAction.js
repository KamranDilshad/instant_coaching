import axios from '../../axios.js';
import Swal from 'sweetalert2';

export const APPROVE_USER_SUCCESS = 'APPROVE_USER_SUCCESS';
export const APPROVE_USER_FAILURE = 'APPROVE_USER_FAILURE';

export const approveUserSuccess = (responseData) => ({
	type: APPROVE_USER_SUCCESS,
	payload: responseData,
});

export const approveUserFailure = (error) => ({
	type: APPROVE_USER_FAILURE,
	payload: error,
});

export const approveUser = (requestData) => async (dispatch) => {
	try {
		const response = await axios.patch(
			'/api/admin/updateApprovalStatus',
			requestData
		);

		if (response?.status === 200) {
			dispatch(approveUserSuccess(response.data));
			showSuccessAlert('Success', 'User approved successfully!');
		} else {
			dispatch(
				approveUserFailure(
					response?.data?.error || 'An unexpected error occurred'
				)
			);
			showErrorAlert(
				'Error',
				response?.data?.error || 'An unexpected error occurred'
			);
		}
	} catch (error) {
		dispatch(approveUserFailure('An unexpected error occurred'));
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
