import styled, { css } from "styled-components";
import { space, layout, flexbox, flex, compose, system } from "styled-system";

const gap = system({
    gap: {
        property: "gap",
        scale: "space",
    },
});

const Flex = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    & > :lastChild {
        ${flex}
    }

    ${compose(flexbox, layout, space, gap)}
    ${props => props.equal && css`
        & > * {
            flex: 1;
        }
    `}
`

export default Flex;