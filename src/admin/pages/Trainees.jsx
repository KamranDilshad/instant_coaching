import React, { useEffect, useState } from 'react';
import {
	FaAngleDoubleLeft,
	FaAngleLeft,
	FaAngleRight,
	FaAngleDoubleRight,
} from 'react-icons/fa';
import { useStateContext } from '../contexts/ContextProvider';
import { useDispatch, useSelector } from 'react-redux';
import {
	deleteTrainee,
	getAllTrainee,
} from '../../redux/actions/TraineesAction';
import { Dropdown } from 'react-bootstrap';

import { approveUser } from '../../redux/actions/AdminAction';

const itemsPerPage = 10;

const Teainees = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const { currentColor } = useStateContext();
	const allTrainees = useSelector(
		(state) => state?.traineeRegister?.traineeRegister
	);
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const currentEmployees = allTrainees.slice(startIndex, endIndex);

	const totalPages = Math.ceil(allTrainees.length / itemsPerPage);

	const dispatch = useDispatch();

	useEffect(() => {
		console.log('🚀 ~ Teainees ~ allTrainees:', allTrainees);
		dispatch(getAllTrainee());
	}, [dispatch]);

	const goToPage = (page) => {
		setCurrentPage(page);
	};

	const handleDelete = (traineeId) => {
		console.log('🚀 ~ handleDelete ~ traineeId:', traineeId);
		dispatch(deleteTrainee(traineeId));
	};

	const handleApproved = (traineeId, role) => {
		console.log('🚀 ~ handleApproved ~ traineeId:', traineeId);
		console.log('🚀 ~ handleApproved ~ role:', role);
		const requestData = {
			userId: traineeId,
			role: role,
			isApproved: 'true',
		};
		dispatch(approveUser(requestData));
	};

	return (
		<div className='container mx-auto p-8 '>
			<h1 className='text-2xl font-bold mb-4  dark:text-white '>Trainees</h1>

			<div className='bg-white p-6 rounded-lg shadow-lg  '>
				<div className='card'>
					<table className='min-w-full divide-y divide-gray-200'>
						<thead>
							<tr>
								<th className='px-4 py-2 text-left'>Name</th>
								<th className='px-4 py-2 text-left'>Email</th>
								<th className='px-4 py-2 text-left'>Role</th>
								<th className='px-4 py-2 text-left'>Status</th>
								<th className='px-4 py-2 text-left'>Action</th>
							</tr>
						</thead>
						<tbody>
							{currentEmployees.map((employee) => (
								<tr key={employee.id}>
									<td className='px-4 py-2'>{employee.fullName}</td>
									<td className='px-4 py-2'>{employee.email}</td>

									<td className='px-4 py-2'>{employee.role}</td>
									<td className='px-4 py-2'>
										{employee.isApproved ? 'Approved' : 'Pending'}
									</td>
									<td>
										<Dropdown>
											<Dropdown.Toggle
												style={{
													background: currentColor,
													background: currentColor,
													border: 'none',
													outline: 'none',
													boxShadow: 'none',
													padding: '0.5rem 1rem',
												}}
												id='dropdown-basic'
											>
												Actions
											</Dropdown.Toggle>
											<Dropdown.Menu>
												{/* <Dropdown.Item onClick={() => handleEdit(employee._id)}>
													Edit
												</Dropdown.Item> */}
												<Dropdown.Item
													onClick={() => handleDelete(employee._id)}
												>
													Delete
												</Dropdown.Item>
												{employee.isApproved ? (
													''
												) : (
													<Dropdown.Item
														onClick={() =>
															handleApproved(employee._id, employee.role)
														}
													>
														Approved
													</Dropdown.Item>
												)}
											</Dropdown.Menu>
										</Dropdown>
									</td>
								</tr>
							))}
						</tbody>
					</table>

					<div className='mt-4 flex justify-end mb-2 '>
						<button
							onClick={() => goToPage(1)}
							className={`pagination-link mx-2 ${
								currentPage === 1
									? ' text-gray-600 cursor-not-allowed'
									: 'bg-blue-500 text-white'
							}`}
							disabled={currentPage === 1}
						>
							<FaAngleDoubleLeft />
						</button>
						<button
							onClick={() => goToPage(currentPage - 1)}
							className={`pagination-link mx-2 ${
								currentPage === 1
									? '  text-gray-600  cursor-not-allowed'
									: 'bg-blue-500 text-white'
							}`}
							disabled={currentPage === 1}
						>
							<FaAngleLeft />
						</button>

						{[...Array(totalPages)].map((_, index) => (
							<button
								key={index}
								onClick={() => goToPage(index + 1)}
								className={`pagination-link mx-2 px-2 rounded-full ${
									currentPage === index + 1 ? '  text-white' : 'bg-gray-300'
								}`}
								style={{ background: currentColor }}
							>
								{index + 1}
							</button>
						))}

						<button
							onClick={() => goToPage(currentPage + 1)}
							className={`pagination-link mx-2 ${
								currentPage === totalPages
									? ' text-gray-600 cursor-not-allowed'
									: 'bg-blue-500 text-white'
							}`}
							disabled={currentPage === totalPages}
						>
							<FaAngleRight />
						</button>
						<button
							onClick={() => goToPage(totalPages)}
							className={`pagination-link mx-2 ${
								currentPage === totalPages
									? ' text-gray-600 cursor-not-allowed'
									: 'bg-blue-500 text-white'
							}`}
							disabled={currentPage === totalPages}
						>
							<FaAngleDoubleRight />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Teainees;
