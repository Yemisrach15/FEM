import styled from 'styled-components/macro';
import { color, compose, flexbox, typography } from 'styled-system';
import Button from './Button.styled';
import { invalidHTMLProps } from './constants';

const StyledIconButton = styled(Button).withConfig({
	shouldForwardProp: (prop, defaultValidatorFn) => !invalidHTMLProps.includes(prop) && defaultValidatorFn(prop),
})`
	align-items: center;
	display: flex;
	justify-content: center;
	&:hover {
		opacity: 1;
		${color}
	}
	${compose(flexbox, typography)}
`;

export default function IconButton({ icon, ...props }) {
	return <StyledIconButton {...props}>{icon}</StyledIconButton>;
}
