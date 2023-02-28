export interface ChartProps {
	className?: string;
  dataset: { label: string; data: any; backgroundColor?: string; hoverBackgroundColor?: string }[];
  id: string;
	description: string;
}
