import { Button } from "./styles/Button.styled";
import Container from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import { H1, Logo, Nav, P, StyledHeader } from "./styles/Header.styled";

export function Header() {

    return (
        <StyledHeader bg="netural100">
            <Container>
                <Nav>
                    <Logo width="5.7em" src="./images/logo.svg" alt="" />
                    <Button fontSize="0.6em" fontFamily="'Open Sans', sans-serif">Try It Free</Button>
                </Nav>
                <Flex px="1.1em">
                    <div>
                        <H1>Build The Community Your Fans Will Love</H1>
                        <P>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</P>
                        <Button letterSpacing="0.5px" fontSize="0.6em" py="1.1em" bg="primary" color="white" primary>Get Started For Free</Button>
                    </div>
                    <img src="./images/illustration-mockups.svg" alt=""></img>
                </Flex>
            </Container>
        </StyledHeader>
    );
}