import styled, { css } from "styled-components";

export const StyledFooter = styled.footer`
    background: ${({ theme }) => theme.colors.netural300};
    padding: 4em 2em;

    & * {
        color: white;
    }
    &:nth-child(2) {
        align-self: flex-start;
    }
`

export const Logo = styled.img`
    margin-bottom: 1em;
`

export const StyledParagraph = styled.p`
    align-items: flex-start;
    display: flex;
    font-size: 0.8em;
    line-height: 1.5;
    margin-bottom: 1em;

    & > img {
        margin-right: 1em;
        margin-top: 0.25em;
        width: 15px;
    }
`

export const StyledSection = styled.section`
    margin-top: 2em;

    & li {
        list-style: none;
        margin-bottom: 1em;
    }
    & a {
        text-decoration: none;
        &:hover{
            text-decoration: underline;
        }
    }
    ${props => props.row && css`
        & ul {
            display: flex;
            gap: 1em;
            justify-content: center;
        }
    `}
`

export const SocialIcon = styled.li`
    align-items: center;
    border: 1px solid white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    height: 2em;
    width: 2em;
`

export const CopyRightParagraph = styled.p`
    font-size: 0.6em;
    text-align: center;
`