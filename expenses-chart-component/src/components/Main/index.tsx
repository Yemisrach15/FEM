import React from 'react';
import { ChartSummary, StyledMain } from './style';
import { ContainerProps } from '@/types';
import { Flex, Text } from '@/components';
import { theme } from '@/styles';

const Main = ({ children }: ContainerProps) => {
  return (
    <StyledMain>
      {children}
      <ChartSummary>
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
      </ChartSummary>
    </StyledMain>
  );
};

export default Main;
