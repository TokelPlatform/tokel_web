import ComparisonTable from '../Molecules/table/ComparisonTable';
import React from 'react';
// import breakpoints from "../../styles/breakpoints";
import styled from '@emotion/styled';
import FeatureHeader from 'components/Molecules/Features/FeatureHeader';
import { FlexCol, FlexColCenter, FlexRow } from 'styles/common';
import breakpoints from 'styles/breakpoints';

const ComparisonRoot = styled(FlexColCenter)`
  color: white;
  margin-top: 5rem;
  @media (max-width: ${breakpoints.mobilebig}) {
    display: none;
  }
`;
const Footnote = styled(FlexCol)`
  align-items: flex-start;
  p {
    margin-bottom: 0;
    opacity: 0.6;
    font-size: 14px;
  }
  li {
    opacity: 0.6;
    font-size: 14px;
  }
  ul {
    list-style-type: none;
  }
  max-width: 750px;
`;

const Comparison = () => {
  return (
    <ComparisonRoot>
      <FeatureHeader title="Inexpensive And Non-Exclusive" subtitle="Compare us with others" />
      <ComparisonTable />
      <Footnote>
        <p>* no gas fee exists, only tx fees</p>
        <p>** can be less or more depending on the network congestion</p>
        <p>
          The above numbers are as of 24th February 2022. Crypto markets fluctuate and fees on
          networks change depending on how busy the network is. Some of the above fees can be
          different at the moment of you reading this. The cost to create on Tokel will change
          depending on the price per Tokel when you create.
        </p>
        <FlexRow style={{ gap: '0.5rem' }}>
          <div>
            <p>Solana Sources </p>
            <p>
              Tx Fee: <a href="https://solana.com/">https://solana.com/</a>
              <br />
              NFT creation cost:{' '}
              <a href="https://solana.com/developers/nfts">https://solana.com/developers/nfts</a>
            </p>
          </div>
          <div>
            <p>Ethereum Sources</p>
            <p>
              Tx Fee:{' '}
              <a href="https://ycharts.com/indicators/ethereum_average_transaction_fee">
                https://ycharts.com/indicators/ethereum_average_transaction_fee
              </a>
              <br />
              Gas Fee:{' '}
              <a href="https://crypto.com/defi/dashboard/gas-fees">
                https://crypto.com/defi/dashboard/gas-fees
              </a>
            </p>
          </div>
        </FlexRow>
      </Footnote>
    </ComparisonRoot>
  );
};

export default Comparison;
