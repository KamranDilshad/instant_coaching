import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Ecommerce from '../Ecommerce';
import App from '../../Admin';
import Employees from '../Employees';
import Customers from '../Customers';
import Line from './Line';
import Stacked from './Stacked';
import Pie from './Pie';
import MainAdmin from '../../MainAdmin';

const AdminRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<MainAdmin />} />
			<Route path='/revenue' element={<Ecommerce />} />

			<Route path='/employees' element={<Employees />} />
			<Route path='/customers' element={<Customers />} />

			{/* apps  */}
			{/* <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/color-picker" element={<ColorPicker />} /> */}

			{/* charts  */}
			<Route path='/line' element={<Line />} />
			{/* <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} /> */}
			<Route path='/pie' element={<Pie />} />
			{/* <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} /> */}
			<Route path='/stacked' element={<Stacked />} />
		</Routes>
	);
};

export default AdminRoutes;
