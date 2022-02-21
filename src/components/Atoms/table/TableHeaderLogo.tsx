import React from "react";

const TableHeaderLogo = (title: string, src: string) => (
    <div>
      <img src={src}></img>
      <h4>{title}</h4>
    </div>
  )

export default TableHeaderLogo;
  