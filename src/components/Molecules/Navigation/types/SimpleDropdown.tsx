import React from 'react';
import styled from '@emotion/styled';
import { FlexCol } from 'styles/common';
import MenuLink from 'components/Atoms/navigation/MenuLink';

type SimpleDropDownProps = {
  open: boolean;
  setOpen: Function;
  data: {
    title: string;
    subitems: any;
  };
};

const defaultProps = {
  open: false,
  setOpen: o => !o,
  data: {},
};

const SimpleDropDownRoot = styled(FlexCol)`
  width: 130px;
  padding: 2rem;

  h5 {
    margin: 0;
  }
`;
const SimpleDropDown = ({ data }: SimpleDropDownProps) => {
  return (
    <SimpleDropDownRoot>
      {data.title && <h5>{data.title}</h5>}
      {data.subitems.map(link => (
        <MenuLink href={link.url} key={link.title}>
          {link.title}
        </MenuLink>
      ))}
    </SimpleDropDownRoot>
  );
};

SimpleDropDown.defaultProps = defaultProps;
export default SimpleDropDown;
