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
import {
  getBtcFormatAmount,
  getDepositValue,
  getTKLValue,
  lessThan,
  MAX_TKL,
  MIN_TKL,
  moreThan,
} from 'helpers/swapConfig';
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
    KMD: string;
    LTC: string;
    BTC: string;
  };
  createSwapEvent: (
    receivingAddress: string,
    chosenCurrency: string,
    receivingAmount: string
  ) => void;
};

/**
 * All numbers are internally converted to SATOSHIS and calculations are made with Big Number
 * All output numbers are string
 */
export default function CreateSwap({ createSwapEvent, prices }: CreateSwapProps) {
  const [chosenCurrency, setChosenCurrency] = useState('KMD');

  // Helpers for min max values
  const MIN_DEPOSIT_VALUE = useMemo(
    () => prices && getDepositValue(MIN_TKL, prices[chosenCurrency]),
    [chosenCurrency, prices]
  );
  const MAX_DEPOSIT_VALUE = useMemo(
    () => prices && getDepositValue(MAX_TKL, prices[chosenCurrency]),
    [chosenCurrency, prices]
  );

  const [receivingAddress, setReceivingAddress] = useState('');
  const [receivingAmount, setReceivingAmount] = useState(MIN_TKL);
  const [depositAmount, setDepositAmount] = useState(MIN_DEPOSIT_VALUE);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const pricePerOne = useMemo(() => getDepositValue('1', prices[chosenCurrency]), [chosenCurrency]);

  const setSwapError = (err: string) => {
    setError(err);
    setLoading(false);
  };

  const setMinimum = () => {
    setReceivingAmount(MIN_TKL);
    setDepositAmount(MIN_DEPOSIT_VALUE);
  };

  const setMaximum = () => {
    setReceivingAmount(MAX_TKL);
    setDepositAmount(MAX_DEPOSIT_VALUE);
  };

  useEffect(() => {
    !depositAmount && prices[chosenCurrency] && setDepositAmount(MIN_DEPOSIT_VALUE);
    setShowModal(false);
  }, [prices, chosenCurrency]);

  useEffect(() => {
    depositAmount &&
      depositAmount !== '0' &&
      setReceivingAmount(getTKLValue(depositAmount, prices[chosenCurrency]));
  }, [chosenCurrency]);

  const submitSwapInfo = () => {
    setSwapError('');
    if (!isAddressValid(receivingAddress)) {
      return setSwapError('Invalid Address');
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
            onChange={val => {
              if (moreThan(val.target.value, MAX_DEPOSIT_VALUE)) {
                setMaximum();
              } else {
                setDepositAmount(getBtcFormatAmount(val.target.value));
                setReceivingAmount(getTKLValue(val.target.value, prices[chosenCurrency]));
              }
            }}
            onClick={() => setShowModal(true)}
            onBlur={() => (lessThan(depositAmount, MIN_DEPOSIT_VALUE) ? setMinimum() : null)}
            note={`1 TKL ≈  ${pricePerOne} ${chosenCurrency}`}
          />
          <CurrencyItem
            title="You receive"
            currencyName="TKL"
            value={receivingAmount}
            onBlur={() => (lessThan(receivingAmount, MIN_TKL) ? setMinimum() : null)}
            onChange={val => {
              if (moreThan(val.target.value, MAX_TKL)) {
                setMaximum();
              } else {
                setReceivingAmount(getBtcFormatAmount(val.target.value));
                setDepositAmount(getDepositValue(val.target.value, prices[chosenCurrency]));
              }
            }}
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
        <p style={{ height: '1.1rem' }}>
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
      <p style={{ opacity: 0.6, fontSize: '16px' }}>Transaction fee: 0.0001 {chosenCurrency}</p>
      <VSpacerMedium />
    </FlexColCenter>
  );
}
