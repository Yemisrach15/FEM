import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Poppins:wght@600&display=swap');

    * {
        box-sizing: border-box;
        color: ${({ theme }) => theme.colors.netural300};
        font-family: 'Poppins', sans-serif;
        font-size: 18px;
        margin: 0;
        padding: 0;
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
    }
`