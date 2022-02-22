import React, { useContext, useEffect } from 'react';
import { shopContext } from '../context/shopContextProvider';
import { Flex, Spinner } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Box, Grid, Text, Image } from '@chakra-ui/react';
import Hero from './Hero';
import Details from './Details';
import RichText from './RichText';

const Home = () => {
	const { fetchAllProducts, products } = useContext(shopContext);

	useEffect(() => {
		fetchAllProducts();
	}, []);

	return (
		<Box>
			<Hero />
			<RichText
				heading='The relaxation you’ve been waiting for.'
				text='Our Bath bombs guarantee a fun, relaxing, and colorful night.'
			/>
			{products.length === 0 ? (
				<Box w='100%' h='30vh'>
					<Flex alignItems='center' justifyContent='center'>
						<Spinner color='red.700' size='md' />
					</Flex>
				</Box>
			) : (
				<Grid templateColumns='repeat(3, 1fr)'>
					{products.map((product) => (
						<Link to={`/products/${product.handle}`} key={product.id}>
							<Box
								_hover={{ opacity: '80%' }}
								textAlign='center'
								position='relative'>
								<Image src={product.images[0].src} />
								<Text
									position='absolute'
									fontWeight='bold'
									bottom='15%'
									w='100%'>
									{product.title}
								</Text>
								<Text
									position='absolute'
									bottom='7%'
									w='100%'
									color='gray.500'
									fontWeight='bold'>
									${product.variants[0].price}
								</Text>
							</Box>
						</Link>
					))}
				</Grid>
			)}
			<RichText heading='Treat yourself!' />
			<Details
				button
				image='https://cdn.shopify.com/s/files/1/0472/5705/9496/files/premium-bath-bombs.jpg?v=1610066758'
				heading='Heading'
				text="I'm baby kale chips twee skateboard tattooed, DIY iPhone ugh mixtape tumeric unicorn narwhal. Iceland shoreditch authentic, sartorial vegan twee flannel banh mi bushwick retro farm-to-table single-origin coffee. "
			/>
			<Details
				reverse
				button
				image='https://cdn.shopify.com/s/files/1/0472/5705/9496/files/bath-bomb-and-candle.jpg?v=1610066758'
				heading='Second Heading'
				text="I'm baby kale chips twee skateboard tattooed, DIY iPhone ugh mixtape tumeric unicorn narwhal. Iceland shoreditch authentic, sartorial vegan twee flannel banh mi bushwick retro farm-to-table single-origin coffee. "
			/>
		</Box>
	);
};

export default Home;
