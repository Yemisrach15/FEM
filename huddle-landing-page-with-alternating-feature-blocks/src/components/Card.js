import { StyledCard } from "./styles/Main.styled";

export function Card({ src, heading, para }) {
    return (
        <StyledCard>
            <img src={src} alt="" />
            <div>
                <h2>{heading}</h2>
                <p>{para}</p>
            </div>
        </StyledCard>
    );
}