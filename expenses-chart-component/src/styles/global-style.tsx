import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
		font-family: 'DM Sans', sans-serif;
		font-size: 18px;
		margin: 0;
		padding: 0;
	}

	body {
		background-color: ${({theme}) => theme.colors.cream};
		margin: 1rem auto;
	}
`

export default GlobalStyle;