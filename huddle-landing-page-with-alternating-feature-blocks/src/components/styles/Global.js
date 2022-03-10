import { createGlobalStyle } from "styled-components";
import { color, fontFamily, compose } from "styled-system";

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        font-size: 18px;
        margin: 0;
        padding: 0;
        ${compose(color, fontFamily)}
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
    }
`