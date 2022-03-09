import React from 'react';

const TableHeaderLogo = (title: string, src: string) => (
  <div>
    <img alt="table-header-logo" src={src}></img>
    <h4>{title}</h4>
  </div>
);

export default TableHeaderLogo;
