// ProgramTableView.js
import React, { useEffect, useState } from 'react';
import {
	Table,
	Button,
	Dropdown,
	Tooltip,
	OverlayTrigger,
	Pagination,
	Card,
} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import BackButton from '../Button';
import FooterSection from '../../home/FooterSection';
import {
	deleteLunchProgram,
	getAllLunchPrograms,
} from '../../../redux/actions/LunchProgramAction';
// import { fetchPrograms, deleteProgram } from '../redux/actions/programActions';

const ProgramTableView = () => {
	const dispatch = useDispatch();
	const programs = useSelector((state) => state?.programs?.lunchPrograms);
	const [currentPage, setCurrentPage] = useState(1);
	const programsPerPage = 5; // Adjust as needed

	useEffect(() => {
		// Fetch programs when the component mounts
		dispatch(getAllLunchPrograms());
	}, [dispatch]);

	const handleDelete = (programId) => {
		// Handle delete logic here
		dispatch(deleteLunchProgram(programId));
	};

	const handleEdit = (programId) => {
		// Handle edit logic here
		console.log(`Editing program with ID ${programId}`);
	};

	const renderTooltip = (props) => (
		<Tooltip id='button-tooltip' {...props}>
			Program Description
		</Tooltip>
	);

	// Get current programs based on pagination
	const indexOfLastProgram = currentPage * programsPerPage;
	const indexOfFirstProgram = indexOfLastProgram - programsPerPage;
	const currentPrograms = programs.slice(
		indexOfFirstProgram,
		indexOfLastProgram
	);

	// Change page
	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return (
		<>
			<BackButton />

			<div className='container pt-20 mb-3'>
				<Card
					style={{
						background: 'linear-gradient(to right, #3931af, #00c6ff)',
						color: 'white',
					}}
				>
					<Card.Body>
						<Table striped bordered hover>
							<thead>
								<tr>
									<th>Title</th>
									<th>Description</th>
									<th>Price</th>
									<th>Actions</th>
								</tr>
							</thead>
							<tbody>
								{Array.isArray(currentPrograms) &&
								currentPrograms.length !== 0 ? (
									currentPrograms.map((program) => (
										<tr key={program.id}>
											<td>{program.title}</td>
											<td>
												<OverlayTrigger
													placement='right'
													delay={{ show: 250, hide: 400 }}
													overlay={renderTooltip}
												>
													<span>{program.description}</span>
												</OverlayTrigger>
											</td>
											<td>{program.price}</td>
											<td>
												<Dropdown>
													<Dropdown.Toggle
														style={{
															background: '#07B3F5',
															border: 'none',
															outline: 'none',
															boxShadow: 'none',
															padding: '0.5rem 1rem',
														}}
													>
														Actions
													</Dropdown.Toggle>
													<Dropdown.Menu>
														<Dropdown.Item
															onClick={() => handleEdit(program._id)}
														>
															Edit
														</Dropdown.Item>
														<Dropdown.Item
															onClick={() => handleDelete(program._id)}
														>
															Delete
														</Dropdown.Item>
													</Dropdown.Menu>
												</Dropdown>
											</td>
										</tr>
									))
								) : (
									<tr>
										<td colSpan='4'>NO program available...!</td>
									</tr>
								)}
							</tbody>
						</Table>

						<Pagination>
							{Array.from({
								length: Math.ceil(programs.length / programsPerPage),
							}).map((_, index) => (
								<Pagination.Item
									key={index + 1}
									active={index + 1 === currentPage}
									onClick={() => paginate(index + 1)}
								>
									{index + 1}
								</Pagination.Item>
							))}
						</Pagination>
					</Card.Body>
				</Card>
			</div>

			<FooterSection />
		</>
	);
};

export default ProgramTableView;
