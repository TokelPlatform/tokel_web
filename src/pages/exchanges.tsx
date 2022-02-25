import PageRoot from './template';
import { PageHeader } from '../components/Atoms/Title';
import PropTypes from 'prop-types';
import React from 'react';
// import breakpoints from '../styles/breakpoints';
import flyingTokel from '../images/launch/flying-tokel.svg';
import links from '../data/links';
import styled from '@emotion/styled';
import PageMeta from 'components/Molecules/PageMeta';
import { FlexCol, FlexColCenter, FlexRowCenter, VSpacerBig } from 'styles/common';
import icons from 'data/icons';

const Contact = styled.div`
  text-align: center;
  padding: 50px 0 50px 0;
  h4 {
    color: var(--color-lightBlue);
  }
`;

const ExchangesRoot = styled(PageRoot)`
  h3 {
    color: var(--color-lightBlue);
  }
`;

export default function Exchanges() {
  return (
    <div>
      <PageMeta
        title="Exchanges | Tokel Platform"
        description="With the Tokel App you can sell art, browse NFTs, create and trade tokens for your projects. All on a unified and inexpensive platform."
      />
      <ExchangesRoot starsTop="400px">
        <PageHeader>BUY TKL</PageHeader>
        <FlexColCenter>
          <h3>Exchanges</h3>
          <FlexRowCenter style={{ gap: '4rem' }}>
            <FlexCol>
              <a href={links.atomicDex}>
                <img src={icons.atomicDex}></img>
              </a>
              <a href={links.aDEXStepByStep}>Tutorial: Basic step-by-step AtomicDEX</a>
              <a href={links.aDexBuyTKLVideo}>Video: How to Buy TKL on AtomicDEX</a>
            </FlexCol>

            <FlexCol>
              <a href={links.dexTrade}>
                <img src={icons.dexTrade}></img>
              </a>
              <a href={links.dexTradeTutorials.signup}>Video: Sign up on Dex Trade</a>
              <a href={links.dexTradeTutorials.deposit}>Video: How to make a deposit</a>
            </FlexCol>
          </FlexRowCenter>
        </FlexColCenter>
        <VSpacerBig />
        <FlexColCenter>
          <h3>Direct swaps</h3>
          <h4>Direct Swap Functionality coming soon...</h4>
          <FlexRowCenter>
            <img src={icons.swapBTC}></img>
          </FlexRowCenter>
        </FlexColCenter>
        <Contact>
          <h4>
            Contact us at <a href="mailto:contact@tokel.io">contact@tokel.io</a> or join{' '}
            <a href="https://discord.gg/SQzdUQWXrn">Tokel Discord</a>{' '}
          </h4>
          <img src={flyingTokel}></img>
        </Contact>
      </ExchangesRoot>
    </div>
  );
}

Exchanges.propTypes = {
  data: PropTypes.any,
};
