import styled, { css } from 'styled-components';
import { space, layout, flexbox, flex, compose, system, color } from 'styled-system';

const gap = system({
	gap: {
		property: 'gap',
		scale: 'space'
	}
});

const Flex = styled.div`
	align-items: center;
	display: flex;
	justify-content: space-between;
	& > :lastchild {
		${flex}
	}
	& * {
		${color}
	}

	${compose(color, flexbox, layout, space, gap)}
	${(props) =>
		props.equal &&
		css`
			& > * {
				flex: 1;
			}
		`
	}
`;

export default Flex;
