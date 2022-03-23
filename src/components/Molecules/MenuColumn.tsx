import React, { ReactElement } from 'react';

import styled from '@emotion/styled';
import { FlexCol, FlexColCenter } from 'styles/common';

const MenuColumnRoot = styled(FlexColCenter)`
  margin-top: 1rem;
  padding: 0 2rem;

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

type SectionListProps = {
  menuItems: [
    {
      title: string;
      url: string;
    }
  ];
  title: string;
};

const MenuColumn = ({ title, menuItems }: SectionListProps): ReactElement => (
  <MenuColumnRoot>
    <h5>{title}</h5>
    <FlexCol>
      {menuItems.map((menuItem, idx) => {
        if (!menuItem.url) return <p key={idx + 100}>{menuItem.title}</p>;
        return (
          <a key={idx} href={menuItem.url}>
            {menuItem.title}
          </a>
        );
      })}
    </FlexCol>
  </MenuColumnRoot>
);

export default MenuColumn;
