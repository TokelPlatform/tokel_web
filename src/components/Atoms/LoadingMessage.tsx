import React, { ReactElement } from 'react';

import satelite from 'images/planets/satelite.svg';

const LoadingMessage = (): ReactElement => (
  <div style={{ justifySelf: 'center', alignSelf: 'center' }}>
    <h3>Loading... </h3>
    <h4>It will only take a few seconds.</h4>
    <img src={satelite}></img>
  </div>
);

export default LoadingMessage;
