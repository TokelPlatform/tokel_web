import styled from '@emotion/styled';
import data from 'data/easyToUseData';

import React from 'react';
import { FlexCenterRow } from 'styles/common';
import FeatureHeader from './FeatureHeader';
import TextBox from './TextBox';

type FeatureProps = {
  title: string;
  subtitle: string;
  image: string;
  desc: string;
  links: [
    {
      url: string;
      urlName: string;
    }
  ];
};

export const BoxTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FeatureRoot = styled.div`
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

const Feature = ({ title, subtitle, desc, image }: FeatureProps) => (
  <FeatureRoot>
    <FeatureHeader title={title} subtitle={subtitle} desc={desc} image={image} />
    <FlexCenterRow>
      {data.map((one, idx) => (
        <TextBox key={idx} title={one.title} desc={one.desc} />
      ))}
    </FlexCenterRow>
  </FeatureRoot>
);

export default Feature;
