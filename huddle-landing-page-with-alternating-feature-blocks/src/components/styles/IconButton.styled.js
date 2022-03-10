import styled from "styled-components";
import { color, compose, flexbox, typography } from "styled-system";
import Button from "./Button.styled";

const StyledIconButton = styled(Button)`
    align-items: center;
    display: flex;
    justify-content: center;
    &:hover {
        opacity: 1;
        ${color}
    }
    ${compose(flexbox, typography)}
`

export default function IconButton({icon, ...props }) {
    return (
        <StyledIconButton {...props}>
            {icon}
        </StyledIconButton>
    );
}