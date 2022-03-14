import { MenuLink } from '../types';
import React from 'react';
import { FlexCol, FlexRow } from 'styles/common';
import styled from '@emotion/styled';
import icons from 'data/icons';
// import icons from 'data/icons';

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

const HeaderMenuRoot = styled.div`
  width: 500px;
  background-color: var(--color-almostWhite);
  flex-wrap: wrap;
  column-gap: 2rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  p {
    margin-top: 4px;
  }
  h4 {
    margin-bottom: 0px;
  }
  h5 {
    padding-bottom: 1rem;
  }
  a:hover {
    color: var(--color-purple);
    text-decoration: underline;
    opacity: 0.7;
  }
`;
const HoverMenuRow = styled(FlexRow)`
  align-items: flex-start;
  justify-content: flex-start;
  column-gap: 1rem;
  width: 200px;
`;

const Header = styled(FlexRow)`
  column-gap: 1rem;
  margin-bottom: 3rem;
`;

const HeaderMenu = ({ menuLinks }: NavigationSideProps) => {
  return (
    <HeaderMenuRoot>
      {menuLinks.map(section => (
        <div key={section.title}>
          <Header>
            <img src={icons.magic}></img>
            <div>
              <h4>{section.title}</h4>
              {section.desc && <p>{section.desc}</p>}
            </div>
          </Header>
          <FlexRow style={{ marginLeft: '3rem' }}>
            {section.subitems.map(item => (
              <FlexCol key={item.title}>
                <h5>{item.title}</h5>

                {item.links.map(item => (
                  <HoverMenuRow key={item.name}>
                    <FlexCol>
                      <a href={item.link}>
                        <p style={{ marginBottom: '4px' }}>{item.name}</p>
                      </a>
                    </FlexCol>
                  </HoverMenuRow>
                ))}
              </FlexCol>
            ))}
          </FlexRow>
        </div>
      ))}
    </HeaderMenuRoot>
  );
};

HeaderMenu.defaultProps = defaultProps;
export default HeaderMenu;

// <HoverMenuRow>
//                 <img src={icons[item.logo]}></img>
//                 <FlexCol>
//                   <a href={item.link}>
//                     <h5>{item.name}</h5>
//                   </a>
//                   <p>{item.desc}</p>
//                 </FlexCol>
//               </HoverMenuRow>
