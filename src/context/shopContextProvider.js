import { useEffect, useState, createContext } from 'react';
import Client from 'shopify-buy';

const client = Client.buildClient({
	domain: process.env.REACT_APP_SHOPIFY_DOMAIN,
	storefrontAccessToken: process.env.REACT_APP_SHOPIFY_API,
});

const ShopContextProvider = (props) => {
	const shopContext = createContext();
	const [product, setProduct] = useState({});
	const [products, setProducts] = useState([]);
	const [checkout, setcheckout] = useState({});
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [isMenuOpen, setIsmenuOpen] = useState(false);

	useEffect(() => {
		if (localStorage.checkoutId) fetchCheckout(localStorage.checkoutId);
		else createCheckout();
	}, []);

	const createCheckout = async () => {
		const checkout = await client.checkout.create();
		localStorage.setItem('chekoutId', checkout.id);
		setcheckout(checkout);
	};

	const fetchCheckout = async (checkoutId) => {
		const checkout = await client.checkout.fetch();
		setcheckout(checkout);
	};

	const addItemToCheckout = async () => {};

	const removeLineItem = async (id) => {};

	const fetchAllProducts = async () => {
		const products = await client.product.fetchAll();
		setProducts(products);
	};

	const fetchProductWitHandle = async (handle) => {
		const product = await client.product.fetchByHandle(handle);
		setProduct(product);
	};

	const closeCart = () => {};
	const openCart = () => {};
	const closeMenu = () => {};
	const openMenu = () => {};

	console.log(checkout);
	return (
		<shopContext.Provider
			value={{
				product,
				products,
				checkout,
			}}>
			{props.children}
		</shopContext.Provider>
	);
};

export default ShopContextProvider;
