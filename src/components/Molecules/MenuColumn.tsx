import React, { ReactElement } from 'react';

// import breakpoints from '../../styles/breakpoints';
import styled from '@emotion/styled';
import { FlexCol, FlexColCenter } from 'styles/common';

const MenuColumnRoot = styled(FlexColCenter)`
  margin-top: 1rem;
  width: 120px;

  align-items: flex-start;
  justify-content: flex-start;
  p,
  a {
    color: #000000;
    font-size: inherit;
    margin-top: 0.5rem;
  }
  h5 {
    color: #000000;
    font-weight: 700;
    margin-bottom: 0.75rem;
  }
  a:hover {
    color: var(--color-purple);
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
