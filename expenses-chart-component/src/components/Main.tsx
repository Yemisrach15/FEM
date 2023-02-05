import React from 'react';
import styled from 'styled-components';
import { ContainerProps } from '../types';

const StyledMain = styled.main`
	background-color: white;
	border-radius: 0.5rem;
	color: ${({ theme }) => theme.colors.mediumBrown};
	margin-top: 0.85rem;
	padding: 1.1rem 1.5rem 1.25rem;

	& h2 {
		color: ${({theme}) => theme.colors.darkBrown};
		font-size: 1.2rem;
		letter-spacing: -0.8px;
		margin-bottom: 0.5rem;
	}

	& > div:last-child {
		border-top: solid 1px ${({ theme }) => theme.colors.cream};
		margin-top: 1.2rem;

		& > p:first-child {
			color: ${({ theme }) => theme.colors.mediumBrown};
			font-size: 0.65rem;
			margin-top: 1.2rem;
		}

		& > div {
			display: flex;
			justify-content: space-between;

			& > p:first-child {
				color: ${({theme}) => theme.colors.darkBrown};
				font-size: 1.7rem;
				font-weight: 700;
			}

			& > p:last-child {
				align-items: flex-end;
				display: flex;
				flex-direction: column;
				gap: 0.15rem;
				justify-content: center;

				& > * {
					font-size: 0.6rem;
				}
			}

			& strong {
				color: ${({theme}) => theme.colors.darkBrown};
			}
		}
	}
`;

const Main = ({ children }: ContainerProps) => {
  return (
    <StyledMain>
			<h2>Spending - Last 7 days</h2>
      {children}
			<div>
				<p>Total this month</p>
				<div>
					<p>$478.33</p>
					<p>
						<strong>+2.4%</strong>
						<span>from last month</span>
					</p>
				</div>
			</div>
    </StyledMain>
  );
};

export default Main;
