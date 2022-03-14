import { MenuLink } from '../types';
import React from 'react';
import { FlexCol } from 'styles/common';
import styled from '@emotion/styled';

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

const FullNavigationSideMenuRoot = styled.div`
  background-color: hsla(233, 49%, 55%, 0.1);
  width: 220px;
  padding: 2rem 3rem 0rem 2rem;

  p {
    margin-top: 0px;
  }
  h4 {
    margin-bottom: 0px;
  }

  .links {
    margin-top: 1.5rem;
  }

  a:hover {
    color: var(--color-purple);
    text-decoration: underline;
    opacity: 0.7;
  }
`;

const FullNavigationSideMenu = ({ menuLinks }: NavigationSideProps) => {
  return (
    <FullNavigationSideMenuRoot>
      {menuLinks.map(link => (
        <div key={link.title}>
          <h4>{link.title}</h4>
          {link.desc && <p>{link.desc}</p>}
          <div className="links">
            {link.links.map(item => (
              <div key={item.name}>
                <FlexCol>
                  <a href={item.link}>
                    <h5 style={{ fontWeight: '400', paddingBottom: '1rem' }}>{item.name}</h5>
                  </a>
                </FlexCol>
              </div>
            ))}
          </div>
        </div>
      ))}
    </FullNavigationSideMenuRoot>
  );
};

FullNavigationSideMenu.defaultProps = defaultProps;
export default FullNavigationSideMenu;
