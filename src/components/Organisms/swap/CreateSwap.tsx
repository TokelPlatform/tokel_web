import React, { useEffect, useMemo, useState } from 'react';
import styled from '@emotion/styled';
import { FlexRow, VSpacerSmall } from 'styles/common';
import Input from 'components/Atoms/Input';
import Warning from 'components/Atoms/Warning';
import { Colors } from 'components/Atoms/Button';
import SpecialButton from 'components/Atoms/SpecialButton';
import { isAddressValid, parseNumber } from 'helpers/general';
import Error from 'components/Atoms/Error';
import Overlay from 'components/Atoms/Overlay';
import { CurrencyItem } from 'components/Molecules/swap/Currency';
import PickCurrencyModal from 'components/Molecules/swap/PickerModal';
import { MAX_TKL, MIN_TKL } from 'helpers/swapConfig';
import Step from 'components/Molecules/swap/Step';
import breakpoints from 'styles/breakpoints';
import { SellTokelResult } from 'helpers/swapApiCalls';
import Spinner from 'components/Atoms/Spinner';

const BoxTitle = styled.h3`
  text-transform: uppercase;
  background: var(--gradient-purple-direct);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 400;
`;

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
  createSwapEvent: (
    depositAmount: string,
    receivingAddress: string,
    chosenCurrency: string,
    receivingAmount: number
  ) => Promise<SellTokelResult>;
};

export default function CreateSwap({ createSwapEvent }: CreateSwapProps) {
  const [prices, setPrices] = useState({});
  const [receivingAddress, setReceivingAddress] = useState('');
  const [receivingAmount, setReceivingAmount] = useState(0);
  const [chosenCurrency, setChosenCurrency] = useState('KMD');
  const [depositAmount, setDepositAmount] = useState(0);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);

  const minValue = useMemo(() => MIN_TKL * prices[chosenCurrency], [chosenCurrency, prices]);
  const maxValue = useMemo(() => MAX_TKL * prices[chosenCurrency], [chosenCurrency, prices]);
  const setDeposit = (num: number | string) => setDepositAmount(parseNumber(num));

  // get prices for the currencies
  useEffect(() => {
    // call to get prices
    console.log('Simulating setting prices');
    const currentPrices = {
      KMD: 0.3,
      LTC: 0.00895,
      BTC: 0.00004305,
    };
    setPrices(currentPrices);
  }, []);

  useEffect(() => {
    !depositAmount && prices[chosenCurrency] && setDepositAmount(minValue);
    setShowModal(false);
  }, [prices, chosenCurrency]);

  useEffect(() => {
    let tkl = depositAmount / prices[chosenCurrency];
    if (tkl > MAX_TKL) {
      tkl = MAX_TKL;
      setDeposit(maxValue);
    }
    setReceivingAmount(parseNumber(tkl));
  }, [depositAmount, chosenCurrency]);

  const submitSwapInfo = () => {
    setError('');

    if (depositAmount < minValue) {
      return setError('Deposit amount too small.');
    }
    if (!isAddressValid(receivingAddress)) {
      return setError('Invalid Address');
    }
    if (receivingAmount < MIN_TKL) {
      setDeposit(minValue);
      return setError(`Minimum Swap Amount ${MIN_TKL}TKL`);
    }
    if (receivingAmount > MAX_TKL) {
      setDeposit(maxValue);
      return setError(`Maximum Swap Amount ${MAX_TKL}TKL`);
    }
    setShowSpinner(true);
    return createSwapEvent(
      depositAmount.toString(),
      receivingAddress,
      chosenCurrency,
      receivingAmount
    )
      .then(() => setShowSpinner(false))
      .catch(e => {
        console.log(e);
        setError(e.message);
      });
  };

  return (
    <div>
      <Overlay displayOverlay={showModal} />
      {showModal && <PickCurrencyModal values={prices} pickCurrency={setChosenCurrency} />}
      <BoxTitle>Create Swap</BoxTitle>
      <Step title="1. Enter amount you want to swap">
        <Currencies>
          <CurrencyItem
            title="You send"
            currencyName={chosenCurrency}
            value={depositAmount}
            onChange={val => setDepositAmount(val.target.value)}
            onClick={() => setShowModal(true)}
            onBlur={() => (depositAmount < minValue ? setDeposit(minValue) : null)}
            note={`1 ${chosenCurrency} =  ${parseNumber(1 / prices[chosenCurrency])} TKL`}
          />
          <CurrencyItem
            title="You receive"
            currencyName="TKL"
            value={receivingAmount}
            disabled
            note="min 500 max 50,000 TKL"
          />
        </Currencies>
      </Step>
      <Step title="2. ENTER YOUR RECEIVING TKL ADDRESS">
        <WarningWrapper text="Please double check the address below. That is where you will receive your TKL" />
        <VSpacerSmall />
        <Input
          width="342px"
          value={receivingAddress}
          onChange={e => setReceivingAddress(e.target.value)}
        />
        <Error>{error}</Error>
        {showSpinner && <Spinner />}
      </Step>
      <SpecialButton theme={Colors.PURPLE} onClick={() => submitSwapInfo()}>
        <h5>Lets swap</h5>
      </SpecialButton>
    </div>
  );
}
