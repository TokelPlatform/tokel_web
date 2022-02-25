import styled from '@emotion/styled';

import React from 'react';
import { FlexColRight } from 'styles/common';
import FeatureHeader from './FeatureHeader';
import TextBox from '../TextBox';

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
  data?: any;
  bg?: boolean;
  banner?: any;
};

export const BoxTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
type FeatureRootProps = {
  bg: string;
};
const FeatureRoot = styled.div<FeatureRootProps>`
  margin-top: 5rem;
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
  background: url(${p => (p.bg ? p.bg : 'none')});
  background-repeat: no-repeat;
  background-position: center 60px;
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

const TextBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 2rem;
`;

const Feature = ({
  title,
  subtitle,
  desc,
  image,
  data,
  links,
  bg = null,
  banner = null,
}: FeatureProps) => (
  <FeatureRoot bg={bg}>
    <FeatureHeader title={title} subtitle={subtitle} desc={desc} image={image} />
    {!links ? (
      <TextBoxWrapper>
        {data.map((one, idx) => (
          <TextBox key={idx} title={one.title} desc={one.desc} links={one.links} />
        ))}
      </TextBoxWrapper>
    ) : (
      <LinksWrapper>
        <FlexColRight>
          {links.map((one, idx) => idx % 2 == 0 && link(idx, one.url, one.urlName))}
        </FlexColRight>
        <FlexColRight>
          {links.map((one, idx) => idx % 2 != 0 && link(idx, one.url, one.urlName))}
        </FlexColRight>
      </LinksWrapper>
    )}
    {banner && banner}
  </FeatureRoot>
);

export default Feature;
