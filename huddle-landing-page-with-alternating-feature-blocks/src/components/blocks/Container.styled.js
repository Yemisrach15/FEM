import styled from 'styled-components/macro';
import { color, space, layout, variant, compose } from 'styled-system';
import { invalidHTMLProps } from './constants';

const Container = styled.div.withConfig({
	shouldForwardProp: (prop, defaultValidatorFn) => !invalidHTMLProps.includes(prop) && defaultValidatorFn(prop),
})`
	margin: 0 auto;
	${compose(
		color,
		layout,
		space,
		variant({
			prop: 'width',
			scale: 'width'
		})
	)}
`;

Container.defaultProps = {
	maxWidth: '1600px' // FIXME: Do not hardcode value
};

export default Container;
