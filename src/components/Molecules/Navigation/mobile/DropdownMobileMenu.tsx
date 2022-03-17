import styled from '@emotion/styled';
import icons from 'data/icons';
import React from 'react';
import { FlexColCenter, FlexRowCenter } from 'styles/common';

type DropDownMenuProps = {
  data: any;
  open: false;
};

const DropDownMobileMenuRoot = styled(FlexColCenter)`
  margin-top: 2rem;
  display: ${p => (p.open ? 'block' : 'none')};

  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateY(0%)' : 'translateY(-100%)')};
  h5 {
    color: black;
    opacity: 0.6;
    text-transform: uppercase;
  }
`;

const Section = styled(FlexColCenter)`
  background-color: hsla(233, 49%, 55%, 0.1);
  /* width: 100%; */
  text-align: center;
  a {
    font-size: 30px;
  }
`;

const HeaderSection = styled.h5`
  background-color: hsla(233, 49%, 55%, 0.1);
  width: 100%;
  padding: 1rem 0;
  margin: 0;
`;

const MenuItemRow = styled(FlexRowCenter)`
  padding: 2rem 0;
  gap: 2rem;
  border-bottom: 1px solid hsla(233, 49%, 55%, 0.1);
  width: 100%;
  &:last-child {
    border-bottom: none;
  }
`;

const SubSubSection = styled(MenuItemRow)`
  background-color: var(--color-almostWhite);
`;

const DropDownMobileMenu = ({ data, open }: DropDownMenuProps) => {
  // const menu = getMenu(data);
  return (
    <DropDownMobileMenuRoot open={open}>
      {data.submenu.map(submenuItem => (
        <Section key={submenuItem.title}>
          {submenuItem.title && <HeaderSection>{submenuItem.title}</HeaderSection>}
          {submenuItem.subitems.map(item => (
            <FlexColCenter
              key={item.title}
              style={{ width: '100%', borderBottom: '1px solid hsla(233, 49%, 55%, 0.1)' }}
            >
              <MenuItemRow>
                {item.logo && <img width="50" src={icons[item.logo]}></img>}
                <a href={item.url}>{item.title}</a>
              </MenuItemRow>
              {item.links &&
                item.links.map(subitem => (
                  <SubSubSection key={subitem.title}>
                    <a href={subitem.url}>{subitem.title}</a>
                  </SubSubSection>
                ))}
            </FlexColCenter>
          ))}
        </Section>
      ))}
    </DropDownMobileMenuRoot>
  );
};
export default DropDownMobileMenu;
