import styled from 'styled-components';
import { color, layout, space, typography, shadow, border, compose } from 'styled-system';

const TextTile = styled.div`
    ${compose(color, layout, space, typography, shadow, border)}
`

export default TextTile;