import axios from '../../axios.js';

export const APPROVE_USER = 'APPROVE_USER';

export const approveUser = (requestData) => (dispatch) => {
	axios.patch('/api/admin/updateApprovalStatus', requestData).then((res) => {
		dispatch({
			type: APPROVE_USER,
			payload: res.data,
		});
	});
};
