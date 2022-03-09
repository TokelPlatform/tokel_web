import React from 'react';
import TableHeaderLogo from 'components/Molecules/table/TableHeaderLogo';
import check from 'images/table/check.svg';
import close from 'images/table/close.svg';
import ether from 'images/table/ether.svg';
import solana from 'images/table/solana.svg';
import tokel from 'images/table/tokel.svg';
import tableImage from 'components/Atoms/RepeatedIcon';

export const columns = [
  {
    Header: '',
    accessor: 'rowname',
  },
  {
    Header: TableHeaderLogo('Solana', solana),
    accessor: 'solana',
  },
  {
    Header: TableHeaderLogo('Ethereum', ether),
    accessor: 'ethereum',
  },
  {
    Header: TableHeaderLogo('Tokel', tokel),
    accessor: 'tokel',
  },
];

export const data = [
  {
    rowname: (
      <p>
        GAS FEE per <br />
        transaction
      </p>
    ),
    solana: '$0.00025*',
    ethereum: '$4.04++**',
    tokel: '$0*',
  },
  {
    rowname: (
      <p>
        COST TO CREATE
        <br /> ONE NFT
      </p>
    ),
    solana: '$2.16',
    ethereum: '$70.00++**',
    tokel: '$0.000003',
  },
  {
    rowname: 'OPEN SOURCE',
    solana: tableImage(check),
    ethereum: tableImage(check),
    tokel: tableImage(check),
  },
  {
    rowname: (
      <p>
        ALL IN ONE <br /> APPLICATION
      </p>
    ),
    solana: tableImage(close),
    ethereum: tableImage(close),
    tokel: tableImage(check),
  },
  {
    rowname: 'LIGHT CLIENTS',
    solana: tableImage(close),
    ethereum: tableImage(close),
    tokel: tableImage(check),
  },
  {
    rowname: (
      <p>
        Smart contracts/ <br /> contract audits
      </p>
    ),
    solana: tableImage(check),
    ethereum: tableImage(check),
    tokel: tableImage(close),
  },
];
