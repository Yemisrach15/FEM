import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
		font-family: ${({theme}) => theme.fonts.primary};
		font-size: 18px;
		margin: 0;
		padding: 0;
	}

	html, body {
		height: 100%;
	}

	body {
		align-items: center;
		background-color: ${({theme}) => theme.colors.cream};
		display: flex;
		justify-content: center;
	}
`

export default GlobalStyle;