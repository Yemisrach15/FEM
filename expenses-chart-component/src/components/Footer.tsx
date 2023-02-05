import styled from 'styled-components';

const StyledFooter = styled.footer`
  font-size: 0.65rem;
	margin-top: 2rem;
  text-align: center;

  & > a {
    color: hsl(228, 45%, 44%);
		font-size: 0.75rem;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      Challenge by{' '}
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </a>
      . Coded by <a href="https://github.com/Yemisrach15">Yemisrach15</a>.
    </StyledFooter>
  );
};

export default Footer;
