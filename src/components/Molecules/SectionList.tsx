import React, { ReactElement } from 'react';

import styled from '@emotion/styled';
import { FlexColCenter, FlexRowCenter, VSpacerMedium } from 'styles/common';
import icons from 'data/icons';
import breakpoints from 'styles/breakpoints';
import links from 'data/links';

const SectionListRoot = styled(FlexColCenter)`
  margin-top: 5rem;
  padding: 2rem;
`;

type SectionListProps = {
  data: any;
  title: string;
  linkName: string;
};

const Wrapper = styled(FlexRowCenter)`
  gap: 4rem;
  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
  }
`;

const SectionList = ({ title, data }: SectionListProps): ReactElement => (
  <SectionListRoot>
    <h2>{title}</h2>
    <VSpacerMedium />
    <Wrapper>
      {data.map((p, idx) => (
        <FlexColCenter key={idx}>
          <a href={links[p.linkName]}>
            <img alt={'sectionImage' + idx} src={icons[p.icon]}></img>
          </a>
          {p.name && <h4>{p.name}</h4>}
        </FlexColCenter>
      ))}
    </Wrapper>
  </SectionListRoot>
);

export default SectionList;
