import { MenuLink } from '../types';
import React from 'react';
import { StyledSideMenu } from 'components/Atoms/navigation/mobile/StyledSideMenu';
import styled from '@emotion/styled';
import { FlexColCenter } from 'styles/common';

type NavigationSideProps = {
  open: boolean;
  setOpen: Function;
  data: Array<MenuLink>;
};

const defaultProps = {
  open: false,
  setOpen: o => !o,
  data: [],
};

const SubMenu = styled(FlexColCenter)`
  display: none;
`;

const NavigationSide = ({ open, setOpen, data }: NavigationSideProps) => {
  return (
    <StyledSideMenu open={open}>
      {data.map(link => (
        <div key={link.title}>
          <a href={link.url} onClick={() => setOpen(false)}>
            {link.title}
          </a>
          <SubMenu>
            <hr />
            {link.submenu &&
              link.submenu.map(submenuItem =>
                submenuItem.subitems.map(item => (
                  <a key={item.title} href={item.url}>
                    {item.title}
                  </a>
                ))
              )}
            <hr />
          </SubMenu>
        </div>
      ))}
    </StyledSideMenu>
  );
};

NavigationSide.defaultProps = defaultProps;
export default NavigationSide;
