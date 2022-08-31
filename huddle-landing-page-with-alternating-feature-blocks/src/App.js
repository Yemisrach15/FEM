import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from './styles';
import { Footer, Header, Main } from './components/index';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle color='netural300' fontFamily='other' />
			<Header />
			<Main />
			<Footer />
		</ThemeProvider>
	);
}

export default App;
