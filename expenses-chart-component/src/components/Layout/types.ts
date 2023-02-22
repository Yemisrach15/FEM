interface ContainerProps {
	children: React.ReactNode;
}

interface ChartContainerProps extends ContainerProps {
	onClick: () => void;
}

export type { ChartContainerProps, ContainerProps };