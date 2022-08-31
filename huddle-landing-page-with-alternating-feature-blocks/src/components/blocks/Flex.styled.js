import styled, { css } from 'styled-components/macro';
import { space, layout, flexbox, flex, compose, system, color } from 'styled-system';
import { invalidHTMLProps } from './constants';

const gap = system({
	gap: {
		property: 'gap',
		scale: 'space'
	}
});

const Flex = styled.div.withConfig({
	shouldForwardProp: (prop, defaultValidatorFn) => !invalidHTMLProps.includes(prop) && defaultValidatorFn(prop),
})`
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
