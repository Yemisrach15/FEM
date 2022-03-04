import GlobalStyle from "./components/styles/Global";
import Attribution from "./components/Attribution";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import theme from "./components/styles/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle color="netural300" />
      <Header />
      <Main />
      <Footer />
      <Attribution />
    </ThemeProvider >
  );
}

export default App;
