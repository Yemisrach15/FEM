import React from 'react';
import styled from 'styled-components';
import logo from '../assets/images/logo.svg';

const StyledHeader = styled.header`
	background-color: ${({ theme }) => theme.colors.primary};
	border-radius: 0.8rem;
	color: ${({ theme }) => theme.colors.paleOrange};
	display: flex;
	justify-content: space-between;
	padding: 1rem 1.2rem;

	& h1 {
		font-size: 0.65rem;
		font-weight: 400;
		letter-spacing: -0.3px;
	}

	& p {
		font-size: 1.2rem;
		font-weight: 500;
		letter-spacing: -0.5px;
	}

	& img {
		width: 70%;
	}

	& > div:first-child {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	& > div:last-child {
		display: flex;
		justify-content: flex-end;
	}
`;

const Header = () => {
  return (
    <StyledHeader>
      <div>
        <h1>My balance</h1>
        <p>$921.48</p>
      </div>
      <div>
				<img src={logo} alt="" />
			</div>
    </StyledHeader>
  );
};

export default Header;
