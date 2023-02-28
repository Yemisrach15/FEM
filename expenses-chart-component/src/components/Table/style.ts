import styled from "styled-components";
import { SrOnly } from "@/components";

export const Table = styled.table`
	${SrOnly}
	border-spacing: 1rem 0.2rem;

	&:focus {
		clip-path: none;
		clip: auto;
		height: auto;
		margin: 0.5rem auto 0;
		position: static;
		white-space: normal;
		width: 100%;
    text-align: center;
	}

	& td, th {
		color: ${({ theme }) => theme.colors.darkBrown};
		font-size: 0.85rem;
	}
`;
