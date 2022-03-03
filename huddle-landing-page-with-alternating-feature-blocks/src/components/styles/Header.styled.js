import styled from "styled-components";

export const StyledHeader = styled.header`
    background: ${({ theme }) => theme.colors.netural100};
    padding: 2em 0;
    text-align: center;
`

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3em;
`

export const Logo = styled.img`
    width: 30%;
`

export const H1 = styled.h1`
    font-size: 1.5em;
    margin-bottom: 1em;
`

export const P = styled.p`
    line-height: 1.5;
    margin-bottom: 2em;
`