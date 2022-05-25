import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import PurpleBorderBox from 'components/Atoms/PurpleBorderBox';
// import OutsideAlerter from 'helpers/OutsideAlerter';
import close from 'images/table/close.svg';
import React from 'react';
import { FlexColCenter, FlexRow } from 'styles/common';
import { Currency } from './Currency';

type PickerModalProps = {
  pickCurrency: (val: any) => void;
  values: any;
  closeMe?: () => void;
};

const blowUpModal = keyframes`
    0% {
      transform:scale(0);
    }
    100% {
      transform:scale(1);
    }
`;

const CurrencyBox = styled(PurpleBorderBox)`
  z-index: 7;
  padding: 2rem;
  position: absolute;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
  h3 {
    margin-bottom: 0.5rem;
  }
  h4 {
    margin-top: 0.5rem;
  }
  animation: ${blowUpModal} 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
`;

const CurrencyRow = styled(FlexRow)`
  column-gap: 1rem;
  row-gap: 1rem;
  flex-wrap: wrap;
  flex-basis: 50%;
  align-items: center;
  justify-content: center;
`;

const Close = styled.div`
  position: absolute;
  right: 1rem;
  top: 1rem;
  &:hover {
    cursor: pointer;
  }
`;

// eslint-disable-next-line no-unused-vars
const PickerModal = ({ pickCurrency, values, closeMe }: PickerModalProps) => {
  const currencies = Object.keys(values);
  return (
    <CurrencyBox>
      <Close>
        <img src={close} width="42px" height="42px" onClick={() => closeMe()} />
      </Close>
      <FlexColCenter>
        <h3 style={{ marginTop: '0.5rem' }}>YOU SEND</h3>
        <h4>Pick currency you want to swap TKL for</h4>
      </FlexColCenter>
      <CurrencyRow>
        {currencies.map(curr => (
          <Currency key={curr} currencyName={curr} onClick={() => pickCurrency(curr)} />
        ))}
      </CurrencyRow>
    </CurrencyBox>
  );
};

export default PickerModal;
