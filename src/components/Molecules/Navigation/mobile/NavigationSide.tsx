import { MenuLink } from '../types';
import React from 'react';
import { StyledSideMenu } from 'components/Atoms/navigation/mobile/StyledSideMenu';

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

const NavigationSide = ({ open, setOpen, data }: NavigationSideProps) => {
  return (
    <StyledSideMenu open={open}>
      {data.map(link => (
        <a href={link.url} key={link.title} onClick={() => setOpen(false)}>
          {link.title}
        </a>
      ))}
    </StyledSideMenu>
  );
};

NavigationSide.defaultProps = defaultProps;
export default NavigationSide;
