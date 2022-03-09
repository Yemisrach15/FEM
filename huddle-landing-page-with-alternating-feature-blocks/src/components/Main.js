import Card from "./Card";
import Container from "./styles/Container.styled";
import TextTile, { Heading } from "./styles/TextTile.styled";
import Button from './styles/Button.styled';

export function Main() {
    return (
        <main>
            <Container 
                px={{xs: "0.3em", sm: "0.3em", md: null, lg: 3, hybrid: 3}}
                py={{xs: 7, md: 18, lg: 18, hybrid: 18}}
                width={['medium', 'extraSmall', 'small']}>
                <Card reverse
                    src="./images/illustration-grow-together.svg"
                    heading="Grow Together"
                    body="Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form." />
                <Card 
                    src="./images/illustration-flowing-conversation.svg"
                    heading="Flowing Conversations"
                    body="You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow."/>
                <Card reverse
                    src="./images/illustration-your-users.svg"
                    heading="Your Users"
                    body="It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately."/>
            </Container>
            <Container
                py={{xs: 10, md: 18, lg: 18, hybrid: 18}}
                width={['medium', 'extraSmall', 'small']}>
                <TextTile
                    boxShadow={1}
                    borderRadius={1}
                    px={[2]}
                    py={[5, null, 7]}
                    m={'0 auto'}
                    maxWidth={[null, '425px','800px']}
                    textAlign={'center'}>
                    <Heading
                        as={'h2'}
                        fontSize={[2, null, 5]}
                        letterSpacing={[null, null, "compact.3"]}
                        mb={[3, null, 2]}>
                        Ready To Build Your Community?
                    </Heading>
                    <Button
                        px={[11, null, null]}
                        py={[3, 2, 3]}
                        m={'0 auto'}
                        fontSize={[0, null, 2]}
                        fontWeight={6}
                        letterSpacing={["stretched.2", null, "stretched.3"]}
                        display={'block'}
                        href="#">
                        Get Started For Free
                    </Button>
                </TextTile>
            </Container>
        </main>
    );
}