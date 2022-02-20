import React, { useContext, useEffect } from 'react';
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
	Link,
	Box,
} from '@chakra-ui/react';

const Cart = () => {
	const { isCartOpen, closeCart, checkout, removeLineItem } =
		useContext(shopContext);
	return (
		<>
			<Drawer
				isOpen={isCartOpen}
				placement='right'
				onClose={closeCart}
				size='sm'>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>Your Cart</DrawerHeader>

					<DrawerBody>
						{checkout.lineItems?.length ? (
							checkout.lineItems.map((item) => (
								<Grid key={item.id} templateColumns='repeat(4,1fr)'>
									<Flex alignItems='center' justifyContent='center'>
										<CloseButton onClick={() => removeLineItem(item.id)} />
									</Flex>
									<Flex>
										<Image src={item.variant.image.src} />
									</Flex>
									<Flex alignItems='center' justifyContent='center'>
										<Text>{item.title}</Text>
									</Flex>
									<Flex alignItems='center' justifyContent='center'>
										<Text>{item.variant.price}</Text>
									</Flex>
								</Grid>
							))
						) : (
							<Box align='center'>Empty Cart</Box>
						)}
					</DrawerBody>

					{checkout.lineItems?.length ? (
						<DrawerFooter>
							<Button w='100%' colorScheme='blue'>
								<Link href={checkout.webUrl}>Checkout</Link>
							</Button>
						</DrawerFooter>
					) : null}
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default Cart;
