import styled from "styled-components";
import { color, layout } from "styled-system";

export const StyledMain = styled.main`
    padding: 3.3em 0.1em;
    text-align: center;
`

export const StyledCard = styled.section`
    border-radius: 1em;
    box-shadow: 0px 2px 10px 3px hsl(208deg 11% 55% / 15%);
    margin-bottom: 2.2em;
    padding: 3.2em 2.3em 1.8em 2.3em;

    & img {
        ${layout}
    }
    & h2 {
        font-family: 'Poppins', sans-serif;
        font-size: 1.1em;
        margin-bottom: 0.8em;
    }
    & p {
        font-family: 'Open Sans', sans-serif;
        font-size: 0.75em;
        letter-spacing: 0.2px;
        line-height: 1.6;
        ${color}
    }
`