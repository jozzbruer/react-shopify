import { Flex, Icon, Image, Box, Badge } from '@chakra-ui/react';
import { useContext } from 'react';
import { shopContext } from '../context/shopContextProvider';
import { MdMenu, MdShoppingBasket } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const { openCart, openMenu, checkout } = useContext(shopContext);

	return (
		<Flex
			backgroundColor='#FFA8E2'
			flexDir='row'
			justifyContent='space-between'
			p='2rem'>
			<Icon
				cursor='pointer'
				onClick={openMenu}
				fill='white'
				as={MdMenu}
				w='30px'
				h='30px'></Icon>
			<Link to='/'>
				<Image
					src='https://cdn.shopify.com/s/files/1/0472/5705/9496/files/Logologo_1.svg?v=1610055540'
					w={100}
					h={100}
				/>
			</Link>
			<Box>
				<Icon
					cursor='pointer'
					onClick={openCart}
					fill='white'
					as={MdShoppingBasket}
					w='30px'
					h='30px'
				/>
				<Badge
					background='#FF38bd'
					color='white'
					fontWeight='bold'
					borderRadius='10%'>
					{checkout.lineItems ? checkout.lineItems.length : 0}
				</Badge>
			</Box>
		</Flex>
	);
};

export default Navbar;
