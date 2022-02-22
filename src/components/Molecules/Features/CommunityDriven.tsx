import styled from '@emotion/styled';

import React from 'react';
import FeatureHeader from './FeatureHeader';
import footerData from 'data/footer';
import IconBlock from '../IconBlock';

type FeatureProps = {
  title: string;
  subtitle: string;
  image?: string;
  desc: string;
  data?: any;
  bg?: boolean;
};

export const BoxTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CommunityDrivenRoot = styled.div``;
const BlocksWrapper = styled.div`
  display: flex;
  max-width: 750px;
  column-gap: 3rem;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const CommunityDriven = ({ title, subtitle, desc, image }: FeatureProps) => (
  <CommunityDrivenRoot>
    <FeatureHeader title={title} subtitle={subtitle} desc={desc} image={image} />
    <BlocksWrapper>
      {footerData.map((col, idx) => (
        <IconBlock title={col.title} iconsList={col.icons} desc={col.desc} key={idx} idx={idx} />
      ))}
    </BlocksWrapper>
  </CommunityDrivenRoot>
);

export default CommunityDriven;
