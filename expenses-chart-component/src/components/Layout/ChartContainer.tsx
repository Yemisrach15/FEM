import { ChartContainerProps } from './types';

const ChartContainer = (props: ChartContainerProps) => {
  return (
    <figure role={'group'} onClick={props.onClick}>
      {props.children}
    </figure>
  );
};

export default ChartContainer;
