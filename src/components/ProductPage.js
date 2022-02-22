import { Spinner } from '@chakra-ui/react';
import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { shopContext } from '../context/shopContextProvider';
import {
	Box,
	Grid,
	Text,
	Image,
	Button,
	Heading,
	Flex,
} from '@chakra-ui/react';
const ProductPage = () => {
	const { handle } = useParams();
	const { fetchProductWitHandle, addItemToCheckout, product } =
		useContext(shopContext);

	useEffect(() => {
		fetchProductWitHandle(handle);
	}, []);

	if (!product.id)
		return (
			<Box w='100%' h='30vh'>
				<Flex alignItems='center' justifyContent='center'>
					<Spinner color='red.700' size='md' />
				</Flex>
			</Box>
		);

	return (
		<Box padding='2rem'>
			<Grid templateColumns={['repeat(1,1fr)', 'repeat(2, 1fr)']} m='auto'>
				<Flex justifyContent='center' alignItems='center'>
					<Image src={product.images[0].src} />
				</Flex>
				<Flex
					flexDirection='column'
					alignItems='center'
					justifyContent='center'
					px='2rem'>
					<Heading paddingBottom='2rem'>{product.title}</Heading>
					<Text paddingBottom='2rem' fontWeight='bold'>
						${product.variants[0].price}
					</Text>
					<Text paddingBottom='2rem' color='gray.500'>
						{product.description}
					</Text>
					<Button
						_hover={{ opacity: '70%' }}
						color='white'
						w='10rem'
						background='#FF38bd'
						onClick={() => addItemToCheckout(product.variants[0].id, 1)}>
						Add To Cart
					</Button>
				</Flex>
			</Grid>
		</Box>
	);
};

export default ProductPage;
