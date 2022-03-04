import { createGlobalStyle } from "styled-components";
import { color } from "styled-system";

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        font-size: 18px;
        margin: 0;
        padding: 0;
        ${color}
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
    }
`