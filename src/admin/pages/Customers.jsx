import React, { useEffect } from 'react';
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

import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTrainee } from '../../redux/actions/TraineesAction';

const Customers = () => {
	const dispatch = useDispatch();
	const selectionsettings = { persistSelection: true };
	const toolbarOptions = ['Delete'];
	const editing = { allowDeleting: true, allowEditing: true };

	const allTrainees = useSelector(
		(state) => state?.traineeRegister?.traineeRegister
	);

	useEffect(() => {
		dispatch(getAllTrainee());
	}, []);

	return (
		<div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
			<Header category='Page' title='Customers' />
			<GridComponent
				dataSource={customersData}
				enableHover={false}
				allowPaging
				pageSettings={{ pageCount: 5 }}
				selectionSettings={selectionsettings}
				toolbar={toolbarOptions}
				editSettings={editing}
				allowSorting
			>
				<ColumnsDirective>
					{/* eslint-disable-next-line react/jsx-props-no-spreading */}
					{customersGrid.map((item, index) => (
						<ColumnDirective key={index} {...item} />
					))}
				</ColumnsDirective>
				<Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
			</GridComponent>
		</div>
	);
};

export default Customers;
