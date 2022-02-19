import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ShopContextProvider from './context/shopContextProvider';

ReactDOM.render(
	<React.StrictMode>
		<ShopContextProvider>
			<App />
		</ShopContextProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
