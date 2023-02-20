import React from 'react';
import styled, { keyframes } from 'styled-components';
import { ReactComponent as IconX } from '../assets/icons/icon-remove.svg';

const animation = keyframes`
	0% {
		opacity: 1;
		transform: translate(0);
	}

	100% {
		opacity: 0;
		transform: translateY(-2rem);
	}
`;

const StyledHintText = styled.div`
  align-items: center;
  animation: forwards ${animation} 0.35s ease-in-out;
  animation-play-state: paused;
  background-color: ${({ theme }) => theme.colors.darkBrown};
  color: ${({ theme }) => theme.colors.cream};
  display: flex;
  justify-content: center;
  left: 0;
  letter-spacing: 0.65px;
  padding: 0.75rem;
  position: absolute;
  text-align: center;
  top: 0;
  width: 100%;

  & p {
    display: inline-block;
    font-size: 0.6rem;
    margin: 0 0.75rem;
  }

  & button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 0.6rem;
    height: 0.5rem;
    position: absolute;
    right: 0.8rem;
    width: 0.5rem;
  }

  & span {
    clip-path: inset(50%);
    clip: rect(0 0 0 0);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`;

const HintText = () => {
  const boxRef = React.useRef<HTMLDivElement>(null);
  const onXBtnClick = () => {
    if (boxRef.current) boxRef.current.style.animationPlayState = 'running';
  };

  return (
    <StyledHintText ref={boxRef}>
      <p>Hint: Click on the chart to toggle visualization type</p>
      <button onClick={onXBtnClick}>
        <span>Close</span>
        <IconX />
      </button>
    </StyledHintText>
  );
};

export default HintText;
