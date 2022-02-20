import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import ShopContextProvider from './context/shopContextProvider';
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.render(
	<React.StrictMode>
		<ChakraProvider>
			<ShopContextProvider>
				<Router>
					<App />
				</Router>
			</ShopContextProvider>
		</ChakraProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
