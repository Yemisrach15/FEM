import { StyledCard } from "./styles/Main.styled";
import { Flex } from "./styles/Flex.styled";

export function Card({ src, heading, para }) {
    return (
        <StyledCard  color="netural200" width="13em">
            <Flex alignItems="center" gap="3.1em">
                <img src={src} alt="" />
                <div>
                    <h2>{heading}</h2>
                    <p>{para}</p>
                </div>
            </Flex>
        </StyledCard>
    );
}