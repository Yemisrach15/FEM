import styled, { css } from "styled-components";
import { space, layout, flexbox, flex, compose } from "styled-system";

const Flex = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    gap: ${props => props.gap ? props.gap[0] : "3em"};

    @media screen and (min-width: 'breakpoints.0') {
        gap: ${props => props.gap ? props.gap[1] : props.gap[0]};
    }
    @media screen and (min-width: 'breakpoints.1') {
        gap: ${props => props.gap ? props.gap[2] : props.gap[1]};
    }

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