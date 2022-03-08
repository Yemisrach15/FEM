import { Button } from "./styles/Button.styled";
import Container from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import { H1, Logo, Nav, P, StyledHeader } from "./styles/Header.styled";

export function Header() {

    return (
        <StyledHeader bg="netural100" p={[1, null, 7]}>
            <Container width={[3, null, 2]}>
                <Nav as="nav" mb={[4, null, 8]} flexDirection={"row"}>
                    <Logo width={[0, null, 1]} src="./images/logo.svg" alt="" />
                    <Button p={6} fontSize={[0, null, 1]} variant="secondary">Try It Free</Button>
                </Nav>
                <Flex flex="8%" px={["1.1em", null, "0em"]} alignItems={["initial", null, "center"]} flexDirection={[null, null, "row"]}>
                    <div>
                        <H1 fontSize={[3, null, 4]} fontFamily="header" letterSpacing={1} lineHeight={0} mb={2}>Build The Community Your Fans Will Love</H1>
                        <P fontSize={1} letterSpacing={0} lineHeight={0} mb={3}>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</P>
                        <Button letterSpacing="0.5px" fontSize="0.6em" py="1.1em" variant="primary">Get Started For Free</Button>
                    </div>
                    <div>
                        <img width="100%" src="./images/illustration-mockups.svg" alt=""></img>
                    </div>
                </Flex>
            </Container>
        </StyledHeader>
    );
}