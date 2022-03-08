import styled from 'styled-components';
import { layout, space, compose } from 'styled-system';

const Image = styled.img`
    ${compose(layout, space)}
`

export default Image;