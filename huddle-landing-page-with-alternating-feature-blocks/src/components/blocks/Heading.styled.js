import styled from 'styled-components';
import { color, layout, space, typography, compose } from 'styled-system';

const Heading = styled.h1`
	text-transform: capitalize;
	${compose(color, layout, space, typography)}
`;
Heading.defaultProps = {
	fontFamily: 'header'
};

export default Heading;
