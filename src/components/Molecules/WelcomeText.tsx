// import Button, { Colors } from '../Atoms/Button';
import { FlexCol, HSpacerBig } from '../../styles/common';

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
import jump from 'components/Atoms/JumpAnimation';
import Button, { Colors } from 'components/Atoms/Button';

const defaultProps = {};
const Container = styled(FlexCol)`
  /* width: 100vw; */
  padding-top: 5rem;
  @media (max-width: ${breakpoints.mobile}) {
    padding-top: 1rem;
  }
  align-items: left;
  justify-content: left;

  transition: all 0.3s ease;

  @media (max-width: ${breakpoints.mobile}) {
  }
  h1,
  h2,
  h4 {
    z-index: 2;
    position: relative;
  }
`;

const CATs = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem 0;
  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
  }
`;

const Chevron = styled.img`
  &:hover {
    animation: ${jump} 1s ease;
  }
  &:active {
  }
`;

const MainText = styled.div`
  margin: auto;
  padding: 2rem;
`;

const PlanetMain = styled.img`
  position: absolute;
  bottom: 0vw;
  right: 0;
  z-index: 0;
  width: 40%;
  @media (orientation: portrait) {
    top: 350px;
  }
  @media (max-width: ${breakpoints.tablet}) {
    bottom: 30vw;
  }
  @media (max-width: ${breakpoints.mobilebig}) {
    bottom: 80vw;
  }
  @media (max-width: ${breakpoints.mobilemiddle}) {
    top: 40vw;
    width: 60%;
  }
`;

const PlanetLow = styled.img`
  position: absolute;
  bottom: -140px;
  right: 70%;
  @media (orientation: portrait) {
    bottom: 40%;
    width: 20%;
  }
  @media (max-width: ${breakpoints.mobilebig}) {
    display: none;
  }
`;

const Moon = styled.img`
  position: absolute;
  top: 100px;
  right: 250px;
  z-index: 0;
  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`;

const Description = styled.p`
  opacity: 0.8;
  width: 50%;
  z-index: 2;
  position: relative;
  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }
`;

const PlanetSide = styled.img`
  position: absolute;
  bottom: 350px;
  left: -60px;
  z-index: 0;
  @media (orientation: portrait) {
    top: 30%;
  }
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
      <MainText>
        <div>
          <h1>Create NFTs and tokens easily.</h1>
          <h2>
            No complicated smart contracts.
            <br />
            No Gas Fees.
          </h2>
          <Description>
            One of our main goals is to make Tokel and blockchain technology usable and accessible
            to everyone.{' '}
          </Description>
        </div>
        <PlanetMain src={PlanetWithRing} />
        <Moon src={moon} />
        <PlanetSide
          style={{ position: 'absolute', bottom: '350px', left: '-60px', zIndex: 0 }}
          src={fadedPlanet}
        />
        <PlanetLow src={PlanetWithCircles} />

        <CATs>
          <a href="#download" className="desktopOnly" style={{ textDecoration: 'none' }}>
            <SpecialButton>
              <h5>Download dApp</h5>
            </SpecialButton>
          </a>
          <Button
            className="mobileonly"
            height="50px"
            width="220px"
            text="BUY TKL"
            theme={Colors.BLACK}
            onClick={() => null}
            url="/exchanges"
          ></Button>
          <HSpacerBig />
          <a href="#ecosystem" style={{ textDecoration: 'none' }}>
            <AnimatedGradientText>Explore Our Ecosystem</AnimatedGradientText>
          </a>
        </CATs>
      </MainText>
      <a href="#compare" style={{ margin: 'auto' }}>
        <Chevron height="50px" style={{ zIndex: 2, position: 'relative' }} src={chevron}></Chevron>
      </a>
    </Container>
  );
};

WelcomeText.defaultProps = defaultProps;
export default WelcomeText;
