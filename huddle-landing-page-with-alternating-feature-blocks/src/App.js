import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from './components/styles';
import { Attribution, Footer, Header, Main } from './components/index';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle color='netural300' fontFamily='other' />
			<Header />
			<Main />
			<Footer />
			<Attribution />
		</ThemeProvider>
	);
}

export default App;
