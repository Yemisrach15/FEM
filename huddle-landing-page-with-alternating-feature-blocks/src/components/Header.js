import { Button } from "./styled/Button.styled";
import Container from "./styled/Container.styled";
import { Flex } from "./styled/Flex.styled";
import { H1, Logo, Nav, P, StyledHeader } from "./styled/Header.styled";

export function Header() {

    return (
        <StyledHeader>
            <Container>
                <Nav>
                    <Logo src="./images/logo.svg" alt="" />
                    <Button>Try It Free</Button>
                </Nav>
                <Flex>
                    <div>
                        <H1>Build The Community Your Fans Will Love</H1>
                        <P>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</P>
                        <Button primary>Get Started For Free</Button>
                    </div>
                    <img src="./images/illustration-mockups.svg" alt=""></img>
                </Flex>
            </Container>
        </StyledHeader>
    );
}