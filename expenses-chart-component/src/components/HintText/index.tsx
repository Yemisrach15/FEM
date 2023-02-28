import React from 'react';
import { ReactComponent as IconX } from '@/assets/icons/icon-remove.svg';
import { SrOnlyText } from '@/components';
import { StickyTopHint } from './style';

const HintText = () => {
  const boxRef = React.useRef<HTMLDivElement>(null);
  const onXBtnClick = () => {
    if (boxRef.current) boxRef.current.style.animationPlayState = 'running';
  };

  return (
    <StickyTopHint ref={boxRef}>
      <p>Hint: Click on the chart to toggle visualization type</p>
      <button onClick={onXBtnClick} title="Dismiss">
        <SrOnlyText>Dismiss</SrOnlyText>
        <IconX aria-hidden="true" focusable="false"/>
      </button>
    </StickyTopHint>
  );
};

export default HintText;
