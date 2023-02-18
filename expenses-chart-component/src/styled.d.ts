import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
			primaryHover: string;
      secondary: string;
			secondaryHover: string;
			darkBrown: string;
			mediumBrown: string;
			cream: string;
			paleOrange: string;
    };
		fonts: {
			primary: string;
		}
  }
}