import styled from 'styled-components/macro';
import { layout, space, compose } from 'styled-system';
import { invalidHTMLProps } from './constants';

const Image = styled.img.withConfig({
	shouldForwardProp: (prop, defaultValidatorFn) => !invalidHTMLProps.includes(prop) && defaultValidatorFn(prop),
})`
	${compose(layout, space)}
`;

export default Image;
