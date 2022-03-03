import { StyledFooter, Logo, StyledParagraph, StyledSection, SocialIcon, CopyRightParagraph } from "./styles/Footer.styled";
import { Flex } from "./styles/Flex.styled";

export function Footer() {
    return (
        <StyledFooter>
            <Flex>
                <section>
                    <Logo src="./images/logo.svg" alt="" />
                    <StyledParagraph><img src="./images/icon-location.svg" alt=""></img>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</StyledParagraph>
                    <StyledParagraph><img src="./images/icon-phone.svg" alt=""></img>+1-543-123-4567</StyledParagraph>
                    <StyledParagraph><img src="./images/icon-email.svg" alt=""></img>example@huddle.com</StyledParagraph>
                </section>
                <StyledSection>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">What We Do</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Career</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </StyledSection>
                <StyledSection row>
                    <ul>
                        <SocialIcon><a href="#"><i class="fa fa-facebook"></i></a></SocialIcon>
                        <SocialIcon><a href="#"><i class="fa fa-twitter"></i></a></SocialIcon>
                        <SocialIcon><a href="#"><i class="fa fa-instagram"></i></a></SocialIcon>
                    </ul>
                </StyledSection>
                <CopyRightParagraph>&copy; Copyright 2018 Huddle. All rights reserved.</CopyRightParagraph>
            </Flex>
        </StyledFooter>
    );
}