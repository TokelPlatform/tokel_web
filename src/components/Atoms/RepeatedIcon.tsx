import React from 'react';
import { FlexCenterRow } from 'styles/common';

const tableImage = (src: string, c: number = 1) => {
  let imgs = [];
  for (let i = 0; i < c; i++) {
    imgs.push(<img key={i} src={src} />);
  }
  return <FlexCenterRow>{imgs}</FlexCenterRow>;
};

export default tableImage;
