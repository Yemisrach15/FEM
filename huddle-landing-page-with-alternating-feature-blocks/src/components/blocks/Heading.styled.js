import styled from 'styled-components/macro';
import { color, layout, space, typography, compose } from 'styled-system';
import { invalidHTMLProps } from './constants';

const Heading = styled.h1.withConfig({
	shouldForwardProp: (prop, defaultValidatorFn) => !invalidHTMLProps.includes(prop) && defaultValidatorFn(prop),
})`
	text-transform: capitalize;
	${compose(color, layout, space, typography)}
`;
Heading.defaultProps = {
	fontFamily: 'header'
};

export default Heading;
