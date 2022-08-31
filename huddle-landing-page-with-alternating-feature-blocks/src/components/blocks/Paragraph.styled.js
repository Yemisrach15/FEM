import styled from 'styled-components/macro';
import { color, layout, space, typography, compose } from 'styled-system';
import { invalidHTMLProps } from './constants';

const Paragraph = styled.p.withConfig({
	shouldForwardProp: (prop, defaultValidatorFn) => !invalidHTMLProps.includes(prop) && defaultValidatorFn(prop),
})`
	${compose(color, layout, space, typography)}
`;

export default Paragraph;
