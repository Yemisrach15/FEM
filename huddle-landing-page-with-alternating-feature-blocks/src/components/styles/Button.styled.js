import styled, { css } from "styled-components";

export const Button = styled.button`
    background: white;
	border-radius: 2em;
    box-shadow: 0px 2px 10px 3px hsl(208deg 11% 55% / 15%);
    font-size: 0.8em;
	padding: 0.8em 2em;

    ${props => props.primary && css`
        background: ${({ theme }) => theme.colors.primary};
        color: white;
        width: 80%;
    `}
`