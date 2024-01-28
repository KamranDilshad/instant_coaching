import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	GridComponent,
	ColumnsDirective,
	ColumnDirective,
	Page,
	Selection,
	Inject,
	Edit,
	Toolbar,
	Sort,
	Filter,
} from '@syncfusion/ej2-react-grids';
import {
	deleteTrainee,
	getAllTrainee,
	updateTrainee,
} from '../../redux/actions/TraineesAction';
import { Header } from '../components';

const Customers = () => {
	const dispatch = useDispatch();
	const [selectedRecords, setSelectedRecords] = useState([]);
	const allTrainees = useSelector(
		(state) => state?.traineeRegister?.traineeRegister
	);

	useEffect(() => {
		dispatch(getAllTrainee());
	}, [dispatch]);

	const handleDelete = () => {
		// Dispatch delete action using selectedRecords
		// You should implement your delete action in Redux
		if (selectedRecords.length > 0) {
			dispatch(deleteTrainee(selectedRecords));
			setSelectedRecords([]);
		}
	};

	const handleUpdate = () => {
		// Dispatch update action using selectedRecords
		// You should implement your update action in Redux
		if (selectedRecords.length > 0) {
			dispatch(updateTrainee(selectedRecords));
		}
	};

	const toolbarOptions = ['Delete', 'Update', 'Cancel'];
	const editing = { allowDeleting: true, allowEditing: true, mode: 'Normal' };

	const selectionsettings = {
		persistSelection: true,
		checkboxMode: 'ResetOnRowClick',
		checkboxOnly: true,
		enableSimpleMultiRowSelection: true,
		type: 'Multiple',
		change: (e) => {
			const selectedRecords = e.selectedRowIndexes.map(
				(index) => allTrainees[index]
			);
			setSelectedRecords(selectedRecords);
		},
	};

	return (
		<div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
			<Header category='Page' title='Trainee' />

			<div>
				<button onClick={handleDelete}>Delete Selected</button>
				<button onClick={handleUpdate}>Update Selected</button>
			</div>
			<GridComponent
				dataSource={allTrainees}
				enableHover={false}
				allowPaging
				pageSettings={{ pageCount: 5 }}
				selectionSettings={selectionsettings}
				toolbar={toolbarOptions}
				editSettings={editing}
				allowSorting
			>
				<ColumnsDirective>
					{[
						// { field: 'id', headerText: 'ID', width: '100' },
						// { field: 'name', headerText: 'Name', width: '150' },
						// { field: 'email', headerText: 'Email', width: '150' },
						// Add more columns based on your data structure
						{ type: 'checkbox', width: '50' },
						{
							field: 'fullName',
							headerText: 'Full Name',
							width: '150',
							textAlign: 'Center',
						},
						{
							field: 'email',
							headerText: 'Email',
							width: '150',
							textAlign: 'Center',
						},
						{
							field: 'role',
							headerText: 'Role',
							width: '150',
							textAlign: 'Center',
						},
					].map((item, index) => (
						<ColumnDirective key={index} {...item} />
					))}
				</ColumnsDirective>
				<Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
			</GridComponent>
		</div>
	);
};

export default Customers;
