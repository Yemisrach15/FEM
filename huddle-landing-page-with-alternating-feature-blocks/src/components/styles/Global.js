import { createGlobalStyle } from "styled-components";
import { color } from "styled-system";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Poppins:wght@600&display=swap');

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