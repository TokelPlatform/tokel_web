import React, { ReactElement } from 'react';

// import breakpoints from '../../styles/breakpoints';
import styled from '@emotion/styled';
import { FlexCol, FlexColCenter } from 'styles/common';

const MenuColumnRoot = styled(FlexColCenter)`
  margin-top: 1rem;
  max-width: 150px;
  align-items: flex-start;
  justify-content: flex-start;
  p {
    color: white;
    font-size: inherit;
    margin-top: 0.5rem;
  }
  h5 {
    font-weight: 700;
    margin-bottom: 0.75rem;
  }
`;

const List = styled(FlexCol)``;

type SectionListProps = {
  menuItems: [
    {
      name: string;
      url: string;
    }
  ];
  title: string;
};

const MenuColumn = ({ title, menuItems }: SectionListProps): ReactElement => (
  <MenuColumnRoot>
    <h5>{title}</h5>
    <List>
      {menuItems.map((menuItem, idx) => {
        if (!menuItem.url) return <p key={idx + 100}>{menuItem.name}</p>;
        return (
          <a key={idx} href={menuItem.url}>
            {menuItem.name}
          </a>
        );
      })}
    </List>
  </MenuColumnRoot>
);

export default MenuColumn;
