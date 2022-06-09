import React, { useEffect, useMemo, useState } from 'react';
import styled from '@emotion/styled';
import { FlexColCenter, FlexRow, VSpacerMedium, VSpacerSmall } from 'styles/common';
import Input from 'components/Atoms/Input';
import Warning from 'components/Atoms/Warning';
import { Colors } from 'components/Atoms/Button';
import SpecialButton from 'components/Atoms/SpecialButton';
import { isAddressValid, toBitcoinAmount } from 'helpers/general';
import Error from 'components/Atoms/Error';
import Overlay from 'components/Atoms/Overlay';
import { CurrencyItem } from 'components/Molecules/swap/Currency';
import PickCurrencyModal from 'components/Molecules/swap/PickerModal';
import {
  lessThan,
  MAX_TKL,
  MAX_TKL_SAT,
  MAX_TKL_TEXT,
  MIN_TKL,
  MIN_TKL_SAT,
  MIN_TKL_TEXT,
  moreThan,
  SATOSHIS,
} from 'helpers/swapConfig';
import Step from 'components/Molecules/swap/Step';
import breakpoints from 'styles/breakpoints';
import { BoxTitle } from 'components/Atoms/BoxTitle';
import { toSatoshi } from 'satoshi-bitcoin';
import BN from 'bn.js';

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
    receivingAmount: string
  ) => void;
};

/**
 * All numbers are internally parsed and calculated using SATOSHIS and Big Number
 */

export default function CreateSwap({ createSwapEvent, prices }: CreateSwapProps) {
  const [chosenCurrency, setChosenCurrency] = useState('KMD');

  // Helpers for min max values
  const minValueBNSat = useMemo(
    () => MIN_TKL.mul(prices[chosenCurrency]),
    [chosenCurrency, prices]
  );
  const MIN_DEPOSIT_VALUE = useMemo(
    () => toBitcoinAmount(minValueBNSat.toString()).toString(),
    [minValueBNSat]
  );
  const maxValueBNSat = useMemo(
    () => MAX_TKL.mul(prices[chosenCurrency]),
    [chosenCurrency, prices]
  );
  const MAX_DEPOSIT_VALUE = useMemo(
    () => toBitcoinAmount(maxValueBNSat.toString()).toString(),
    [maxValueBNSat]
  );

  const [receivingAddress, setReceivingAddress] = useState('');
  const [receivingAmount, setReceivingAmount] = useState(MIN_TKL_TEXT);
  const [depositAmount, setDepositAmount] = useState(MIN_DEPOSIT_VALUE);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const pricePerOne = useMemo(() => new BN(SATOSHIS).div(prices[chosenCurrency]), [chosenCurrency]);

  const setDepositAmountHelper = amnt => setDepositAmount(toBitcoinAmount(amnt));
  const setReceivingAmountHelper = amnt => setReceivingAmount(toBitcoinAmount(amnt));

  const setSwapError = err => {
    setError(err);
    setLoading(false);
  };

  const setMinimum = () => {
    setReceivingAmount(MIN_TKL_TEXT);
    setDepositAmount(MIN_DEPOSIT_VALUE);
  };

  const setMaximum = () => {
    setReceivingAmount(MAX_TKL_TEXT);
    setDepositAmount(MAX_DEPOSIT_VALUE);
  };

  useEffect(() => {
    !depositAmount && prices[chosenCurrency] && setDepositAmount(MIN_DEPOSIT_VALUE);
    setShowModal(false);
  }, [prices, chosenCurrency]);

  useEffect(() => {
    depositAmount &&
      depositAmount !== '0' &&
      setReceivingAmount(new BN(toSatoshi(depositAmount)).div(prices[chosenCurrency]).toString());
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
              if (moreThan(val.target.value, maxValueBNSat)) {
                setMaximum();
              } else {
                const satVal = toSatoshi(val.target.value);
                setDepositAmountHelper(satVal);
                setReceivingAmount(new BN(satVal).div(prices[chosenCurrency]).toString());
              }
            }}
            onClick={() => setShowModal(true)}
            onBlur={() => (lessThan(depositAmount, minValueBNSat) ? setMinimum() : null)}
            note={`1 ${chosenCurrency} ≈  ${pricePerOne} TKL`}
          />
          <CurrencyItem
            title="You receive"
            currencyName="TKL"
            value={receivingAmount}
            onBlur={() => (lessThan(receivingAmount, MIN_TKL_SAT) ? setMinimum() : null)}
            onChange={val => {
              const satVal = toSatoshi(val.target.value);
              // check if value is not more than maximum TKL value
              if (moreThan(val.target.value, MAX_TKL_SAT)) {
                setMaximum();
              } else {
                setReceivingAmountHelper(satVal);
                setDepositAmountHelper(
                  prices[chosenCurrency].mul(new BN(val.target.value)).toString()
                );
              }
            }}
            note={`min ${MIN_TKL_TEXT} max ${MAX_TKL_TEXT} TKL`}
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
