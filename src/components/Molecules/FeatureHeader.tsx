import styled from '@emotion/styled';

import React from 'react';

type FeatureHeaderProps = {
  title: string;
  subtitle: string;
  image?: string;
  desc: string;
};

export const BoxTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FeatureHeaderRoot = styled.div`
  margin-top: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3,
  h2 {
    margin: 0;
  }
  h3 {
    color: var(--color-base-lilac);
  }
`;

const FeatureHeader = ({ title, subtitle, desc, image }: FeatureHeaderProps) => (
  <FeatureHeaderRoot>
    <h3>{subtitle}</h3>
    <h2>{title}</h2>
    <p>{desc}</p>
    <img src={image}></img>
  </FeatureHeaderRoot>
);

export default FeatureHeader;
