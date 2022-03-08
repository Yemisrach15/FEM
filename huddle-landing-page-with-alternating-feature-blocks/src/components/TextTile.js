import styled from 'styled-components';
import { color, layout, space, typography, compose } from 'styled-system';

export const Heading = styled.h1`
    text-transform: capitalize;
    ${compose(color, layout, space, typography)}
`
Heading.defaultProps = {
    fontFamily: 'header'
}

export const Paragraph = styled.p`
    ${compose(color, layout, space, typography)}
`
const TextTile = styled.div`
    ${compose(color, layout, space, typography)}
`

export default TextTile;