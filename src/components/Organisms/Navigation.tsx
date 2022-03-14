import React, { useRef, useState } from 'react';

import Burger from 'components/Molecules/Navigation/Burger';
import NavigationSide from 'components/Molecules/Navigation/NavigationSide';
import breakpoints from 'styles/breakpoints';
import styled from '@emotion/styled';
import { FlexRow } from 'styles/common';
import bigMenuLinks from 'data/navigation/bigMenuLinks';
import FullNavigationSideMenu from 'components/Molecules/Navigation/FullMenu/SideMenu';
import ListingMenu from 'components/Molecules/Navigation/FullMenu/ListingMenu';
import HeaderMenu from 'components/Molecules/Navigation/FullMenu/HeaderMenu';
const changeNavigationStyleAt = breakpoints.smallScreen;

const NavigationHorizontal = styled.ul`
  margin: 0;
  padding: 0;
  justify-content: center;
  list-style-type: none;
  color: var(--color-almostWhite);
  padding-top: 0.5rem;
  z-index: 2;
  position: relative;
  @media (max-width: ${changeNavigationStyleAt}) {
    display: none;
  }

  li {
    display: inline;
    text-align: center;
    margin-right: 2rem;
    :target {
      hr {
        margin-left: 30%;
      }
    }
  }

  a::before {
    content: '';
    display: block;
    position: absolute;
    bottom: 3px;
    left: 0;
    height: 3px;
    width: 100%;
    background-color: #000;
    transform-origin: right top;
    transform: scale(0, 1);
    transition: color 0.1s, transform 0.2s ease-out;
  }
  a:active::before {
    background-color: #000;
  }
  a:hover,
  a:focus,
  a:active {
    color: var(--color-purple);
    text-decoration: none;
  }
`;

const NavigationVertical = styled.div`
  display: none;
  padding-bottom: 4rem;
  @media (max-width: ${changeNavigationStyleAt}) {
    display: block;
  }
`;

const SubMenu = styled(FlexRow)`
  width: 800px;
  height: inherit;
  flex-wrap: wrap;
  background-color: var(--color-almostWhite);
  position: absolute;
  margin-top: 20px;
  margin-left: -100px;
  padding-left: 2rem;
  border-radius: 4px;

  z-index: 3;
  h4 {
    font-size: 1.125rem;
    text-transform: uppercase;
    font-weight: 700;
  }
  h5 {
    font-size: 1rem;
    margin: 0;
  }
  p {
    font-size: 14px;
    opacity: 0.6;
    margin-top: 4px;
  }
  a {
    text-decoration: none;
    transition: color 0.1s, background-color 0.1s;
  }
  h4 {
    margin-top: 0px;
  }
  h4,
  h5,
  a,
  p {
    color: #000;
  }
`;

const MenuLink = styled.a`
  color: var(--color-almostWhite);
  text-decoration: none;
  position: relative;
  padding: 4px 0;
  margin: 0 4px;
  letter-spacing: 1px;
  font-size: 14px;
  line-height: 16px;
  font-weight: 800;
  text-transform: uppercase;
  transition: color 0.1s, background-color 0.1s, padding 0.2s ease-in;
`;
const ListItem = styled.li``;

const Tail = styled.div`
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 20px solid var(--color-almostWhite);
  position: absolute;
  top: ${p => (p.top ? p.top : '-15px')};
  left: ${p => (p.left ? p.left : '135px')}; ;
`;

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const [showGetStarted, setShowGetStarted] = useState(false);
  const [showDevelopers, setShowDevelopers] = useState(false);

  const openSubmenu = name => {
    switch (name) {
      case 'Get Started':
        setShowGetStarted(!showGetStarted);
        setShowDevelopers(false);
        break;
      case 'Developers':
        setShowGetStarted(false);
        setShowDevelopers(!showDevelopers);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <NavigationHorizontal>
        {bigMenuLinks.map((item, idx) => (
          <ListItem key={item.name} onClick={() => openSubmenu(item.name, idx)}>
            <MenuLink chosen={item.name} href={item.link}>
              {item.name}
            </MenuLink>
          </ListItem>
        ))}
      </NavigationHorizontal>

      <NavigationVertical ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <NavigationSide menuLinks={bigMenuLinks} open={open} setOpen={setOpen} />
      </NavigationVertical>

      {showGetStarted && (
        <SubMenu>
          <Tail />
          <ListingMenu menuLinks={bigMenuLinks[0].submenu} />
          <FullNavigationSideMenu menuLinks={bigMenuLinks[0].submenuSide} />
        </SubMenu>
      )}
      {showDevelopers && (
        <SubMenu>
          <Tail left="260px" />
          <HeaderMenu menuLinks={bigMenuLinks[1].submenu} />
          <FullNavigationSideMenu menuLinks={bigMenuLinks[1].submenuSide} />
        </SubMenu>
      )}
    </div>
  );
};
export default Navigation;
