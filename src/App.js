import { Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Home from './components/Home';
import Nav from './components/Nav';
import Navbar from './components/Navbar';
import ProductPage from './components/ProductPage';

const App = () => {
	return (
		<>
			<Navbar />
			<Nav />
			<Cart />
			<Routes>
				<Route path='/products/:handle' element={<ProductPage />} />
				<Route path='/' element={<Home />} />
			</Routes>
			<Footer />
		</>
	);
};

export default App;
