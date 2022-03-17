import React, { useRef, useState } from 'react';
import breakpoints from 'styles/breakpoints';
import styled from '@emotion/styled';

import Burger from 'components/Molecules/Navigation/mobile/Burger';
// import NavigationSide from 'components/Molecules/Navigation/mobile/NavigationSide';
import bigMenuLinks from 'data/navigation/bigMenuLinks';
import MenuLink from 'components/Atoms/navigation/MenuLink';
import DropDownMenu from 'components/Molecules/Navigation/DropdownMenu';
import { StyledSideMenu } from 'components/Atoms/navigation/mobile/StyledSideMenu';
import DropDownMobileMenu from 'components/Molecules/Navigation/mobile/DropdownMobileMenu';
// import { FlexColCenter } from 'styles/common';
const changeNavigationStyleAt = breakpoints.smallScreen;

const NavigationHorizontal = styled.ul`
  margin: 0;
  display: flex;
  padding: 0;
  justify-content: center;
  list-style-type: none;
  color: var(--color-almostWhite);
  padding-top: 0.5rem;
  z-index: 3;
  position: relative;
  @media (max-width: ${changeNavigationStyleAt}) {
    display: none;
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

const ListItem = styled.li`
  margin-right: 2rem;
  position: relative;
`;

const SideListItem = styled.li`
  /* margin-right: 2rem; */
  position: relative;
  list-style-type: none;
  padding: 2rem;
  transition: all 0.3s ease;
  @media (max-width: ${breakpoints.mobilebig}) {
    padding: 3rem 0rem;
  }
  width: 100%;
  text-align: center;
  &:active {
  }
`;

let menuNames = {};
bigMenuLinks.forEach(link => (menuNames[link.title] = false));

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();

  const [openSubMenu, setOpenSubMenu] = useState(menuNames);
  console.log(openSubMenu);

  const openSubmenu = name => {
    const newMenuState = {
      ...menuNames,
      [name]: !openSubMenu[name],
    };
    setOpenSubMenu(newMenuState);
  };

  return (
    <div>
      <NavigationHorizontal>
        {bigMenuLinks.map(item => (
          <ListItem key={item.title} onClick={() => openSubmenu(item.title)}>
            <MenuLink href={item.url}>{item.title}</MenuLink>
            {item.submenu && <DropDownMenu data={item} open={openSubMenu[item.title]} />}
          </ListItem>
        ))}
      </NavigationHorizontal>

      <NavigationVertical ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <StyledSideMenu open={open}>
          {bigMenuLinks.map(item => (
            <SideListItem key={item.title} onClick={() => openSubmenu(item.title)}>
              <MenuLink href={item.url}>{item.title}</MenuLink>
              {item.submenu && <DropDownMobileMenu data={item} open={openSubMenu[item.title]} />}
            </SideListItem>
          ))}
        </StyledSideMenu>
      </NavigationVertical>
    </div>
  );
};
export default Navigation;
