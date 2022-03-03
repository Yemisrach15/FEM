import styled from "styled-components";

export const StyledMain = styled.main`
    margin: 3em 0;
    text-align: center;
`

export const StyledCard = styled.section`
    border-radius: 1em;
    box-shadow: 0px 2px 10px 3px hsl(208deg 11% 55% / 15%);
    display: flex;
    flex-direction: column;
    gap: 2em;
    margin-bottom: 2em;
    padding: 1.5em 2em;

    & h2 {
        font-family: 'Open Sans', sans-serif;
        font-size: 1.2em;
        margin-bottom: 1em;
    }
    & p {
        color: ${({ theme }) => theme.colors.netural200};
        font-size: 0.85em;
        line-height: 1.5;
    }
`