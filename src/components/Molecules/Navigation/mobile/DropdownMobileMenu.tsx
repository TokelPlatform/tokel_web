import styled from '@emotion/styled';
import icons from 'data/icons';
import React from 'react';
import { FlexColCenter, FlexRow, HSpacerMedium } from 'styles/common';

type DropDownMenuProps = {
  data: any;
  open: false;
};

const DropDownMobileMenuRoot = styled(FlexColCenter)`
  max-height: 0px;
  overflow: hidden;
  width: 100%;
  transition: max-height 0.25s ease-in;
  max-height: ${p => (p.open ? '1000px' : '0')};
  h5 {
    color: black;
    opacity: 0.6;
    text-transform: uppercase;
  }
`;

const Section = styled(FlexColCenter)`
  background-color: hsla(233, 49%, 55%, 0.1);
  text-align: center;
  width: inherit;
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

const MenuItemRow = styled(FlexRow)`
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 2rem;
  gap: 2rem;
  border-bottom: 1px solid hsla(233, 49%, 55%, 0.1);
  width: 100%;
  a {
    font-size: 20px;
  }
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
              style={{
                width: '100%',
                borderBottom: '1px solid hsla(233, 49%, 55%, 0.1)',
              }}
            >
              <MenuItemRow>
                <HSpacerMedium />
                {item.logo && <img width="40" src={icons[item.logo]}></img>}
                <a href={item.url}>{item.title}</a>
              </MenuItemRow>
              {item.links &&
                item.links.map(subitem => (
                  <SubSubSection key={subitem.title}>
                    <HSpacerMedium />
                    <a style={{ fontSize: '18px' }} href={subitem.url}>
                      {subitem.title}
                    </a>
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
