import { ChartContainerProps } from './types';

const ChartContainer = (props: ChartContainerProps) => {
  return (
    <div onClick={props.onClick}>
      {props.children}
    </div>
  );
};

export default ChartContainer;
