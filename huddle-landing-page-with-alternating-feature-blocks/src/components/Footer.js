import styled from 'styled-components/macro';
import { color, compose, layout, space } from 'styled-system';
import Attribution from './Attribution';
import { AnnotatedText, Container, Flex, Icon, IconButton, Link, List, Logo, Paragraph, TextTile } from './blocks';

const FooterStyled = styled.footer`
	${compose(color, layout, space)}
`;
export default function Footer() {
	return (
		<FooterStyled>
			<Container
				bg={'netural300'}
				px={0}
				pt={['7.7em', null, '10.7em']}
				pb={[5]}>
				<Container
					pl={{ md: 5 }}
					pr={{ md: 3 }}
					width={['medium', 'extraSmall', 'small']}>
					<Logo
						width={['9.3em', null, 13]}
						filter={'white'}
						mb={[2, null, 4]}
						src='./images/logo.svg'
						alt='Huddle Logo'
					/>
					<Flex
						equal
						mb={3}
						gap={3}
						flexDirection={{ xs: 'column', hybrid: 'row' }}
						alignItems={{ xs: 'center', hybrid: 'flex-start' }}>
						<TextTile>
							<AnnotatedText
								color='white'
								mb={3}
								pl={5}
								top={1}
								fontSize={1}
								lineHeight={1}
								content='url("./images/icon-location.svg")'>
								Lorem ipsum dolor sit amet, consectetur adipiscing
								elit, sed do eiusmod tempor incididunt ut labore et
								dolore magna aliqua
							</AnnotatedText>
							<AnnotatedText
								color='white'
								mb={3}
								pl={5}
								top={1}
								fontSize={1}
								lineHeight={1}
								content='url("./images/icon-phone.svg")'>
								+1-543-123-4567
							</AnnotatedText>
							<AnnotatedText
								color='white'
								mb={3}
								pl={5}
								top={1}
								fontSize={1}
								lineHeight={1}
								content='url("./images/icon-email.svg")'>
								example@huddle.com
							</AnnotatedText>
						</TextTile>
						<List
							mb={4}
							pl={{ hybrid: '11%' }}
							gap={[2, null, '33.5%']}
							flexDirection={['column', 'row', 'row']}
							justifyContent={['center', null, 'space-around']}>
							<List as={'li'}>
								<List
									color='white'
									gap={2}
									flexDirection='column'
									width={[null, null, 'auto']}>
									<li>
										<Link href='#'>About Us</Link>
									</li>
									<li>
										<Link href='#'>What We Do</Link>
									</li>
									<li>
										<Link href='#'>FAQ</Link>
									</li>
								</List>
							</List>
							<List as={'li'}>
								<List
									color='white'
									gap={2}
									flexDirection='column'
									width={[null, null, 'auto']}>
									<li>
										<Link href='#'>Career</Link>
									</li>
									<li>
										<Link href='#'>Blog</Link>
									</li>
									<li>
										<Link href='#'>Contact Us</Link>
									</li>
								</List>
							</List>
						</List>
						<List gap={2} justifyContent={'center'}>
							<li>
								<IconButton
									aria-label='Visit our facebook page'
									href='#'
									variant='outlined'
									color='primary'
									width={2}
									height={2}
									fontSize={1}
									icon={<Icon className='fa fa-facebook' />}
								/>
							</li>
							<li>
								<IconButton
									aria-label='Visit our twitter page'
									href='#'
									variant='outlined'
									color='primary'
									width={2}
									height={2}
									fontSize={1}
									icon={<Icon className='fa fa-twitter' />}
								/>
							</li>
							<li>
								<IconButton
									aria-label='Visit our instagram page'
									href='#'
									variant='outlined'
									color='primary'
									width={2}
									height={2}
									fontSize={1}
									icon={<Icon className='fa fa-instagram' />}
								/>
							</li>
						</List>
					</Flex>
					<Paragraph
						color='white'
						fontSize={'0.58em'}
						letterSpacing={'stretched.2'}
						textAlign={{ xs: 'center', hybrid: 'right' }}>
						&copy; Copyright 2018 Huddle. All rights reserved.
					</Paragraph>
				</Container>
			</Container>
			<Attribution />
		</FooterStyled>
	);
}
