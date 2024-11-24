import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, QUERIES } from '../../constants';

import SearchInput from '../SearchInput';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';

const SuperHeader = () => {
  return (
    <Wrapper>
      <MarketingMessage>
        Free shipping on domestic orders over $75!
      </MarketingMessage>
      <WrappedSearchInput />
      <HelpLink href="/help">Help</HelpLink>
      <StyledButton>
        <Icon id="shopping-bag" strokeWidth={1} />
      </StyledButton>
    </Wrapper>
  );
};

const StyledButton = styled(UnstyledButton)`
    @media ${QUERIES.tabletAndSmaller} {
        display: none;
    }
`;

const WrappedSearchInput = styled(SearchInput)`
    @media ${QUERIES.tabletAndSmaller} {
        display: none;
    }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  font-size: 0.875rem;
  color: ${COLORS.gray[300]};
  background-color: ${COLORS.gray[900]};
  height: 40px;
  padding-left: 32px;
  padding-right: 32px;

  @media ${QUERIES.tabletAndSmaller} {
    height: 4px;
  }
`;

const MarketingMessage = styled.span`
  color: ${COLORS.white};
  margin-right: auto;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const HelpLink = styled.a`
  color: inherit;
  text-decoration: none;
  outline-offset: 2px;

  &:not(:focus-visible) {
    outline: none;
  }

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

export default SuperHeader;
