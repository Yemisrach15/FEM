import styled from "styled-components";
import { color, verticalAlign, layout, space, compose, typography, system, left, top, right, bottom } from "styled-system";

const content = system({
    content: {
        property: 'content',
    }
})

export const Icon = styled.span`
    color: inherit;
    font-size: inherit;
    ${compose(space, layout, content, verticalAlign, typography)}
`

const StyledAnnotatedText = styled.p`
    position: relative;
    &:before {
        left: 0;
        position: absolute;
        top: 0;
        ${compose(top, left, right, bottom, content, typography)}
    }
    ${compose(color, space, layout, typography)}
`

export default function AnnotatedText({ children, ...props }) {
    return (
        <StyledAnnotatedText {...props}>
            {children}
        </StyledAnnotatedText>
    );
}
