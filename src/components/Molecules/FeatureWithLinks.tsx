import styled from '@emotion/styled';
import nSPVLinks from 'data/nSpvLinks';

import React from 'react';
import { FlexCol } from 'styles/common';
import FeatureHeader from './FeatureHeader';
import nspv from 'images/features/nspv.svg';

type FeatureProps = {
  title: string;
  subtitle: string;
  image?: string;
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
  padding-bottom: 15rem;
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
  background: url(${nspv});
  background-repeat: no-repeat;
  background-position: center 200px;
`;

const LinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 13rem;
  max-width: 1000px;
  column-gap: 20rem;
`;

const link = (idx, url, urlName) => (
  <a style={{ marginTop: '1rem', maxWidth: '300px' }} key={idx} href={url}>
    {urlName}
  </a>
);

const FeatureWithLinks = ({ title, subtitle, desc }: FeatureProps) => (
  <FeatureRoot>
    <FeatureHeader title={title} subtitle={subtitle} desc={desc} />
    <LinksWrapper>
      <FlexCol>
        {nSPVLinks.map((one, idx) => idx % 2 == 0 && link(idx, one.url, one.urlName))}
      </FlexCol>
      <FlexCol>
        {nSPVLinks.map((one, idx) => idx % 2 != 0 && link(idx, one.url, one.urlName))}
      </FlexCol>
    </LinksWrapper>
  </FeatureRoot>
);

export default FeatureWithLinks;
