import styled from "styled-components";

export const StyledHeader = styled.header`
	background-color: ${({ theme }) => theme.colors.primary};
	border-radius: 0.8rem;
	color: ${({ theme }) => theme.colors.paleOrange};
	display: flex;
	justify-content: space-between;
	padding: 1rem 1.2rem;

	& p {
		font-size: 1.2rem;
		font-weight: 500;
		letter-spacing: -0.5px;
	}

	& img {
		width: 70%;
	}

	& > div {
		display: flex;
	}

	& > div:first-child {
		flex-direction: column;
		justify-content: space-between;
	}

	& > div:last-child {
		justify-content: flex-end;
	}
`;

export const Title = styled.h1`
	font-size: 0.65rem;
	font-weight: 400;
	letter-spacing: -0.3px;
`;