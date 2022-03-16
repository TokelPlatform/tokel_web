import DropDownMenuRoot from 'components/Atoms/navigation/DropDownMenuRoot';
import Tail from 'components/Atoms/navigation/Tail';
import React from 'react';
import HeaderMenu from './FullMenu/HeaderMenu';
import ListingMenu from './FullMenu/ListingMenu';
import FullNavigationSideMenu from './FullMenu/SideMenu';
import SimpleDropDown from './FullMenu/SimpleDropDown';

type DropDownMenuProps = {
  data: any;
  open: false;
};

const getMenu = data => {
  switch (data.type) {
    case 'simple':
      return <SimpleDropDown data={data.submenu} />;
    case 'listing':
      return <ListingMenu menuLinks={data.submenu} />;
    case 'header':
      return <HeaderMenu menuLinks={data.submenu} />;
    default:
      return null;
  }
};

const DropDownMenu = ({ data, open }: DropDownMenuProps) => {
  const menu = getMenu(data);
  return (
    <DropDownMenuRoot open={open} wide={data.type !== 'simple'}>
      <Tail />
      {menu}
      {menu && data.type !== 'simple' && <FullNavigationSideMenu menuLinks={data.submenuSide} />}
    </DropDownMenuRoot>
  );
};
export default DropDownMenu;
