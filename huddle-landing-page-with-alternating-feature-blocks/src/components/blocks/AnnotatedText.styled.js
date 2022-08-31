import styled from 'styled-components/macro';
import { color, layout, space, compose, typography, system, left, top, right, bottom } from 'styled-system';
import { invalidHTMLProps } from './constants';

const content = system({
	content: {
		property: 'content'
	}
});

const StyledAnnotatedText = styled.p.withConfig({
	shouldForwardProp: (prop, defaultValidatorFn) => !invalidHTMLProps.includes(prop) && defaultValidatorFn(prop),
})`
	position: relative;
	&:before {
		left: 0;
		position: absolute;
		top: 0;
		${compose(top, left, right, bottom, content, typography)}
	}
	${compose(color, space, layout, typography)}
`;

export default function AnnotatedText({ children, ...props }) {
	return <StyledAnnotatedText {...props}>{children}</StyledAnnotatedText>;
}
