import { MenuLink } from '../types';
import React from 'react';
import { FlexCol, FlexRow } from 'styles/common';
import styled from '@emotion/styled';
import icons from 'data/icons';

type NavigationSideProps = {
  open: boolean;
  setOpen: Function;
  menuLinks: Array<MenuLink>;
};

const defaultProps = {
  open: false,
  setOpen: o => !o,
  menuLinks: [],
};

const ListingMenuRoot = styled(FlexRow)`
  width: 500px;
  background-color: var(--color-almostWhite);
  flex-wrap: wrap;
  column-gap: 2rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 2rem;
`;
const HoverMenuRow = styled(FlexRow)`
  align-items: flex-start;
  justify-content: flex-start;
  column-gap: 1rem;
  width: 230px;
  height: 80px;
`;

const ListingMenu = ({ menuLinks }: NavigationSideProps) => {
  return (
    <ListingMenuRoot>
      {menuLinks.map(link => (
        <div key={link.title}>
          <h4>{link.title}</h4>
          {link.subitems.map(item => (
            <div key={item.name}>
              <HoverMenuRow>
                <img src={icons[item.logo]}></img>
                <FlexCol>
                  <a href={item.link}>
                    <h5>{item.name}</h5>
                  </a>
                  <p>{item.desc}</p>
                </FlexCol>
              </HoverMenuRow>
            </div>
          ))}
        </div>
      ))}
    </ListingMenuRoot>
  );
};

ListingMenu.defaultProps = defaultProps;
export default ListingMenu;