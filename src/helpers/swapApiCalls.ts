/* eslint-disable no-unused-vars */
// import axios from 'axios';

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

// eslint-disable-next-line no-unreachable
// const API = 'https://dexstats.info/api/';

// const SELL = (depositCoin: string, receivingAddress: string, receivingAmount: number) =>
//   `selltokel.php?depositcoin=${depositCoin}&receivingaddress=${receivingAddress}&amount=${receivingAmount}`;

// const LOOKUP = (id: string) => `exchangestatus.php?exchangeid=${id}`;

// const GET = async () => {

  // try {
  //   const res = await axios(uri);
  //   console.log(uri);
  //   console.log(res)
  //   console.log(res.data);
  //   return res.data;
  // } catch (e) {
  //   console.log(e);
  //   return {
  //     result: 'error',
  //     error: e.message,
  //   };
  // }
// };

export const createDeposit = async (
  depositCoin: string,
  receivingAddress: string,
  receivingAmount: number
): Promise<SellTokelResult> => {return {"result":"success","depositaddress":"RUBXucqeciczETUkqhSCkavMCCdGAZrECi","receivingaddress":"RQ2SPQedyuGnWxTfAmzNjqRTN1hd3LkSrn","depositamount":"76.61023567","depositcoin":"KMD","receivingamount":"46482","receivingcoin":"TKL","exchangeid":"626e8f69322ca"}}
// return {"result":"error","error":"min-order-is-1000"}
// GET(API + SELL(depositCoin, receivingAddress, receivingAmount));

export const lookupSwapApi = async (id: string): Promise<ExchangeStatusResult> => {
return {"result":"success","onboardingid":"626e8f69322ca","sendingtrx":"ad9062dc5bf2108a3d27488b00923ada6f393a088e9a65187e21948f0c6aa68b","sentamount":100,"senttoaddress":"RMaprYNUp8ErJ9ZAKcxMfpC4ioVycYCCCc","sentcoin":"TKL","sendingtrxurl":"https://explorer.tokel.io/tx/ad9062dc5bf2108a3d27488b00923ada6f393a088e9a65187e21948f0c6aa68b","paymenttrx":"743fdefe92a9d06f79baf2b3b9acbbb451543d27cefac3b871142fd272c0474e","depositcoin":"BTC","depositamount":0.00011035,"depositaddress":"bc1qmaj38pdnj7tp6zm4hpkmslhs6kclj0elqkvf5j","paymenttrxurl":"https://blockchair.com/bitcoin/transaction/743fdefe92a9d06f79baf2b3b9acbbb451543d27cefac3b871142fd272c0474e","complete":1}
}
  // GET(API + LOOKUP(id));
