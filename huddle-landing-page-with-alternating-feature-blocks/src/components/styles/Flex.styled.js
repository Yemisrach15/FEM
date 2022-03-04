import styled from "styled-components";
import { space, flexbox } from "styled-system";

export const Flex = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3em;

    & > * {
        flex: 1;
    }

    ${space}
    ${flexbox}
`