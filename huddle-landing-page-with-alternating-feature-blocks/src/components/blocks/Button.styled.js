import styled from 'styled-components';
import { space, layout, typography, border, borderColor, variant, shadow, compose } from 'styled-system';

const Button = styled.a`
	text-decoration: none;
	&:hover {
		opacity: 0.75;
	}
	${compose(
		space,
		layout,
		typography,
		border,
		borderColor,
		shadow,
		variant({
			variants: {
				primary: {
					color: 'white',
					bg: 'primary'
				},
				secondary: {
					color: 'netural300',
					bg: 'white'
				},
				outlined: {
					color: 'white',
					bg: 'transparent',
					px: 1,
					py: 1,
					border: '1px solid'
				}
			}
		})
	)}
`;

Button.defaultProps = {
	variant: 'primary',
	borderRadius: 2,
	width: 'fit-content'
};

export default Button;
