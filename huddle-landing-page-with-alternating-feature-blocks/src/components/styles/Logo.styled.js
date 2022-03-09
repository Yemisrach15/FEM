import styled from "styled-components";
import { color, layout, space, compose, system } from "styled-system";

const filter = system({
    filter: {
        property: 'filter',
        scale: 'filters'
    }
})

const Logo = styled.img`
    ${compose(color, layout, space, filter)}
`

export default Logo;