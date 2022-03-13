import styled from 'styled-components';
import { verticalAlign, layout, space, compose, typography, system } from 'styled-system';

const content = system({
	content: {
		property: 'content'
	}
});

const Icon = styled.span`
	color: inherit;
	font-size: inherit;
	${compose(space, layout, content, verticalAlign, typography)}
`;

export default Icon;
