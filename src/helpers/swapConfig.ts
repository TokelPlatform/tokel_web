import { toSatoshi } from 'satoshi-bitcoin'
import BN from 'bn.js'

export const SATOSHIS = 100000000;

export const Config = {
  DECIMAL: 8,
  DECIMAL_FIAT: 6,
};

export const MIN_TKL = new BN(10);
export const MAX_TKL = new BN(50000)

export const MAX_TKL_SAT = new BN(toSatoshi(MAX_TKL.toString()));
export const MIN_TKL_SAT = new BN(toSatoshi(MIN_TKL.toString()));

export const MAX_TKL_TEXT = MAX_TKL.toString();
export const MIN_TKL_TEXT = MIN_TKL.toString();

export const TX_FETCH_INTERVAL_MS = 5 * 1000;

export enum SwapStep {
    CREATE = 'create',
    FINISH = 'finish',
    SUCCESS = 'success',
    ERROR = 'error',
  }

  export const lessThan = (a, b) => new BN(toSatoshi(a)).lt(b);
  export const moreThan = (a, b) => new BN(toSatoshi(a)).gt(b);