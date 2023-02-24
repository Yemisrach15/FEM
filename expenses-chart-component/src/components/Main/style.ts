import styled from "styled-components";
import { FlexProps, ParagraphProps } from "./types";

export const TitleL2 = styled.h2`
	color: ${({ theme }) => theme.colors.darkBrown};
	font-size: 1.2rem;
	letter-spacing: -0.8px;
	margin-bottom: 0.5rem;
`;

export const Flex = styled.div<FlexProps>`
	display: flex;
	flex-direction: ${({ $direction }) => $direction[1]};
	align-items: ${({ $alignItems }) => $alignItems[1]};
	justify-content: ${({ $justifyContent }) => $justifyContent[1]};
	gap: ${({ $gap }) => $gap && $gap[1]};

	@media screen and (max-width: 375px) {
		flex-direction: ${({ $direction }) => $direction[0]};
		align-items: ${({ $alignItems }) => $alignItems[0]};
		justify-content: ${({ $justifyContent }) => $justifyContent[0]};
		gap: ${({ $gap }) => $gap && $gap[0]};
	}
`;

export const Text = styled.p<ParagraphProps>`
	color: ${({ $color }) => $color};
	font-size: ${({ $fontSize }) => $fontSize};
	font-weight: ${({ $fontWeight }) => $fontWeight};
	text-align: ${({ $textAlign }) => $textAlign};
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
		margin-top: 1.2rem;
	}

	& > div {
		& > p:last-child {
			text-align: end;

			@media screen and (max-width: 375px) {
				border-top: 1px solid ${({ theme }) => theme.colors.cream};
				margin-top: 1rem;
				padding-top: 1rem;
				width: 100%;
			}
		}
	}
}
`;