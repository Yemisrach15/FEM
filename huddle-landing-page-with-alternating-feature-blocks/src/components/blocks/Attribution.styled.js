import styled from 'styled-components/macro';
import { invalidHTMLProps } from './constants';

const StyledAttribution = styled.div.withConfig({
	shouldForwardProp: (prop, defaultValidatorFn) => !invalidHTMLProps.includes(prop) && defaultValidatorFn(prop),
})`
	margin: 1em 0.5em;

	& > p {
		font-size: 11px;
		text-align: center;
	}
	& a {
		color: hsl(228, 45%, 44%);
	}
`;

export default StyledAttribution;
