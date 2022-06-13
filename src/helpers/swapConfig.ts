import { toSatoshi } from 'satoshi-bitcoin'
import BN from 'bn.js'
import { toBitcoinAmount } from './general';

export const SATOSHIS = 100000000;

export const Config = {
  DECIMAL: 8,
  DECIMAL_FIAT: 6,
};

export const MIN_TKL = '10';
export const MAX_TKL = '50000';

export const TX_FETCH_INTERVAL_MS = 5 * 1000;

export enum SwapStep {
    CREATE = 'create',
    FINISH = 'finish',
    SUCCESS = 'success',
    ERROR = 'error',
  }

export const lessThan = (a: BN, b: BN): BN => new BN(toSatoshi(a)).lt(new BN(toSatoshi(b)));

export const moreThan = (a: BN, b: BN): BN => new BN(toSatoshi(a)).gt(new BN(toSatoshi(b)));

/**
 * @param amount in TKL in Bitcoin Format
 * @param price in TKL Satoshi
 * @returns string in Bitcoin Format
 */
export const getDepositValue = (amount: string, price: string): string => toBitcoinAmount(new BN(amount).mul(new BN(price)).toString());

/**
 * @param amount: string in Bitcoin Format
 * @param price: string in Satoshi
 * @returns string in Bitcoin Format
 */
export const  getTKLValue = (amount: string, price: string): string => (new BN(toSatoshi(amount)).div(new BN(price))).toString();

/**
 * Need this to avoid javascript number tricks
 * @param amnt user input (bitcoin format)
 * @returns 
 */
export const getBtcFormatAmount = (amnt: string) => toBitcoinAmount(toSatoshi(amnt));