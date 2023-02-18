import React from 'react';
import Chart from 'chart.js/auto';
import { ChartProps } from '../types';
import theme from '../styles/theme';

const BarChart = (props: ChartProps) => {
  const chartRef = React.createRef<HTMLCanvasElement>();

  React.useEffect(() => {
    const ctx = chartRef.current?.getContext('2d');
    const barChart = new Chart(ctx!, {
      type: 'bar',
      options: {
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
    <div>
      <canvas id={props.id} ref={chartRef} />
    </div>
  );
};

export default BarChart;
