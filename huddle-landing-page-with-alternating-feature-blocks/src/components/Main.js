import { Button, Card, Container, Heading, TextTile } from './blocks';

export default function Main() {
	return (
		<main>
			<Container
				px={{ xs: '0.3em', sm: '0.3em', md: null, lg: 3, hybrid: 3 }}
				pt={{ xs: 7, md: 18, lg: 18, hybrid: 18 }}
				width={['medium', 'extraSmall', 'small']}>
				<Card
					reverse
					src='./images/illustration-grow-together.svg'
					heading='Grow Together'
					body='Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.'
					alt='Illustration grow together'
				/>
				<Card
					src='./images/illustration-flowing-conversation.svg'
					heading='Flowing Conversations'
					body="You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow."
					alt='Illustration flowing conversation'
				/>
				<Card
					reverse
					src='./images/illustration-your-users.svg'
					heading='Your Users'
					body="It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately."
					alt='Illustration your users'
				/>
			</Container>
			<Container width={['medium', 'extraSmall', 'small']}>
				<TextTile
					bg='white'
					boxShadow={1}
					borderRadius={1}
					position='relative'
					top={[8, null, 11]}
					px={[2]}
					py={[5, null, 7]}
					m={'0 auto'}
					maxWidth={{ sm: '425px', md: '550px', hybrid: '800px' }}
					textAlign={'center'}>
					<Heading
						as={'h2'}
						fontSize={{ xs: 2, md: 3, hybrid: 5 }}
						letterSpacing={[null, null, 'compact.3']}
						mb={[3, null, 2]}>
						Ready To Build Your Community?
					</Heading>
					<Button
						px={{ xs: 6, sm: 11, md: 4, hybrid: 11 }}
						py={{ xs: 3, sm: 2, hybrid: 3 }}
						m={'0 auto'}
						fontSize={{ xs: 0, md: 1, hybrid: 2 }}
						fontWeight={6}
						letterSpacing={['stretched.2', null, 'stretched.3']}
						display={'block'}
						href='#'>
						Get Started For Free
					</Button>
				</TextTile>
			</Container>
		</main>
	);
}
