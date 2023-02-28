import styled from "styled-components";

export const ChartSummary = styled.div`
	border-top: solid 1px ${({ theme }) => theme.colors.cream};
	margin-top: 1.2rem;

	& > p {
		margin-top: 1.2rem;
	}

	& > div > p:last-child {
		text-align: end;

		@media screen and (max-width: 375px) {
			border-top: 1px solid ${({ theme }) => theme.colors.cream};
			margin-top: 1rem;
			padding-top: 1rem;
			width: 100%;
		}
	}
`;

export const StyledMain = styled.main`
	background-color: white;
	border-radius: 0.5rem;
	color: ${({ theme }) => theme.colors.mediumBrown};
	margin-top: 0.85rem;
	padding: 1.1rem 1.5rem 1.25rem;

	& > h2 {
		letter-spacing: -0.8px;
		margin-bottom: 0.5rem;
	}
`;