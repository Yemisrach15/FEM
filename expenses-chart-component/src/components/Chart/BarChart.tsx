import React from 'react';
import Chart from 'chart.js/auto';
import { ChartProps } from './types';
import { theme } from '@/styles';
import { SrOnlyText, Table, Text } from '@/components';

const BarChart = (props: ChartProps) => {
  const chartRef = React.createRef<HTMLCanvasElement>();

  React.useEffect(() => {
    const ctx = chartRef.current?.getContext('2d');
    const barChart = new Chart(ctx!, {
      type: 'bar',
      options: {
        maintainAspectRatio: false,
        font: {
          family: theme.fonts.primary,
        },
        layout: {
          padding: {
            top: 16,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            backgroundColor: theme.colors.darkBrown,
            bodyFont: {
              family: theme.fonts.primary,
              size: 12,
            },
            callbacks: {
              title: function (context) {
                return '';
              },
              label: function (context) {
                let label = context.dataset.label || '';

                if (label) {
                  label += ': ';
                }
                if (context.parsed.y !== null) {
                  label += new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  }).format(context.parsed.y);
                }
                return label;
              },
            },
            caretPadding: 5,
            caretSize: 0,
            displayColors: false,
            boxWidth: 54,
            xAlign: 'center',
            yAlign: 'bottom',
          },
        },
        scales: {
          y: {
            display: false,
          },
          x: {
            border: {
              display: false,
            },
            grid: {
              display: false,
            },
            ticks: {
              font: {
                family: theme.fonts.primary,
                size: 9,
              },
              padding: 0,
            },
          },
        },
      },
      data: {
        labels: props.dataset.map((d) => d.label),
        datasets: [
          {
            data: props.dataset.map((d) => d.data),
            backgroundColor: props.dataset.map((d) => d.backgroundColor),
            hoverBackgroundColor: props.dataset.map((d) => d.hoverBackgroundColor),
            borderRadius: 3,
            borderSkipped: false,
          },
        ],
      },
    });

    return () => {
      barChart.destroy();
    };
  }, []);

  return (
    <>
      <figcaption>
        <Text as="h2" $color={theme.colors.darkBrown} $fontSize="1.2rem">
          Spending - Last 7 days
        </Text>
        <Table>
          <tbody>
            <tr>
              <th>Day</th>
              <th>Amount in Dollars</th>
            </tr>
            {props.dataset.map((d) => (
              <tr>
                <td>{d.label}</td>
                <td>{d.data}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <SrOnlyText as={'p'}>
          Visual chart representation of the data above is provided below.
        </SrOnlyText>
      </figcaption>
      <div>
        <canvas id={props.id} ref={chartRef}>
          {props.description}
        </canvas>
      </div>
    </>
  );
};

export default BarChart;
