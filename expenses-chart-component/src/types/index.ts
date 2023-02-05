interface BarChartProps {
  id: string;
  dataset: { label: string; data: any; backgroundColor?: string; hoverBackgroundColor?: string }[];
}

interface ContainerProps {
	children: React.ReactNode;
}

export type { BarChartProps, ContainerProps };