import styled, { css } from "styled-components";
import { color, space, typography, variant } from "styled-system";

export const Button = styled.button`
    /* background: white; */
	border-radius: 5em;
    box-shadow: 0px 2px 10px 3px hsl(208deg 11% 55% / 15%);
    font-weight: 700;
	/* padding: 0.3em 1.8em; */
/* 
    ${props => props.primary && css`
        width: 80%;
    `} */
    
    ${color}
    ${space}
    ${typography}
    ${
        variant({
            variants: {
                primary: {
                    color: "white",
                    bg: "primary",
                    width: "80%"
                }, 
                secondary: {
                    color: "netural300",
                    bg: "white"
                }
            }
        })
    }
`
