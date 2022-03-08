import styled, { css } from "styled-components";
import { space, layout, flexbox, flex, compose } from "styled-system";

const Flex = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    gap: ${props => props.gap ? props.gap : "3em"};

    & > : lastChild {
        ${flex}
    }

    ${compose(flexbox, layout, space)}
    ${props => props.equal && css`
        & > * {
            flex: 1;
        }
    `}
`

export default Flex;