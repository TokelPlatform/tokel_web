import Button, { Colors } from '../Atoms/Button';
import { HSpacerBig, VSpacerBig } from '../../styles/common';
import { Header2, Title } from '../Atoms/Title';

import React from 'react';
import breakpoints from '../../styles/breakpoints';
import chevron from '../../images/chevron.svg';
import styled from '@emotion/styled';

const defaultProps = {};
const Container = styled.div`
  width: 100vw;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: left;
  padding-top: 10rem;
  justify-content: left;
  @media (max-width: ${breakpoints.mobilemiddle}) {
    padding-top: 7rem;
  }
  @media (max-width: ${breakpoints.mobile}) {
    padding-top: 0;
  }
  background-image: url('/galaxy.svg');
  background-repeat: no-repeat;
  background-position: 100% 0;
`;

const Download = styled.div`
  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`;

const CATs = styled.div`
  display: flex;
  align-items: center;
`;

const WelcomeText = () => {
  return (
    <Container>
      <div style={{ marginLeft: '5rem' }}>
        <Title>Create NFTs and tokens easily.</Title>
        <Header2>
          No Complicated smart contracts.
          <br />
          No Gas Fees.
        </Header2>
        <h4>
          One of our main goals is to make Tokel and blockchain technology usable <br /> and
          accessible to everyone.{' '}
        </h4>
        <VSpacerBig />
        <CATs>
          <Download>
            <a href="#">
              <Button
                showButtonDecor
                theme={Colors.TRANSPARENT}
                text="Download dApp"
                width="240px"
              ></Button>
            </a>
          </Download>
          <HSpacerBig />
          <a href="#">
            {' '}
            <h5>Explore Our Ecosystem</h5>
          </a>
        </CATs>
      </div>
      <VSpacerBig />
      <VSpacerBig />
      <img height="50px" src={chevron}></img>
    </Container>
  );
};

WelcomeText.defaultProps = defaultProps;
export default WelcomeText;
