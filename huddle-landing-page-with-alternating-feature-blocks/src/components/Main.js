import { Card } from "./Card";
import Container from "./styles/Container.styled";

export function Main() {
    return (
        <main>
            <Container 
                px={["0.3em", null, 3]}
                py={18}
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
        </main>
    );
}