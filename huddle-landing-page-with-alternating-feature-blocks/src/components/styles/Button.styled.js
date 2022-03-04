import styled, { css } from "styled-components";
import { color, space, typography } from "styled-system";

export const Button = styled.button`
    background: white;
	border-radius: 5em;
    box-shadow: 0px 2px 10px 3px hsl(208deg 11% 55% / 15%);
    font-size: 1em;
    font-weight: 700;
	padding: 0.5em 2em;

    ${props => props.primary && css`
        width: 80%;
    `}
    
    ${color}
    ${space}
    ${typography}
`
