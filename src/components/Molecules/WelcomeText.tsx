// import Button, { Colors } from '../Atoms/Button';
import { HSpacerBig, VSpacerBig } from '../../styles/common';

import React from 'react';
import breakpoints from '../../styles/breakpoints';
import chevron from '../../images/chevron.svg';
import styled from '@emotion/styled';
// import WhiteButton from 'components/Atoms/WhiteButton';

import CurveAnimation from './CurveAnimation';

import PlanetWithRing from 'images/planets/planetWithRing.svg';

import PlanetWithCircles from 'images/planets/planetWithCircles.svg';
import moon from 'images/planets/moon.svg';
// import asteroid from 'images/planets/asteroid.svg';
// import asteroidBig from 'images/planets/asteroidBig.svg';
import satelite from 'images/planets/satelite.svg';
import fadedPlanet from 'images/planets/fadedPlanet.svg';
import { curves } from 'data/constants';
import SpecialButton from 'components/Atoms/SpecialButton';
import AnimatedGradientText from 'components/Atoms/AnimatedGradientText';

const defaultProps = {};
const Container = styled.div`
  width: 100vw;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: left;
  padding-top: 7rem;
  justify-content: left;
  background-repeat: no-repeat;
  background-position: 100% 20%;
  @media (max-width: ${breakpoints.tablet}) {
    background-size: cover;
  }
  @media (max-width: ${breakpoints.mobile}) {
  }
  h1,
  h2,
  h4 {
    z-index: 2;
    position: relative;
  }
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
      {/* <CurveAnimation image={asteroid} startFromRight={false} curve={curves.EaseIn} /> */}
      <CurveAnimation image={satelite} startFromRight={true} curve={curves.EaseInOut} />
      {/* <CurveAnimation
        image={asteroidBig}
        startFromRight={false}
        startFromBottom={true}
        curve={curves.EaseInOut}
      /> */}
      <div style={{ marginLeft: '15rem' }}>
        <div>
          <h1>Create NFTs and tokens easily.</h1>
          <h2>
            No Complicated smart contracts.
            <br />
            No Gas Fees.
          </h2>
          <h4>
            One of our main goals is to make Tokel and blockchain technology usable <br /> and
            accessible to everyone.{' '}
          </h4>
        </div>
        <img
          style={{ position: 'absolute', bottom: '100px', right: '0px', zIndex: 1 }}
          src={PlanetWithRing}
        />
        <img style={{ position: 'absolute', top: '100px', right: '250px', zIndex: 1 }} src={moon} />
        <img
          style={{ position: 'absolute', bottom: '350px', left: '-60px', zIndex: 1 }}
          src={fadedPlanet}
        />
        <img
          style={{ position: 'absolute', bottom: '-140px', right: '60%' }}
          src={PlanetWithCircles}
        />

        <CATs>
          <Download>
            <a href="#download" style={{ textDecoration: 'none' }}>
              {/* <Button
                showButtonDecor
                theme={Colors.WHITE}
                text="Download dApp"
                width="240px"
              ></Button> */}
              <SpecialButton>
                <h5>Download dApp</h5>
              </SpecialButton>
            </a>
          </Download>
          <HSpacerBig />
          <a href="#ecosystem" style={{ textDecoration: 'none' }}>
            <AnimatedGradientText>Explore Our Ecosystem</AnimatedGradientText>
          </a>
        </CATs>
      </div>
      <VSpacerBig />
      <a href="#compare" style={{ margin: 'auto' }}>
        <img height="50px" style={{ zIndex: 2, position: 'relative' }} src={chevron}></img>
      </a>
    </Container>
  );
};

WelcomeText.defaultProps = defaultProps;
export default WelcomeText;
