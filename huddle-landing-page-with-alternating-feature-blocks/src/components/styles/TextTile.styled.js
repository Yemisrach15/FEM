import styled from 'styled-components';
import { color, layout, position, space, typography, shadow, border, compose } from 'styled-system';

const TextTile = styled.div`
	${compose(color, layout, position, space, typography, shadow, border)}
`;

export default TextTile;
