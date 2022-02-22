import IconBlock from '../Molecules/IconBlock';
import React from 'react';
import breakpoints from '../../styles/breakpoints';
import footerData from '../../data/footer';
import styled from '@emotion/styled';

const defaultProps = {};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 4rem 0 4rem;
  padding-bottom: 2rem;

  @media (max-width: ${breakpoints.smallScreen}) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  @media (max-width: ${breakpoints.mobilebig}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const FooterSecondaryBlock = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: ${breakpoints.smallScreen}) {
    justify-content: space-between;
    width: 100%;
  }
  @media (max-width: ${breakpoints.mobilebig}) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const StyledFooter = styled.div`
  p,
  a {
    color: var(--color-darkestBlue-50opacity);
  }
`;
const Footnote = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 1px solid var(--color-darkestBlue-10opacity);
  padding: 0 4rem;
  p,
  a {
    font-size: 0.75rem;
  }

  div {
    margin-top: 1rem;

    a {
      margin-left: 1rem;
    }
  }
  @media (max-width: ${breakpoints.mobilebig}) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

const Footer = () => (
  <StyledFooter>
    <Container>
      <FooterSecondaryBlock>
        {footerData.map((col, idx) => (
          <IconBlock title={col.title} iconsList={col.icons} desc={col.desc} key={idx} idx={idx} />
        ))}
      </FooterSecondaryBlock>
    </Container>
    <Footnote>
      <p>
        Tokel {new Date().getFullYear()}. Created with 💙 for blockchain and all things
        decentralized by Tokel Team
      </p>
      {/* <div>
                <a href="#">Terms of Service</a>
                <a href="#">Privacy Policy</a>                
            </div> */}
    </Footnote>
  </StyledFooter>
);

Footer.defaultProps = defaultProps;
export default Footer;
