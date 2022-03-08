import styled from "styled-components";
import { color, layout, space, variant, compose, system } from "styled-system";

const Logo = styled.img`
    filter: ${props => props.filter? props.filter: 'none'};
    ${compose(color, layout, space)}
`

export default Logo;