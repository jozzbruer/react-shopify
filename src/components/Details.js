import { Box, Button, Text, Image, Heading, Flex } from '@chakra-ui/react';

const Details = (props) => {
	const resverseSection = props.reverse ? 'row-reverse' : 'row';
	return (
		<Box>
			<Flex flexDir={['column', resverseSection]} w='100%'>
				<Image
					src={props.image}
					objectFit='cover'
					w={['100%', '50%']}
					_hover={{ opacity: '70%' }}
				/>
				<Flex
					flexDir='column'
					w={['100%', '50%']}
					alignItems='center'
					justifyContent='center'
					p='2rem'>
					<Heading p='2rem'>{props.heading}</Heading>
					<Text p='2rem' textAlign='center'>
						{props.text}
					</Text>
					<Button
						w='10rem'
						background='#ff38bd'
						color='#fff'
						_hover={{ opacity: '70%' }}>
						Buy Now
					</Button>
				</Flex>
			</Flex>
		</Box>
	);
};

export default Details;
