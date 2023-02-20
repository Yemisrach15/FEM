import React from 'react';
import styled from 'styled-components';
import { ContainerProps } from '../types';

const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 341px;
  width: 90%;
`;

const Container = ({ children }: ContainerProps) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
