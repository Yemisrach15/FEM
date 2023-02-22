import styled from "styled-components";
import { FlexProps } from "./types";

export const TitleL2 = styled.h2`
	color: ${({ theme }) => theme.colors.darkBrown};
	font-size: 1.2rem;
	letter-spacing: -0.8px;
	margin-bottom: 0.5rem;
`;

export const Flex = styled.div<FlexProps>`
	display: flex;
	flex-direction: ${({ $direction }) => $direction};
	align-items: ${({ alignItems }) => alignItems};
	justify-content: ${({ justifyContent }) => justifyContent};
	gap: ${({ gap }) => gap};
`;

export const StyledMain = styled.main`
	background-color: white;
	border-radius: 0.5rem;
	color: ${({ theme }) => theme.colors.mediumBrown};
	margin-top: 0.85rem;
	padding: 1.1rem 1.5rem 1.25rem;

& > div:last-child {
	border-top: solid 1px ${({ theme }) => theme.colors.cream};
	margin-top: 1.2rem;

	& > p:first-child {
		color: ${({ theme }) => theme.colors.mediumBrown};
		font-size: 0.65rem;
		margin-top: 1.2rem;
	}

	& > div {
		/* display: flex;
		justify-content: space-between; */

		@media screen and (max-width: 375px) {
			align-items: flex-start;
			flex-direction: column;
		}

		& > p:first-child {
			color: ${({ theme }) => theme.colors.darkBrown};
			font-size: 1.7rem;
			font-weight: 700;
		}

		& > p:last-child {
			align-items: flex-end;
			display: flex;
			flex-direction: column;
			gap: 0.15rem;
			justify-content: center;
			text-align: end;

			@media screen and (max-width: 375px) {
				align-items: flex-start;
				border-top: 1px solid ${({ theme }) => theme.colors.cream};
				margin-top: 1rem;
				padding-top: 1rem;
				width: 100%;
			}

			& > * {
				font-size: 0.6rem;
			}
		}

		& strong {
			color: ${({ theme }) => theme.colors.darkBrown};
		}
	}
}
`;