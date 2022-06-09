import BN from 'bn.js';
import { toBitcoin } from 'satoshi-bitcoin';
import { Config, SATOSHIS } from './swapConfig';

export const isAddressValid = address =>
  address && address !== '' && /^[a-km-zA-HJ-NP-Z1-9]{26,35}$/.test(address);

export const exchangeIdRegex = /^[0-9a-z]{13}$/i;

export const toBitcoinAmount = (amountInSatoshi: string): string => {
  const bnAmountInSatoshi = new BN(amountInSatoshi);
  const bnSatoshis = new BN(SATOSHIS);
  let value;
  let decimals;

  if (bnAmountInSatoshi.lt(bnSatoshis)) {
    value = parseInt(amountInSatoshi, 10) / SATOSHIS;
    value = Number(value.toFixed(Config.DECIMAL));
  } else {
    value = bnAmountInSatoshi.div(bnSatoshis).toNumber();
    decimals = toBitcoin(bnAmountInSatoshi.mod(bnSatoshis).toNumber());

    value = Number(value + decimals);
  }

  return value.toString();
};

export const hello = 'jello';
