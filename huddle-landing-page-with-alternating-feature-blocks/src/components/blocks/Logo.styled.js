import styled from 'styled-components/macro';
import { color, layout, space, compose, system } from 'styled-system';
import { invalidHTMLProps } from './constants';

const filter = system({
	filter: {
		property: 'filter',
		scale: 'filters'
	}
});

const Logo = styled.img.withConfig({
	shouldForwardProp: (prop, defaultValidatorFn) => !invalidHTMLProps.includes(prop) && defaultValidatorFn(prop),
})`
	${compose(color, layout, space, filter)}
`;

export default Logo;
