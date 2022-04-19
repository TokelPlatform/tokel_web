import styled from '@emotion/styled';
import PurpleBorderBox from 'components/Atoms/PurpleBorderBox';
// import OutsideAlerter from 'helpers/OutsideAlerter';
import React from 'react';
import { FlexRow } from 'styles/common';
import { Currency } from './Currency';

type PickerModalProps = {
  pickCurrency: (val: any) => void;
  values: any;
  closeMe?: () => void;
};

const CurrencyBox = styled(PurpleBorderBox)`
  z-index: 7;
  height: 400px;
  width: 400px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

// eslint-disable-next-line no-unused-vars
const PickerModal = ({ pickCurrency, values }: PickerModalProps) => {
  const currencies = Object.keys(values);
  return (
    <CurrencyBox>
      <FlexRow>
        {currencies.map(curr => (
          <Currency key={curr} currencyName={curr} onClick={() => pickCurrency(curr)} />
        ))}
      </FlexRow>
    </CurrencyBox>
  );
};

export default PickerModal;
