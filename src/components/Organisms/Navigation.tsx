import React, { useRef, useState } from 'react';

import Burger from 'components/Molecules/Navigation/Burger';
import NavigationSide from 'components/Molecules/Navigation/NavigationSide';
import breakpoints from 'styles/breakpoints';
import styled from '@emotion/styled';
import bigMenuLinks from 'data/navigation/bigMenuLinks';
import MenuLink from 'components/Atoms/navigation/MenuLink';
import DropDownMenu from 'components/Molecules/Navigation/DropDownMenu';
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

let menuNames = {};
bigMenuLinks.forEach(link => (menuNames[link.name] = false));

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
          <ListItem key={item.name} onClick={() => openSubmenu(item.name)}>
            <MenuLink href={item.link}>{item.name}</MenuLink>
            {item.submenu && <DropDownMenu data={item} open={openSubMenu[item.name]} />}
          </ListItem>
        ))}
      </NavigationHorizontal>

      <NavigationVertical ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <NavigationSide menuLinks={bigMenuLinks} open={open} setOpen={setOpen} />
      </NavigationVertical>
    </div>
  );
};
export default Navigation;
