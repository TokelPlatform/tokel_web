import IconBlock from '../Molecules/IconBlock';
import React from 'react';
import breakpoints from 'styles/breakpoints';
import footerData from '../../data/footer';
import styled from '@emotion/styled';
import { FlexRow, FlexColCenter } from 'styles/common';
import MenuColumn from 'components/Molecules/MenuColumn';
import menuLinks from 'data/footerMenuLinks';

const FooterIcons = styled(FlexRow)`
  flex-wrap: wrap;
  @media (max-width: ${breakpoints.smallScreen}) {
    justify-content: center;
  }
`;

const BottomMenuLinksWrapper = styled(FlexColCenter)`
  background-color: var(--color-almostWhite);
  width: 100%;
`;

const BottomMenuLinks = styled(FlexRow)`
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-evenly;
  max-width: 1300px;
  width: 100%;
  @media (orientation: portrait) {
    justify-content: flex-start;
  }
`;

const StyledFooter = styled.div`
  background-color: #000;
  p,
  a {
    color: var(--color-almostWhite);
  }
`;

const Footnote = styled.div`
  text-align: center;
  margin-top: 2rem;
  p {
    font-size: 0.75rem;
    color: #000;
  }
`;

const Footer = () => (
  <StyledFooter>
    <FlexColCenter>
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
    </FlexColCenter>
  </StyledFooter>
);

export default Footer;
