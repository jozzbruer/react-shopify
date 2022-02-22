import { Box, Heading, Text, Flex } from '@chakra-ui/react';

const RichText = (props) => {
	return (
		<Box p='1rem'>
			<Flex flexDir='column' alignItems='center' justifyContent='center'>
				<Heading py='2rem'>{props.heading}</Heading>
				<Text pb='2rem'>{props.text}</Text>
			</Flex>
		</Box>
	);
};

export default RichText;
