import React from 'react';
import styled from 'styled-components';
import { ContainerProps } from '../types';

const StyledContainer = styled.div`
	max-width: 341px;
`;

const Container = ({ children }: ContainerProps) => {
	return (
		<StyledContainer>
			{children}
		</StyledContainer>
	);
};

export default Container;