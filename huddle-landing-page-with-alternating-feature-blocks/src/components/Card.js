import styled from "styled-components";
import { border, color, space, layout, shadow, compose } from "styled-system";
import Flex from "./styles/Flex.styled";
import Image from "./styles/Image.styled";
import TextTile, { Heading, Paragraph } from "./styles/TextTile.styled";

const CardStyled = styled.section`
    ${compose(border, color, space, shadow, layout)}
`

export function Card({ src, heading, body, reverse }) {
    const direction = reverse? "row-reverse": "row";

    return (
        <CardStyled 
            boxShadow={1} 
            borderRadius={1}
            maxWidth={[null, 18, "none"]}
            m={[null, "0 auto", null]}
            mb={[4, 4, 4]}
            px={[3, 4, 13]}
            pr={[null, null, 4]}
            pt={6}
            pb={[4, null, 7]}>
            <Flex 
                flexDirection={["column", "column", `${direction}`]}
                alignItems="center" 
                gap={["3.1em", null, "9.6em"]}>
                <Image width={["84%", null, "38%"]}  src={src} alt="" />
                <TextTile
                    textAlign={['center', 'center', 'left']}>
                    <Heading 
                        as={'h2'} 
                        fontSize={[3, null, 4]}
                        letterSpacing={["compact.1", null, "stretched.2"]}
                        mb={"0.6em"}>
                        {heading}
                    </Heading>
                    <Paragraph
                        color={'netural200'}
                        fontSize={[1, null, 2]}
                        lineHeight={[0, null, 1]}
                        letterSpacing={["compact.2", null, "stretched.0"]}>
                        {body}
                    </Paragraph>
                </TextTile>
            </Flex>
        </CardStyled>
    );
}