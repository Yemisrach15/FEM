import { ThemeProvider } from "styled-components";
import theme from "./components/styles/Theme";
import GlobalStyle from "./components/styles/Global";
import { Attribution, Footer, Header, Main } from './components/index';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle 
        color="netural300" 
        fontFamily='other'/>
      <Header />
      <Main />
      <Footer />
      <Attribution />
    </ThemeProvider >
  );
}

export default App;
