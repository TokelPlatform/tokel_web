import React from 'react';
import { FlexRowCenter } from 'styles/common';

const tableImage = (src: string, c: number = 1) => {
  let imgs = [];
  for (let i = 0; i < c; i++) {
    imgs.push(<img alt={'tableImage' + i} key={i} src={src} />);
  }
  return <FlexRowCenter>{imgs}</FlexRowCenter>;
};

export default tableImage;
