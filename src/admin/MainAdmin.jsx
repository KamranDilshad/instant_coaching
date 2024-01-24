import React from 'react';
import { ContextProvider } from './contexts/ContextProvider';
import Admin from './Admin';

const MainAdmin = () => {
	return (
		<>
			<ContextProvider>
				<Admin />
			</ContextProvider>
		</>
	);
};

export default MainAdmin;
