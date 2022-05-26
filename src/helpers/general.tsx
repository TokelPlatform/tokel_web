export const isAddressValid = address =>
  address && address !== '' && /^[a-km-zA-HJ-NP-Z1-9]{26,35}$/.test(address);

export const exchangeIdRegex = /^[0-9a-z]{13}$/i;

export const hello = 'jello';
