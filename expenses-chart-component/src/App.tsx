import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BarChart, ChartContainer, Footer, Header, HintText, LineChart, Main } from '@/components';
import dataJson from '@/data.json';
import { GlobalStyle, theme } from '@/styles';

function App() {
  const [toggleChart, setToggleChart] = React.useState<boolean>(true);
  const data = dataJson.map((d) => {
    if (d.day === new Date().toDateString().slice(0, 3).toLocaleLowerCase()) {
      return {
        backgroundColor: theme.colors.secondary,
        data: d.amount,
        hoverBackgroundColor: theme.colors.secondaryHover,
        label: d.day,
      };
    }

    return {
      backgroundColor: theme.colors.primary,
      data: d.amount,
      hoverBackgroundColor: theme.colors.primaryHover,
      label: d.day,
    };
  });

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HintText />
      <Header />
      <Main>
        <ChartContainer onClick={() => setToggleChart(!toggleChart)}>
          {toggleChart ? (
            <BarChart
              id="spending-chart"
              dataset={data}
              description="Bar chart showing spending in dollars of last seven days from Monday to Sunday. You need to enable javascript if disabled or update your browser to view the chart."
            />
          ) : (
            <LineChart
              id="spending-chart"
              dataset={data}
              description="Line chart showing spending in dollars of last seven days from Monday to Sunday. You need to enable javascript if disabled or update your browser to view the chart."
            />
          )}
        </ChartContainer>
      </Main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
