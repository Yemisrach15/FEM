import GlobalStyle from "./components/styled/Global";
import Attribution from "./components/Attribution";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";

const theme = {
  colors: {
    primary: 'hsl(322, 100%, 66%)',
    netural100: 'hsl(193, 100%, 96%)',
    netural200: 'hsl(208, 11%, 55%)',
    netural300: 'hsl(192, 100%, 9%)'
  },
  breakpoints: {
    mobile: '375px',
    tablet: '768px',
    desktop: '1440px'
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
      <Attribution />
    </ThemeProvider >
  );
}

export default App;
