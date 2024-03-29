import React from 'react';
import logo from '@/assets/icons/logo.svg';
import { Title, StyledHeader } from './style';

const Header = () => {
  return (
    <StyledHeader>
      <div>
        <Title>My balance</Title>
        <p>$921.48</p>
      </div>
			<img src={logo} height={44} width={50} alt="" aria-hidden="true" />
    </StyledHeader>
  );
};

export default Header;
