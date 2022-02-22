import { Box, Button, Text, Image, Center } from '@chakra-ui/react';
import React from 'react';

const Hero = () => {
	return (
		<Box background='#FFA8E2' w='100%' position='relative' h='70vh'>
			<Image
				className='fade-in'
				h='100%'
				m='auto'
				objectFit='contain'
				objectPosition={['top', 'center']}
				src='https://cdn.shopify.com/s/files/1/0472/5705/9496/files/Bath_Bomb_-_Product-4_-_nobg_1.png?v=1610055851.jpg'
			/>
			<Text
				className='tracking-in-expand-fwd'
				pos='absolute'
				bottom='20%'
				width='100%'
				textAlign='center'
				color='#fff'
				fontWeight='bold'
				fontSize='4rem'>
				Introducing Bath Bombs
			</Text>
			<Center>
				<Button
					w='10rem'
					color='#fff'
					_hover={{ opacity: '70%' }}
					background='#ff38bd'
					pos='absolute'
					bottom='10%'>
					Shop Now
				</Button>
			</Center>
		</Box>
	);
};

export default Hero;
