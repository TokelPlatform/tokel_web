import React, { useEffect, useMemo, useState } from 'react';
import styled from '@emotion/styled';
import { FlexColCenter, FlexRow, VSpacerMedium, VSpacerSmall } from 'styles/common';
import Input from 'components/Atoms/Input';
import Warning from 'components/Atoms/Warning';
import { Colors } from 'components/Atoms/Button';
import SpecialButton from 'components/Atoms/SpecialButton';
import { isAddressValid } from 'helpers/general';
import Error from 'components/Atoms/Error';
import Overlay from 'components/Atoms/Overlay';
import { CurrencyItem } from 'components/Molecules/swap/Currency';
import PickCurrencyModal from 'components/Molecules/swap/PickerModal';
import { MAX_TKL, MIN_TKL } from 'helpers/swapConfig';
import Step from 'components/Molecules/swap/Step';
import breakpoints from 'styles/breakpoints';
import { BoxTitle } from 'components/Atoms/BoxTitle';

const Currencies = styled(FlexRow)`
  align-items: flex-start;
  justify-content: center;
  column-gap: 2rem;
  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
  }
`;

const WarningWrapper = styled(Warning)`
  margin: auto;
`;

type CreateSwapProps = {
  prices: {
    KMD: number;
    LTC: number;
    BTC: number;
  };
  createSwapEvent: (
    receivingAddress: string,
    chosenCurrency: string,
    receivingAmount: number
  ) => void;
};

export default function CreateSwap({ createSwapEvent, prices }: CreateSwapProps) {
  const [receivingAddress, setReceivingAddress] = useState('');
  const [receivingAmount, setReceivingAmount] = useState(0);
  const [chosenCurrency, setChosenCurrency] = useState('KMD');
  const [depositAmount, setDepositAmount] = useState(0);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const minValue = useMemo(() => MIN_TKL * prices[chosenCurrency], [chosenCurrency, prices]);
  const maxValue = useMemo(() => MAX_TKL * prices[chosenCurrency], [chosenCurrency, prices]);
  const setDeposit = (num: number | string) => setDepositAmount(Number(num));
  const setSwapError = err => {
    setError(err);
    setLoading(false);
  };

  useEffect(() => {
    !depositAmount && prices[chosenCurrency] && setDepositAmount(minValue);
    setShowModal(false);
  }, [prices, chosenCurrency]);

  useEffect(() => {
    setReceivingAmount(Number(depositAmount / prices[chosenCurrency]));
  }, [depositAmount, chosenCurrency]);

  useEffect(() => {
    setDepositAmount(prices[chosenCurrency] * receivingAmount);
  }, [receivingAmount]);

  const submitSwapInfo = () => {
    setSwapError('');

    if (depositAmount < minValue) {
      return setSwapError('Deposit amount too small.');
    }
    if (!isAddressValid(receivingAddress)) {
      return setSwapError('Invalid Address');
    }
    if (receivingAmount < MIN_TKL) {
      setDeposit(minValue);
      return setSwapError(`Minimum Swap Amount ${MIN_TKL}TKL`);
    }
    if (receivingAmount > MAX_TKL) {
      setDeposit(maxValue);
      return setSwapError(`Maximum Swap Amount ${MAX_TKL}TKL`);
    }
    setLoading(true);
    return createSwapEvent(receivingAddress, chosenCurrency, receivingAmount)
      .then(() => setLoading(false))
      .catch(e => {
        console.log(e);
        setSwapError(e.message);
      });
  };

  return (
    <FlexColCenter>
      <Overlay displayOverlay={showModal} />
      {showModal && (
        <PickCurrencyModal
          values={prices}
          pickCurrency={c => {
            setChosenCurrency(c);
            setShowModal(false);
          }}
          closeMe={() => setShowModal(false)}
        />
      )}
      <BoxTitle>Create Swap</BoxTitle>
      <Step title="1. Enter amount you want to swap">
        <Currencies>
          <CurrencyItem
            title="You send"
            currencyName={chosenCurrency}
            value={depositAmount}
            onChange={val => setDepositAmount(val.target.value)}
            onClick={() => setShowModal(true)}
            onBlur={() => {
              depositAmount > maxValue ? setDeposit(maxValue) : null;
              depositAmount < minValue ? setDeposit(minValue) : null;
            }}
            note={`1 ${chosenCurrency} ≈  ${Number(1 / prices[chosenCurrency]).toFixed(5)} TKL`}
          />
          <CurrencyItem
            title="You receive"
            currencyName="TKL"
            value={receivingAmount}
            onBlur={() => {
              receivingAmount > MAX_TKL ? setReceivingAmount(MAX_TKL) : null;
              receivingAmount < MIN_TKL ? setReceivingAmount(MIN_TKL) : null;
            }}
            onChange={val => setReceivingAmount(val.target.value)}
            note={`min ${MIN_TKL} max ${MAX_TKL} TKL`}
          />
        </Currencies>
      </Step>
      <Step title="2. ENTER YOUR RECEIVING TKL ADDRESS">
        <WarningWrapper text="Please double check the address below. That is where you will receive your TKL" />
        <VSpacerSmall />
        <Input
          width="300px"
          value={receivingAddress}
          onChange={e => setReceivingAddress(e.target.value)}
        />
        <VSpacerSmall />
        <p style={{ height: '1.5rem' }}>
          {loading && (
            <span style={{ color: 'var(--color-base-richyellow' }}>
              Just a moment. Creating your swap...
            </span>
          )}
          {error && <Error>{error}</Error>}
        </p>
      </Step>
      <SpecialButton theme={Colors.PURPLE} onClick={() => submitSwapInfo()}>
        <h5>Lets swap</h5>
      </SpecialButton>
      <VSpacerMedium />
    </FlexColCenter>
  );
}
