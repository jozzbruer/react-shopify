import { Grid, Box, Text, Image, VStack } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../assets/footer.png';

const Footer = () => {
	return (
		<Box background='#FFA8E2' color='white' fontWeight='bold'>
			<Grid templateColumns={['repeat(1,1fr)', 'repeat(3 ,1fr)']}>
				<Image src={footer} height='14rem' />

				<VStack p='3rem'>
					<Link to='/'>The Green Blast</Link>
					<Link to='/'>The Blue Berry</Link>
					<Link to='/'>The Yellow Mellow</Link>
				</VStack>
				<VStack p='3rem'>
					<Link to='/'>About US</Link>
					<Link to='/'>Learn More</Link>
					<Link to='/'>Contact Us</Link>
				</VStack>
			</Grid>
			<Text textAlign='center' p='1rem'>
				copyright here
			</Text>
		</Box>
	);
};

export default Footer;
