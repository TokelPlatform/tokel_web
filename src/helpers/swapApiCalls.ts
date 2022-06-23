/* eslint-disable no-unused-vars */
import axios from 'axios';

import { getTKLValue, MIN_TKL } from './swapConfig';

// https://dexstats.info/api/selltokel.php?depositcoin=KMD&receivingaddress=RMaprYNUp8ErJ9ZAKcxMfpC4ioVycYCCCc&amount=0.08
export interface SellTokelResult {
  result: string;
  error?: string;
  depositaddress: string;
  receivingaddres: string;
  depositamount: number;
  depositcoin: string;
  receivingamount: number;
  receivingcoin: string;
  exchangeid: string;
}

export interface SellTokelResultError {
  result: string;
  error: string;
}

// https://dexstats.info/api/exchangestatus.php?exchangeid=626e8f69322ca
export interface ExchangeStatusResult {
  result: string;
  onboardingid: string; //same as exchangeid
  sendingtrx: string; // transaction sent to the user, TKL tx
  sentamount: number; // TKL amount
  senttoaddress: string;
  sentcoin: string;
  sendingtrxurl: string;
  paymenttrx: string; // the tx of other currency received for swap
  depositcoin: string;
  depositamount: number;
  depositaddress: string;
  paymenttrxurl: string;
  complete: number;
}

export interface ExchangeStatusResultError {
  result: string;
  error: string;
}

const API = 'https://dexstats.info/api/';

const SELL = (depositCoin: string, receivingAddress: string, receivingAmount: number) =>
  `selltokel.php?depositcoin=${depositCoin}&receivingaddress=${receivingAddress}&amount=${receivingAmount}`;

const LOOKUP = (id: string) => `exchangestatus.php?exchangeid=${id}`;

const GET_PRICES = (depositCoin: string, amount: string) => `selltokel.php?depositcoin=${depositCoin}&amount=${amount}&priceonly=true`

const GET = async uri => {

  try {
    const res = await axios(uri);
    return res.data;
  } catch (e) {
    console.log(e);
    return {
      result: 'error',
      error: e.message,
    };
  }
};

export const getPrice = async (
  depositCoin: string,
  receivingAmount: string) =>
GET(API + GET_PRICES(depositCoin, receivingAmount));

const getPricePerOne = (value: string): string => getTKLValue(value, MIN_TKL);

export const getAllPrices = async () => {
  try {
    const kmd = await getPrice('KMD', MIN_TKL);
    const ltc = await getPrice('LTC', MIN_TKL);
    const btc = await getPrice('BTC', MIN_TKL);
    const error = kmd.error ? kmd.error : (ltc.error ? ltc.error : btc.error)
    if(error) {
      throw new Error(error);
    }
    return {
      KMD: getPricePerOne(kmd.depositamount),
      LTC: getPricePerOne(ltc.depositamount),
      BTC: getPricePerOne(btc.depositamount),
    }
  } catch (e) {
    if (process.env.NODE_ENV === 'development') {
      return {
        KMD: 1,
        LTC: 1,
        BTC: 1
      }
    } else {
      throw new Error(e);
    }
  }
}

export const createDeposit = async (
  depositCoin: string,
  receivingAddress: string,
  receivingAmount: number
): Promise<SellTokelResult | SellTokelResultError> => 
GET(API + SELL(depositCoin, receivingAddress, receivingAmount));


export const lookupSwapApi = async (id: string): Promise<ExchangeStatusResult | ExchangeStatusResultError> => 
  GET(API + LOOKUP(id));
  {

    // ERROR RESPONSE
    // return {
    //   "result": "error",
    //   "error": "exchange-timed-out"
    //   }

    // PENDING

    // return {
    //   "result": "pending",
    //   "onboardingid": "62b3e88853d1d",
    //   "sendingtrx": null,
    //   "sentamount": "1000.0000000000000000",
    //   "senttoaddress": "RRaZk3ENnGjeZitMxxQv1qVVPckjQXTyDY",
    //   "sentcoin": "TKL",
    //   "sendingtrxurl": "https://explorer.tokel.io/tx/",
    //   "paymenttrx": null,
    //   "depositcoin": "KMD",
    //   "depositamount": "27.2071592900000000",
    //   "depositaddress": "RFSuaZbosy45zebSU6vdfj98D6awwyd6x9",
    //   "espilapsed": 6822,
    //   "timeleft": 14778,
    //   "paymenttrxurl": "https://kmd.explorer.dexstats.info/tx/",
    //   "complete": 0
    // }

    // SUCCESS

    // return {
    //   "result": "success",
    //   "onboardingid": "626e8f69322ca",
    //   "sendingtrx": "ad9062dc5bf2108a3d27488b00923ada6f393a088e9a65187e21948f0c6aa68b",
    //   "sentamount": 100,
    //   "senttoaddress": "RMaprYNUp8ErJ9ZAKcxMfpC4ioVycYCCCc",
    //   "sentcoin": "TKL",
    //   "sendingtrxurl": "https://explorer.tokel.io/tx/ad9062dc5bf2108a3d27488b00923ada6f393a088e9a65187e21948f0c6aa68b",
    //   "paymenttrx": "743fdefe92a9d06f79baf2b3b9acbbb451543d27cefac3b871142fd272c0474e",
    //   "depositcoin": "BTC",
    //   "depositamount": 0.00011035,
    //   "depositaddress": "bc1qmaj38pdnj7tp6zm4hpkmslhs6kclj0elqkvf5j",
    //   "paymenttrxurl": "https://blockchair.com/bitcoin/transaction/743fdefe92a9d06f79baf2b3b9acbbb451543d27cefac3b871142fd272c0474e",
    //   "complete": 1
    //   }
  }
