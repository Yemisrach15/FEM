import React from 'react';
import { ContainerProps } from '../Layout/types';
import { Flex, StyledMain, TitleL2 } from './style';

const Main = ({ children }: ContainerProps) => {
  return (
    <StyledMain>
      <TitleL2>Spending - Last 7 days</TitleL2>
      {children}
      <div>
        <p>Total this month</p>
        <Flex alignItems='flex-start' justifyContent='space-between' $direction='row'>
          <p>$478.33</p>
          <p>
            <strong>+2.4%</strong>
            <span>from last month</span>
          </p>
        </Flex>
      </div>
    </StyledMain>
  );
};

export default Main;
