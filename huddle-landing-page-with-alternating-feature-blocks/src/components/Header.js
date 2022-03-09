import Button from "./styles/Button.styled";
import Logo from "./styles/Logo.styled";
import Container from "./styles/Container.styled";
import Flex from "./styles/Flex.styled";
import TextTile, { Heading, Paragraph } from "./styles/TextTile.styled";
import Image from "./styles/Image.styled";
import styled from "styled-components";
import { color, space, layout, compose } from 'styled-system';

const HeaderStyled = styled.header`
	${compose(color, space, layout)}
`

export function Header() {
	return (
		<HeaderStyled bg={'netural100'} py={["1.3em", null, 6]}>
			<Container width={['medium', 'extraSmall', 'small']}>
				<Flex gap={"1em"} mb={[9, null, "3.8em"]}>
					<Logo 
						width={["5.8em", null, 11]} 
						src="./images/logo.svg" />
					<Button 
						py={"0.6em"} 
						px={[5, 5, 8]} 
						variant='secondary' 
						fontSize={[0, "0.6em", 1]} 
						fontWeight={6}
						boxShadow={1} 
						borderRadius={2} 
						letterSpacing={['stretched.2', null, 'none']}
						href="#">
						Try It Free
					</Button>
				</Flex>
				<Flex 
					flexDirection={["column", "column", "row"]}
					gap={{xs: 7, }}>
					<TextTile
						textAlign={['center', 'center', 'left']}
						px={[2, 2, 0]}
						pr={[null, null, 1]}>
						<Heading
							fontSize={{xs: 4, hybrid: 7}}
							letterSpacing={['compact.0', null, 'none']}
							lineHeight={[0, 0, 1]}
							mb={"0.8em"}
							mr={[0, 0, 2]}>
							Build the community your fans will love
						</Heading>
						<Paragraph
							fontSize={{xs: "0.9em", hybrid: 2}}
							lineHeight={"1.47"}
							mb={4}>
							Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.
						</Paragraph>
						<Button
							px={[9, 9, 12]}
							py={[2, 2, 3]}
							m={['0 auto', null, 0]}
							mb={[null, null, 5]}
							fontSize={"0.7em"}
							fontWeight={6}
							display={'block'}
							href="#">
							Get Started For Free
						</Button>
					</TextTile>
					<Image 
						mb={1}
						width={{xs: "87%", md: "40%", lg: "54%", hybrid: "45%"}} 
						src="./images/illustration-mockups.svg" 
						alt="" />
				</Flex>
			</Container>
		</HeaderStyled>
	);
}