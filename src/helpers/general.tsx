const FIXED_POINT = 6;

export const isAddressValid = address =>
  address && address !== '' && /^[a-km-zA-HJ-NP-Z1-9]{26,35}$/.test(address);

export const parseNumber = num => Number(num.toFixed(FIXED_POINT));

export const exchangeIdRegex = /^[0-9a-z]{13}$/i;

export const hello = 'jello';
