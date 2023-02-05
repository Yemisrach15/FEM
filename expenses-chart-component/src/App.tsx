import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BarChart, Container, Header, Main, Footer } from './components';
import data from './data.json';
import GlobalStyle from './styles/global-style';
import theme from './styles/theme';

function App() {
  const chartData = data.map((d) => {
    if (d.day === new Date().toDateString().slice(0, 3).toLocaleLowerCase()) {
      return {
        label: d.day,
        data: d.amount,
        backgroundColor: theme.colors.secondary,
        hoverBackgroundColor: theme.colors.secondaryHover,
      };
    }

    return {
      label: d.day,
      data: d.amount,
      backgroundColor: theme.colors.primary,
      hoverBackgroundColor: theme.colors.primaryHover,
    };
  });

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Header />
        <Main>
          <BarChart id="spending-chart" dataset={chartData} />
        </Main>
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
