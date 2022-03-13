import styled from 'styled-components';
import { border, color, space, layout, shadow, compose } from 'styled-system';
import { Flex, Heading, Image, Paragraph, TextTile } from './styles';

const CardStyled = styled.section`
	&:hover {
		transform: scale(1.03);
		transition: transform ease-in-out 0.2s;
	}
	${compose(border, color, space, shadow, layout)}
`;

export default function Card({ src, heading, body, reverse }) {
	const direction = reverse ? 'row-reverse' : 'row';

	return (
		<CardStyled
			boxShadow={1}
			borderRadius={1}
			maxWidth={[null, 18, 'none']}
			m={[null, '0 auto', null]}
			mb={{ xs: 4, sm: 4, md: 4, lg: 9, hybrid: 4 }}
			px={{ xs: 3, sm: 3, md: 6, lg: 13, hybrid: 13 }}
			pr={{ xs: 3, sm: 3, md: 6, lg: 4, hybrid: 4 }}
			pt={6}
			pb={[4, null, 7]}>
			<Flex
				flexDirection={['column', 'column', `${direction}`]}
				alignItems='center'
				gap={{ xs: 6, sm: 6, md: null, lg: '16%', hybrid: '16%' }}>
				<Image width={['84%', null, '38%']} src={src} alt='' />
				<TextTile textAlign={['center', 'center', 'left']}>
					<Heading
						as={'h2'}
						fontSize={{ xs: 3, hybrid: 4 }}
						letterSpacing={['compact.1', null, 'stretched.2']}
						mb={'0.6em'}>
						{heading}
					</Heading>
					<Paragraph
						color={'netural200'}
						fontSize={{ xs: 1, hybrid: 2 }}
						lineHeight={[0, null, 1]}
						letterSpacing={['compact.2', null, 'stretched.0']}>
						{body}
					</Paragraph>
				</TextTile>
			</Flex>
		</CardStyled>
	);
}
