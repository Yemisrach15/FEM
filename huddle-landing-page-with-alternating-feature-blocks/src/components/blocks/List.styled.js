import styled from 'styled-components/macro';
import { compose, typography } from 'styled-system';
import { invalidHTMLProps } from './constants';
import Flex from './Flex.styled';

const List = styled(Flex).withConfig({
	shouldForwardProp: (prop, defaultValidatorFn) => !invalidHTMLProps.includes(prop) && defaultValidatorFn(prop),
})`
	align-items: flex-start;
	list-style: none;
	width: 100%;
	${compose(typography)}
`;

List.defaultProps = {
	as: 'ul'
};

export default List;
