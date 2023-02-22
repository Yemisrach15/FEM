import React from 'react';
import { StyledContainer } from './style';
import { ContainerProps } from './types';

const Container = ({ children }: ContainerProps) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
