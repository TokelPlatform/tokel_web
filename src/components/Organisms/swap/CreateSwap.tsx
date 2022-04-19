import React, { useState } from 'react';
import SwapRoot from '../template';
// import breakpoints from "../styles/breakpoints"
import styled from '@emotion/styled';
import PageMeta from 'components/Molecules/PageMeta';
import { PageHeader } from 'components/Atoms/Title';
import PurpleBorderBox from 'components/Atoms/PurpleBorderBox';
import GrayLabel from 'components/Atoms/GrayLabel';
import { FlexCol, FlexRow, VSpacerMedium } from 'styles/common';
import icons from 'data/icons';
import Input from 'components/Atoms/Input';
import Warning from 'components/Atoms/Warning';
import { Colors } from 'components/Atoms/Button';
import SpecialButton from 'components/Atoms/SpecialButton';
import { isAddressValid } from 'helpers/general';

const SwapWrapper = styled.div`
  margin: auto;
  text-align: center;
  h3 {
    margin-bottom: 0;
  }
`;

const BoxTitle = styled.h3`
  text-transform: uppercase;
  background: var(--gradient-purple-direct);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 400;
`;

const Box = styled(PurpleBorderBox)`
  max-width: 740px;
  margin: auto;
  margin-top: 2rem;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0 4rem 0;
`;

const Step = styled.h5`
  text-transform: uppercase;
  font-weight: 700;
  margin: 0;
  margin-top: 1rem;
`;

type CurrencyProps = {
  disabled: boolean;
};

const Currency = styled(PurpleBorderBox)<CurrencyProps>`
  padding: 20px 10px;
  width: 170px;
  height: 100px;
  transition: box-shadow 0.25s;
  border-radius: 0;
  h4 {
    margin: 0;
    margin-top: 0.5rem;
  }
  ${p =>
    !p.disabled &&
    `&:hover {
        box-shadow: 0 0 5px 5px var(--color-purple);
        cursor: pointer;
    }`}
`;

const Currencies = styled(FlexRow)`
  align-items: flex-start;
  justify-content: center;
  column-gap: 2rem;
`;

const WarningWrapper = styled(Warning)`
  margin: auto;
`;

type CurrencyItemProps = {
  title: string;
  currencyName: string;
  value: number;
  disabled?: boolean;
  note?: string;
  onChange?: (val: any) => void;
};

const CurrencyItem = ({
  title,
  currencyName,
  value,
  disabled,
  note,
  onChange,
}: CurrencyItemProps) => (
  <FlexCol>
    <GrayLabel>{title}</GrayLabel>
    <Currency disabled={disabled}>
      <img src={icons[currencyName]} width="60" height="60"></img>
      <h4>{currencyName}</h4>
    </Currency>
    <VSpacerMedium />
    <Input width="166px" value={value} disabled={disabled} onChange={a => onChange(a)} />
    <p style={{ opacity: '0.6' }}>{note}</p>
  </FlexCol>
);

const TKLvalue = {
  KMD: '0.08',
};

export default function CreateSwap() {
  const [swapAmount, setSwapAmount] = useState(0);
  const [receivingAddress, setReceivingAddress] = useState('');
  //   const [addressError, setAddressError] = useState('');
  const [chosenCurrency] = useState('KMD');
  console.log(swapAmount);

  const handleAddressChange = event => {
    if (isAddressValid(event.target.value)) {
      setReceivingAddress(event.target.value);
    } else {
      //   setAddressError('Invalid Address');
    }
  };
  return (
    <div>
      <PageMeta title="Swap TKL | Tokel Platform" description="" />
      <SwapRoot starsTop="3700px">
        <SwapWrapper>
          <PageHeader>Swap TKL</PageHeader>
          <p>
            Simply swap your BTC, LTC and other cryptocurrencies for TKL. <br />
            Follow the guidelines below to perform a swap.
          </p>

          <Box>
            <BoxTitle>Create Swap</BoxTitle>
            <Step>1. Enter amount to swap</Step>
            <p style={{ marginTop: 0, opacity: '0.6' }}>1 KMD = 0.08 TKL</p>
            <Currencies>
              <CurrencyItem
                title="You send"
                currencyName={chosenCurrency}
                value={swapAmount}
                onChange={val => setSwapAmount(val.target.value)}
              />
              <CurrencyItem
                title="You receive"
                currencyName="TKL"
                value={swapAmount * TKLvalue[chosenCurrency]}
                disabled
                note="max 50,000 TKL per swap"
              />
            </Currencies>
            <Step>2. ENTER YOUR RECEIVING TKL ADDRESS</Step>
            <WarningWrapper text="Please double check the address below. That is where you will receive your TKL" />
            <Input width="358px" value={receivingAddress} onChange={handleAddressChange} />
            <VSpacerMedium />
            <SpecialButton theme={Colors.PURPLE}>
              <h5>Lets swap</h5>
            </SpecialButton>
          </Box>
        </SwapWrapper>
      </SwapRoot>
    </div>
  );
}
