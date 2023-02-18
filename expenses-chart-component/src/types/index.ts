interface ChartProps {
	className?: string;
  dataset: { label: string; data: any; backgroundColor?: string; hoverBackgroundColor?: string }[];
  id: string;
}

interface ContainerProps {
	children: React.ReactNode;
}

interface ChartContainerProps extends ContainerProps {
	onClick: () => void;
}

export type { ChartContainerProps, ChartProps, ContainerProps };