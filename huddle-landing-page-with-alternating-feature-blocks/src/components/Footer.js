import styled from "styled-components";
import { color, compose, layout, space } from "styled-system";
import { AnnotatedText, Container, Flex, Icon, IconButton, Link, List, Logo, Paragraph, TextTile } from "./styles";

const FooterStyled = styled.footer`
    ${compose(color, layout, space)}
`
export default function Footer() {
    return (
        <FooterStyled
            bg={'netural300'}
            px={0}
            pt={["7.7em", null, "10.7em"]}
            pb={[5, null, 7]}>
            <Container
                width={['medium', 'extraSmall', 'small']}>
                <Flex equal
                    mb={3}
                    gap={3}
                    pl={{ md: 5 }}
                    pr={{ md: 3 }}
                    flexDirection={{ xs: 'column', hybrid: 'row' }}>
                    <TextTile>
                        <Logo
                            width={["9.3em", null, 13]}
                            filter={'white'}
                            mb={[2, null, 4]}
                            src='./images/logo.svg' />
                        <AnnotatedText
                            color="white"
                            mb={3}
                            pl={5}
                            top={1}
                            fontSize={1}
                            lineHeight={1}
                            content='url("./images/icon-location.svg")'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua
                        </AnnotatedText>
                        <AnnotatedText
                            color="white"
                            mb={3}
                            pl={5}
                            top={1}
                            fontSize={1}
                            lineHeight={1}
                            content='url("./images/icon-phone.svg")'>
                            +1-543-123-4567
                        </AnnotatedText>
                        <AnnotatedText
                            color="white"
                            mb={3}
                            pl={5}
                            top={1}
                            fontSize={1}
                            lineHeight={1}
                            content='url("./images/icon-email.svg")'>
                            example@huddle.com
                        </AnnotatedText>
                    </TextTile>
                    <List
                        mb={4}
                        pl={{ hybrid: '11%' }}
                        gap={[2, null, '33.5%']}
                        flexDirection={['column', 'row', 'row']}
                        justifyContent={['center', null, 'space-around']}>
                        <List
                            color='white'
                            gap={2}
                            flexDirection='column'
                            width={[null, null, 'auto']}>
                            <li><Link href="#">About Us</Link></li>
                            <li><Link href="#">What We Do</Link></li>
                            <li><Link href="#">FAQ</Link></li>
                        </List>
                        <List
                            color='white'
                            gap={2}
                            flexDirection='column'
                            width={[null, null, 'auto']}>
                            <li><Link href="#">Career</Link></li>
                            <li><Link href="#">Blog</Link></li>
                            <li><Link href="#">Contact Us</Link></li>
                        </List>
                    </List>
                    <Flex
                        gap={2}
                        justifyContent={'center'}>
                        <IconButton
                            variant='outlined'
                            width={2}
                            height={2}
                            fontSize={1}
                            icon={<Icon className='fa fa-facebook' />} />
                        <IconButton
                            variant='outlined'
                            width={2}
                            height={2}
                            fontSize={1}
                            icon={<Icon className='fa fa-twitter' />} />
                        <IconButton
                            variant='outlined'
                            width={2}
                            height={2}
                            fontSize={1}
                            icon={<Icon className='fa fa-instagram' />} />
                    </Flex>
                </Flex>
                <Paragraph
                    color='white'
                    fontSize={"0.58em"}
                    letterSpacing={'stretched.2'}
                    textAlign={{ xs: 'center', hybrid: 'right' }}>
                    &copy; Copyright 2018 Huddle. All rights reserved.
                </Paragraph>
            </Container>
        </FooterStyled>
    );
}