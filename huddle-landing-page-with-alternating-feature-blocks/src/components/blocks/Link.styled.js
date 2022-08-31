import styled from 'styled-components/macro';
import { color, compose, layout, space, typography } from 'styled-system';
import { invalidHTMLProps } from './constants';

const Link = styled.a.withConfig({
	shouldForwardProp: (prop, defaultValidatorFn) => !invalidHTMLProps.includes(prop) && defaultValidatorFn(prop),
})`
	text-decoration: none;
	&:hover {
		text-decoration: underline;
		${compose(color, layout, space)}
	}
	${compose(typography)}
`;

export default Link;
