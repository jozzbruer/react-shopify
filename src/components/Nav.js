import { useContext } from 'react';
import { shopContext } from '../context/shopContextProvider';
import {
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	Button,
	Grid,
	Text,
	Flex,
	CloseButton,
	Image,
	Box,
	VStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Nav = () => {
	const { isMenuOpen, closeMenu } = useContext(shopContext);
	return (
		<Drawer isOpen={isMenuOpen} placement='left' onClose={closeMenu} size='sm'>
			<DrawerOverlay />
			<DrawerContent>
				<DrawerCloseButton />
				<DrawerHeader>Menu</DrawerHeader>
				<DrawerBody>
					<VStack>
						<Link to='/'>About Us</Link>
						<Link to='/'>Learn More</Link>
					</VStack>
				</DrawerBody>
				<DrawerFooter textAlign='center'>
					<Text w='100%'>&copy; Copyright</Text>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
};

export default Nav;
