import styled, { css } from "styled-components";
import { FlexProps, ParagraphProps } from "./types";

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

export const SrOnly = css`
	clip-path: inset(50%);
	clip: rect(0 0 0 0);
	height: 1px;
	overflow: hidden;
	position: absolute;
	white-space: nowrap;
	width: 1px;
`;

export const SrOnlyText = styled.span`
	${SrOnly}
`;