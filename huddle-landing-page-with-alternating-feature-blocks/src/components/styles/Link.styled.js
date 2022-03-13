import styled from 'styled-components';
import { color, compose, layout, space, typography } from 'styled-system';

const Link = styled.a`
	text-decoration: none;
	&:hover {
		text-decoration: underline;
		${compose(color, layout, space)}
	}
	${compose(typography)}
`;

export default Link;
