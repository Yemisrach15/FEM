import styled from "styled-components";
import { space, layout, flexbox, flex } from "styled-system";

export const Flex = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: ${props => props.gap? props.gap: "3em"};

    & > * {
        flex: 1;
    }
    & > :last-child {
        ${flex}
    }

    ${flexbox}
    ${layout}
    ${space}
`