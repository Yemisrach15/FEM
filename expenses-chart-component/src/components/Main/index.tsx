import React from 'react';
import { theme } from '@/styles';
import { ContainerProps } from '@/components/Layout/types';
import { Flex, StyledMain, Text, TitleL2 } from './style';

const Main = ({ children }: ContainerProps) => {
  return (
    <StyledMain>
      <TitleL2>Spending - Last 7 days</TitleL2>
      {children}
      <div>
        <Text $color={theme.colors.mediumBrown} $fontSize="0.65rem">
          Total this month
        </Text>
        <Flex
          $alignItems={['flex-start', 'flex-start']}
          $justifyContent={['space-between', 'space-between']}
          $direction={['column', 'row']}
        >
          <Text $color={theme.colors.darkBrown} $fontSize="1.7rem" $fontWeight="700">
            $478.33
          </Text>
          <Flex
            as="p"
            $alignItems={['flex-start', 'flex-end']}
            $justifyContent={['center', 'center']}
            $direction={['column', 'column']}
            $gap={['0.15rem', '0.15rem']}
          >
            <Text as="strong" $color={theme.colors.darkBrown} $fontSize="0.6rem">
              +2.4%
            </Text>
            <Text as="span" $fontSize="0.6rem">
              from last month
            </Text>
          </Flex>
        </Flex>
      </div>
    </StyledMain>
  );
};

export default Main;
