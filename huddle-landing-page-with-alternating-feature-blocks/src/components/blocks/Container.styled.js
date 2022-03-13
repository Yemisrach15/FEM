import styled from 'styled-components';
import { color, space, layout, variant, compose } from 'styled-system';

const Container = styled.div`
	margin: 0 auto;
	${compose(
		color,
		layout,
		space,
		variant({
			prop: 'width',
			scale: 'width'
		})
	)}
`;

Container.defaultProps = {
	maxWidth: '1600px' // FIXME: Do not hardcode value
};

export default Container;
