import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './admin/Admin';
import { ContextProvider } from './admin/contexts/ContextProvider';

import Routing from './Routing';
import { Provider } from 'react-redux';
import { Store } from './redux/Store';
import Header from './website/home/Header';
import FooterSection from './website/home/FooterSection';

ReactDOM.render(
	<React.StrictMode>
		{/* <ContextProvider>
			<App />
		</ContextProvider> */}
		{/* <Routing></Routing> */}

		<Provider store={Store}>
			{/* <Header /> */}
			<Routing />
			{/* <FooterSection /> */}
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
