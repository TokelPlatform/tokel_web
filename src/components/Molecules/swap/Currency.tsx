import styled from '@emotion/styled';
import { GrayLabel } from 'components/Atoms/GrayLabel';
import Input from 'components/Atoms/Input';
import PurpleBorderBox from 'components/Atoms/PurpleBorderBox';
import icons from 'data/icons';
import React from 'react';
import { FlexCol, VSpacerMedium } from 'styles/common';

const CurrencyRoot = styled(PurpleBorderBox)<CurrencyProps>`
  padding: 10px 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 186px;
  min-height: ${p => (p.title ? '170px' : '130px')};
  transition: box-shadow 0.25s;
  border-radius: 0;
  h4 {
    margin: 0;
    margin-top: 1rem;
    font-size: 18px;
  }
  ${p =>
    !p.disabled &&
    `&:hover {
          box-shadow: 0 0 5px 5px var(--color-purple);
          cursor: pointer;
      }`}
`;

type CurrencyProps = {
  disabled?: boolean;
  onClick?: (val: any) => void;
  currencyName?: string;
  amount?: string;
  title?: string;
};

export const Currency = ({ disabled, onClick, currencyName, amount, title }: CurrencyProps) => {
  return (
    <CurrencyRoot disabled={disabled} onClick={onClick} title={title}>
      {title && <GrayLabel>{title}</GrayLabel>}
      <img src={icons[currencyName]} width="50" height="50"></img>
      <h4>
        {amount && parseFloat(amount)} {currencyName}
      </h4>
    </CurrencyRoot>
  );
};

type CurrencyItemProps = {
  title: string;
  currencyName: string;
  value: number;
  disabled?: boolean;
  note?: string;
  onChange?: (val: any) => void;
  onClick?: (val: any) => void;
  onBlur?: () => void;
};

export const CurrencyItem = ({
  title,
  currencyName,
  value,
  disabled,
  note,
  onChange,
  onClick,
  onBlur,
}: CurrencyItemProps) => (
  <FlexCol>
    <Currency
      disabled={disabled || !onClick}
      title={title}
      onClick={onClick}
      currencyName={currencyName}
    />
    <VSpacerMedium />
    <Input
      width="166px"
      value={value || '0'}
      disabled={disabled}
      onChange={a => onChange(a)}
      type="number"
      onFocus={e => (e.target.value === '0' ? (e.target.value = '') : e.target.value)}
      onBlur={onBlur}
    />
    <p style={{ fontSize: 'var(--font-size-small-p)', opacity: '0.6', marginTop: '0.25rem' }}>
      {note}
    </p>
  </FlexCol>
);
