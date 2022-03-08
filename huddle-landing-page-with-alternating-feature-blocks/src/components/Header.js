import Button from "./styles/Button.styled";
import Logo from "./styles/Logo.styled";
import Container from "./styles/Container.styled";
import Flex from "./styles/Flex.styled";
import TextTile, { Heading, Paragraph } from "./TextTile";
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
				<Flex 
					gap={"1em"}
					mb={[7, null, "3.8em"]}>
					<Logo 
						width={["5.8em", null, 11]} 
						src="./images/logo.svg" />
					<Button 
						py={"0.6em"} 
						px={[5, 5, 8]} 
						variant='secondary' 
						fontSize={[0, 1, 1]} 
						fontWeight={6}
						boxShadow={1} 
						borderRadius={1} 
						letterSpacing={['stretched.2', null, 'none']}
						href="#">
						Try It Free
					</Button>
				</Flex>
				<Flex 
					flexDirection={["column", "column", "row"]}
					gap={"3.5em"}>
					<TextTile
						textAlign={['center', 'center', 'left']}
						px={[2, 2, 0]}
						pr={[null, null, 1]}>
						<Heading
							fontSize={[4, 4, 7]}
							letterSpacing={['compact.0', null, 'none']}
							lineHeight={[0, 0, 1]}
							mb={"0.8em"}
							mr={[0, 0, 2]}>
							Build the community your fans will love
						</Heading>
						<Paragraph
							fontSize={["0.9em", null, 2]}
							lineHeight={"1.47"}
							mb={"2.3em"}>
							Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.
						</Paragraph>
						<Button
							px={[9, 9, 12]}
							py={[2, 2, 3]}
							mb={[null, null, 5]}
							fontSize={"0.7em"}
							fontWeight={6}>
							Get Started For Free
						</Button>
					</TextTile>
					<Image 
						mb={1}
						width={["87%", null, "54%"]} 
						src="./images/illustration-mockups.svg" 
						alt="" />
				</Flex>
			</Container>
		</HeaderStyled>
	);

	// return (
	//     <StyledHeader bg="netural100" p={[1, null, 7]}>
	//         <Container width={[3, null, 2]}>
	//             <Nav as="nav" mb={[4, null, 8]} flexDirection={"row"}>
	//                 <Logo width={[0, null, 1]} src="./images/logo.svg" alt="" />
	//                 <Button p={6} fontSize={[0, null, 1]} variant="secondary">Try It Free</Button>
	//             </Nav>
	//             <Flex flex="8%" px={["1.1em", null, "0em"]} alignItems={["initial", null, "center"]} flexDirection={[null, null, "row"]}>
	//                 <div>
	//                     <H1 fontSize={[3, null, 4]} fontFamily="header" letterSpacing={1} lineHeight={0} mb={2}>Build The Community Your Fans Will Love</H1>
	//                     <P fontSize={1} letterSpacing={0} lineHeight={0} mb={3}>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</P>
	//                     <Button letterSpacing="0.5px" fontSize="0.6em" py="1.1em" variant="primary">Get Started For Free</Button>
	//                 </div>
	//                 <div>
	//                     <img width="100%" src="./images/illustration-mockups.svg" alt=""></img>
	//                 </div>
	//             </Flex>
	//         </Container>
	//     </StyledHeader>
	// );
}