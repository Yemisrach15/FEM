import styled from 'styled-components';
import { color, layout, space, typography, compose } from 'styled-system';

const Paragraph = styled.p`
    ${compose(color, layout, space, typography)}
`;

export default Paragraph;
