/* eslint-disable no-unused-vars */
import axios from 'axios';

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

const API = 'https://dexstats.info/api/';

const SELL = (depositCoin: string, receivingAddress: string, receivingAmount: number) =>
  `selltokel.php?depositcoin=${depositCoin}&receivingaddress=${receivingAddress}&amount=${receivingAmount}`;

const LOOKUP = (id: string) => `exchangestatus.php?exchangeid=${id}`;

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

export const createDeposit = async (
  depositCoin: string,
  receivingAddress: string,
  receivingAmount: number
): Promise<SellTokelResult> => 
GET(API + SELL(depositCoin, receivingAddress, receivingAmount));


export const lookupSwapApi = async (id: string): Promise<ExchangeStatusResult> => 
  GET(API + LOOKUP(id));
