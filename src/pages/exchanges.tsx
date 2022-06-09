import PageRoot from './template';
import { PageHeader } from '../components/Atoms/Title';
import PropTypes from 'prop-types';
import React from 'react';
import links from '../data/links';
import styled from '@emotion/styled';
import PageMeta from 'components/Molecules/PageMeta';
import { FlexColCenter, FlexRowCenter, VSpacerBig } from 'styles/common';
import icons from 'data/icons';
import breakpoints from 'styles/breakpoints';
import DirectSwapsInfo from 'components/Molecules/DirectSwapsInfo';
// import BannerSubscribe from 'components/Molecules/banners/BannerSubscribe';

const ExchangesRoot = styled(PageRoot)`
  h3 {
    color: var(--color-lightBlue);
  }
`;

const Items = styled(FlexRowCenter)`
  margin-top: 2rem;
  gap: 4rem;
  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
  }
`;

const Border = styled(FlexColCenter)`
  border: 1px solid white;
  background-color: var(--color-darkestBlue);
  z-index: 3;
  position: relative;
  padding: 2rem;
  border-image-slice: 1;
  border-image-source: var(--gradient-purple-to-lightblue);
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

export default function Exchanges() {
  return (
    <div>
      <PageMeta
        title="Exchanges | Tokel Platform"
        description="With the Tokel App you can sell art, browse NFTs, create and trade tokens for your projects. All on a unified and inexpensive platform."
      />
      <ExchangesRoot>
        <PageHeader>HOW TO BUY TKL</PageHeader>

        <DirectSwapsInfo />
        <VSpacerBig />
        <FlexColCenter>
          <h3>Trade on Exchanges</h3>
          <Items>
            <Border>
              <a href={links.atomicDex}>
                <img alt="atomicDex" src={icons.atomicDex}></img>
              </a>
              <a href={links.aDEXStepByStep}>Step-by-step AtomicDEX</a>
              <a href={links.aDexBuyTKLVideo}>How to Buy TKL on AtomicDEX</a>
            </Border>

            <Border>
              <a href={links.dexTrade}>
                <img alt="dexTrade" src={icons.dexTrade}></img>
              </a>
              <a href={links.dexTradeTutorials.signup}>Sign up on Dex Trade</a>
              <a href={links.dexTradeTutorials.deposit}>How to make a deposit</a>
            </Border>
          </Items>
        </FlexColCenter>
        {/* <BannerSubscribe /> */}
      </ExchangesRoot>
    </div>
  );
}

Exchanges.propTypes = {
  data: PropTypes.any,
};
