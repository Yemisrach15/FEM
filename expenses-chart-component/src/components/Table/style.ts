import styled from "styled-components";
import { SrOnly } from "@/components";

export const Table = styled.table`
	${SrOnly}
	border-spacing: 1rem 0.2rem;

	& td, th {
		color: ${({ theme }) => theme.colors.darkBrown};
		font-size: 0.85rem;
	}
`;
