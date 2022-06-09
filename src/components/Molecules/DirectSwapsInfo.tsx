import React, { ReactElement } from 'react';
import styled from '@emotion/styled';
import icons from 'data/icons';
import { FlexColCenter, FlexRowCenter } from 'styles/common';
import { GrayLabel } from 'components/Atoms/GrayLabel';

const CurrencyImage = styled.img`
  width: 50px;
  z-index: 5;
  margin: 1rem;
`;

const DirectSwapsInfo = (): ReactElement => (
  <FlexColCenter>
    <h3>
      <a href="/swap">Direct swaps for TKL</a>
    </h3>
    <p>Easily and quickly swap for TKL now!</p>
    <GrayLabel>Available currencies</GrayLabel>
    <FlexRowCenter>
      <CurrencyImage alt="swapBTC" src={icons.BTC} />
      <CurrencyImage alt="swapLTC" src={icons.LTC} />
      <CurrencyImage alt="swapKMD" src={icons.KMD} />
    </FlexRowCenter>
  </FlexColCenter>
);
export default DirectSwapsInfo;
