import styled from '@emotion/styled';
import GrayLabel from 'components/Atoms/GrayLabel';
import Input from 'components/Atoms/Input';
import PurpleBorderBox from 'components/Atoms/PurpleBorderBox';
import icons from 'data/icons';
import React from 'react';
import { FlexCol, VSpacerMedium } from 'styles/common';

type CurrencyProps = {
  disabled?: boolean;
  onClick?: (val: any) => void;
  currencyName?: string;
};

const CurrencyRoot = styled(PurpleBorderBox)<CurrencyProps>`
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

type CurrencyItemProps = {
  title: string;
  currencyName: string;
  value: number;
  disabled?: boolean;
  note?: string;
  onChange?: (val: any) => void;
  onClick?: (val: any) => void;
};

export const Currency = ({ disabled, onClick, currencyName }: CurrencyProps) => {
  return (
    <CurrencyRoot disabled={disabled} onClick={onClick}>
      <img src={icons[currencyName]} width="60" height="60"></img>
      <h4>{currencyName}</h4>
    </CurrencyRoot>
  );
};

export const CurrencyItem = ({
  title,
  currencyName,
  value,
  disabled,
  note,
  onChange,
  onClick,
}: CurrencyItemProps) => (
  <FlexCol>
    <GrayLabel>{title}</GrayLabel>
    <Currency disabled={disabled} onClick={onClick} currencyName={currencyName} />
    <VSpacerMedium />
    <Input
      width="166px"
      value={value}
      disabled={disabled}
      onChange={a => onChange(a)}
      type="number"
      onFocus={e => (e.target.value === '0' ? (e.target.value = '') : e.target.value)}
    />
    <p style={{ opacity: '0.6', marginTop: '0.25rem' }}>{note}</p>
  </FlexCol>
);
