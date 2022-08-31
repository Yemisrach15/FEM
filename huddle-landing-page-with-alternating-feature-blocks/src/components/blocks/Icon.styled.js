import styled from 'styled-components/macro';
import { verticalAlign, layout, space, compose, typography, system } from 'styled-system';
import { invalidHTMLProps } from './constants';

const content = system({
	content: {
		property: 'content'
	}
});

const Icon = styled.span.withConfig({
	shouldForwardProp: (prop, defaultValidatorFn) => !invalidHTMLProps.includes(prop) && defaultValidatorFn(prop),
})`
	color: inherit;
	font-size: inherit;
	${compose(space, layout, content, verticalAlign, typography)}
`;

export default Icon;
