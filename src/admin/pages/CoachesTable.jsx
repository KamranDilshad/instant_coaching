import React, { useEffect, useState } from 'react';
import {
	FaAngleDoubleLeft,
	FaAngleLeft,
	FaAngleRight,
	FaAngleDoubleRight,
} from 'react-icons/fa';
import { useStateContext } from '../contexts/ContextProvider';
import { useDispatch, useSelector } from 'react-redux';

import { Dropdown } from 'react-bootstrap';

import { approveUser } from '../../redux/actions/AdminAction';
import { deleteCoach, getAllCoach } from '../../redux/actions/CoachAction';

const itemsPerPage = 10;

const CoachesTable = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const { currentColor } = useStateContext();
	const allCoaches = useSelector(
		(state) => state?.coachRegister?.coachRegister
	);
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const currentEmployees = allCoaches.slice(startIndex, endIndex);

	const totalPages = Math.ceil(allCoaches.length / itemsPerPage);

	const dispatch = useDispatch();

	useEffect(() => {
		console.log('🚀 ~ CoachesTable ~ allCoaches:', allCoaches);
		dispatch(getAllCoach());
	}, [dispatch]);

	const goToPage = (page) => {
		setCurrentPage(page);
	};

	const handleDelete = (traineeId) => {
		console.log('🚀 ~ handleDelete ~ traineeId:', traineeId);
		dispatch(deleteCoach(traineeId));
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
								<th className='px-4 py-2 text-left'></th>
								<th className='px-4 py-2 text-left'>First Name</th>
								<th className='px-4 py-2 text-left'>Last Name</th>
								<th className='px-4 py-2 text-left'>Email</th>
								<th className='px-4 py-2 text-left'>Role</th>
								<th className='px-4 py-2 text-left'>Category</th>
								<th className='px-4 py-2 text-left'>Sub-Category</th>
								<th className='px-4 py-2 text-left'>Gender</th>
								<th className='px-4 py-2 text-left'>Status</th>
								<th className='px-4 py-2 text-left'>Action</th>
							</tr>
						</thead>
						<tbody>
							{currentEmployees.map((employee) => (
								<tr key={employee.id}>
									<td className='px-4 py-2'>
										<img
											src={employee.image}
											alt={`${employee.firstName} ${employee.lastName}`}
											style={{
												width: '50px',
												height: '50px',
												borderRadius: '50%',
											}}
										/>
									</td>
									<td className='px-4 py-2'>{employee.firstName}</td>
									<td className='px-4 py-2'>{employee.lastName}</td>
									<td className='px-4 py-2'>{employee.email}</td>
									<td className='px-4 py-2'>{employee.role}</td>
									<td className='px-4 py-2'>{employee.category}</td>
									<td className='px-4 py-2'>{employee.subCategory}</td>
									<td className='px-4 py-2'>{employee.gender}</td>

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

export default CoachesTable;
