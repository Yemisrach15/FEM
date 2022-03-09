import styled from "styled-components";
import { color, space, layout, typography, border, variant, shadow, compose } from "styled-system";

const Button = styled.a`
	text-decoration: none;
	&:hover {
		opacity: 0.85;
	}
	${compose(
		color,
		space,
		layout,
		typography,
		border,
		shadow,
		variant({
			variants: {
				primary: {
					color: "white",
					bg: "primary"
				},
				secondary: {
					color: "netural300",
					bg: "white"
				}
			}
		})
	)}
`

Button.defaultProps = {
	variant: 'primary',
	borderRadius: 2,
	width: 'fit-content'
}

export default Button;