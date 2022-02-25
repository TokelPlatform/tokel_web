import IconBlock from '../Molecules/IconBlock';
import React from 'react';
// import breakpoints from '../../styles/breakpoints';
import footerData from '../../data/footer';
import styled from '@emotion/styled';
import { FlexCol, FlexRow } from 'styles/common';
import MenuColumn from 'components/Molecules/MenuColumn';

const defaultProps = {};

const Container = styled(FlexCol)`
  align-items: center;
  padding-bottom: 2rem;
`;

const FooterIcons = styled(FlexRow)`
  flex-wrap: wrap;
`;

const BottomMenuLinksWrapper = styled.div`
  background-color: black;
  width: 100%;
`;
const BottomMenuLinks = styled(FlexRow)`
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 7rem;

  h4,
  a {
    color: white;
  }
  a:hover {
    color: var(--color-purple);
  }
`;

const StyledFooter = styled.div`
  background-color: black;
  p,
  a {
    color: white;
  }
`;

const Footnote = styled.div`
  text-align: center;
  margin-top: 2rem;
  border-top: 1px solid white;
  p {
    color: white;
    font-size: 0.75rem;
  }
`;

const menuLinks = [
  {
    title: 'About',
    links: [
      {
        name: 'nSPV',
        url: '#',
      },
      {
        name: 'Wallets',
        url: '#',
      },
      {
        name: 'Exchange',
        url: '#',
      },
      {
        name: 'Partners',
        url: '#',
      },
      {
        name: 'Roadmap',
        url: '#',
      },
      {
        name: 'Whitepaper',
        url: '#',
      },
    ],
  },
  {
    title: 'Developers',
    links: [
      {
        name: 'How-to Guides',
        url: '#',
      },
      {
        name: 'API',
        url: '#',
      },
      {
        name: 'GitHub',
        url: '#',
      },
    ],
  },
  {
    title: 'Individuals',
    links: [
      {
        name: 'How-to Guides',
        url: '#',
      },
      {
        name: 'More tutorials coming soon...',
        url: null,
      },
    ],
  },
  {
    title: 'Businesses',
    links: [
      {
        name: 'Tutorials and use cases coming soon.....',
        url: null,
      },
    ],
  },
  {
    title: 'Media',
    links: [
      {
        name: 'Tokel Talks',
        url: '#',
      },
      {
        name: 'News',
        url: '#',
      },
      {
        name: 'Media package',
        url: '#',
      },
    ],
  },
  {
    title: 'Contact',
    links: [
      {
        name: 'Report Bug',
        url: '#',
      },
      {
        name: 'Become Partner',
        url: '#',
      },
      {
        name: 'Join Discord',
        url: '#',
      },
    ],
  },
];

const Footer = () => (
  <StyledFooter>
    <Container>
      <FooterIcons>
        {footerData.map((col, idx) => (
          <IconBlock title={col.title} iconsList={col.icons} desc={col.desc} key={idx} idx={idx} />
        ))}
      </FooterIcons>
      <BottomMenuLinksWrapper>
        <BottomMenuLinks>
          {menuLinks.map((link, idx) => (
            <MenuColumn key={idx} title={link.title} menuItems={link.links} />
          ))}
        </BottomMenuLinks>
        <Footnote>
          <p>
            Tokel {new Date().getFullYear()}. Created with 💙 for blockchain and all things
            decentralized by Tokel Team
          </p>
        </Footnote>
      </BottomMenuLinksWrapper>
    </Container>
  </StyledFooter>
);

Footer.defaultProps = defaultProps;
export default Footer;
