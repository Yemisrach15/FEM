import styled from "styled-components";
import { color, layout } from "styled-system";

export const StyledHeader = styled.header`
    padding: 1.4em 0 1.9em 0;
    text-align: center;
    ${color}
`

export const Nav = styled.nav`
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: 4.5em;
`

export const Logo = styled.img`
    ${layout}
`

export const H1 = styled.h1`
    font-size: 1.3em;
    letter-spacing: 0.65px;
    line-height: 1.6;
    margin-bottom: 0.9em;
`

export const P = styled.p`
    font-size: 0.85em;
    letter-spacing: -0.3px;
    line-height: 1.6;
    margin-bottom: 1.8em;
`