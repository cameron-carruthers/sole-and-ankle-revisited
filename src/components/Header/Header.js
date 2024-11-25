import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, QUERIES, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';
import VisuallyHidden from '../VisuallyHidden';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <DesktopHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side />
      </DesktopHeader>

      <MobileHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <UnstyledButton>
          <Icon id="shopping-bag" strokeWidth={2} />
        </UnstyledButton>
        <VisuallyHidden>Open cart</VisuallyHidden>
        <UnstyledButton>
          <Icon id="search" strokeWidth={2} />
        </UnstyledButton>
        <VisuallyHidden>Search</VisuallyHidden>
        <UnstyledButton>
          <Icon id="menu" strokeWidth={2} />
        </UnstyledButton>
        <VisuallyHidden>Open menu</VisuallyHidden>
      </MobileHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const DesktopHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const MobileHeader = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    display: flex;
    justify-content: flex-end;
    gap: 32px;
    align-items: center;
    height: 72px;
    border-bottom: 1px solid ${COLORS.gray[300]};
    padding: 18px 32px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding-left: 16px;
    padding-right: 16px;
    gap: 16px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const LogoWrapper = styled.div`
  margin-right: auto;
`;

export default Header;
