import styled from 'styled-components/macro';
import { color, layout, position, space, typography, shadow, border, compose } from 'styled-system';
import { invalidHTMLProps } from './constants';

const TextTile = styled.section.withConfig({
	shouldForwardProp: (prop, defaultValidatorFn) => !invalidHTMLProps.includes(prop) && defaultValidatorFn(prop),
})`
	${compose(color, layout, position, space, typography, shadow, border)}
`;

export default TextTile;
