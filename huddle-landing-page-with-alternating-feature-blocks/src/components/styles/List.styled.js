import styled from "styled-components";
import { compose, typography } from "styled-system";
import Flex from "./Flex.styled";

const List = styled(Flex)`
    align-items: flex-start;
    list-style: none;
    width: 100%;
    ${compose(typography)}
`

List.defaultProps = {
    as: 'ul'
}

export default List;