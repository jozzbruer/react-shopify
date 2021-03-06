import { useEffect, useState, createContext } from 'react';
import Client from 'shopify-buy';

const client = Client.buildClient({
	domain: process.env.REACT_APP_SHOPIFY_DOMAIN,
	storefrontAccessToken: process.env.REACT_APP_SHOPIFY_API,
});

export const shopContext = createContext();

const ShopContextProvider = (props) => {
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
		const checkout = await client.checkout.fetch(checkoutId);
		setcheckout(checkout);
	};

	const addItemToCheckout = async (variantId, quantity) => {
		const lineItemToAdd = [{ variantId, quantity: parseInt(quantity, 10) }];
		const data = await client.checkout.addLineItems(checkout.id, lineItemToAdd);
		setcheckout(data);
		openCart();
	};

	const removeLineItem = async (id) => {
		const remove = await client.checkout.removeLineItems(checkout.id, id);
		setcheckout(remove);
	};

	const fetchAllProducts = async () => {
		const products = await client.product.fetchAll();
		setProducts(products);
	};

	const fetchProductWitHandle = async (handle) => {
		const product = await client.product.fetchByHandle(handle);
		setProduct(product);
	};

	const closeCart = () => {
		setIsCartOpen(false);
	};
	const openCart = () => {
		setIsCartOpen(true);
	};
	const closeMenu = () => {
		setIsmenuOpen(false);
	};
	const openMenu = () => {
		setIsmenuOpen(true);
	};

	return (
		<shopContext.Provider
			value={{
				product,
				products,
				checkout,
				closeCart,
				openCart,
				closeMenu,
				openMenu,
				fetchProductWitHandle,
				fetchAllProducts,
				addItemToCheckout,
				removeLineItem,
				isCartOpen,
				isMenuOpen,
			}}>
			{props.children}
		</shopContext.Provider>
	);
};

export default ShopContextProvider;
