import styled from "styled-components";
import { compose } from "styled-system";
import { color, flexbox, space, typography, width } from "styled-system";
import { Flex } from "./Flex.styled";

export const StyledHeader = styled.header`
    text-align: center;
    ${compose(color, space)}
`

export const Nav = styled(Flex)`
    & > * {
        flex: initial;
    }
    ${flexbox}
`

export const Logo = styled.img`
    ${width}
`

export const H1 = styled.h1`
    ${space}
    ${typography}
`

export const P = styled.p`
    word-spacing: 1px;
    ${space}
    ${typography}
`