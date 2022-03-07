import React, { useRef, useState } from 'react';

import Burger from 'components/Molecules/Navigation/Burger';
import NavigationSide from 'components/Molecules/Navigation/NavigationSide';
import breakpoints from 'styles/breakpoints';
import links from 'data/links';
import styled from '@emotion/styled';

const changeNavigationStyleAt = breakpoints.smallScreen;

const NavigationHorizontal = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  /* margin-left: -6rem; */
  justify-content: center;
  list-style-type: none;
  color: var(--color-almostWhite);
  padding-top: 0.5rem;
  @media (max-width: ${changeNavigationStyleAt}) {
    display: none;
  }
  li {
    margin-right: 2rem;
  }
  a {
    color: var(--color-almostWhite);
    text-decoration: none;
  }
`;

const NavigationVertical = styled.div`
  display: none;
  padding-bottom: 4rem;
  @media (max-width: ${changeNavigationStyleAt}) {
    display: block;
  }
`;
const menuLinks = [
  { link: '/how-to', name: 'Get Started' },
  // { link: '/exchanges', name: 'Exchanges' },
  // { link: '/wallets', name: 'Wallets' },
  { link: '/roadmap', name: 'Roadmap' },
  { link: links.whitepaper, name: 'White Paper' },
  { link: '/news', name: 'News' },
  { link: '/tokeltalk', name: 'Tokel Talk' },
  // { link: links.explorer, name: 'Explorer' },
  { link: '/faq', name: 'FAQ' },
];

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  return (
    <div>
      <NavigationHorizontal>
        {menuLinks.map((item, idx) => (
          <li key={idx}>
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </NavigationHorizontal>
      <NavigationVertical ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <NavigationSide menuLinks={menuLinks} open={open} setOpen={setOpen} />
      </NavigationVertical>
    </div>
  );
};
export default Navigation;
