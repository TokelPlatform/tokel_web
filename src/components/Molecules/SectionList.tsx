import React, { ReactElement } from 'react';

// import breakpoints from '../../styles/breakpoints';
import styled from '@emotion/styled';
import { FlexColCenter, FlexCenterRow, VSpacerMedium } from 'styles/common';
import icons from 'data/icons';

const SectionListRoot = styled(FlexColCenter)`
  margin-top: 5rem;
`;

type SectionListProps = {
  data: any;
  title: string;
};

const SectionList = ({ title, data }: SectionListProps): ReactElement => (
  <SectionListRoot>
    <h2>{title}</h2>
    <VSpacerMedium />
    <FlexCenterRow>
      {data.map((p, idx) => (
        <div key={idx}>
          {p.name && <h4>{p.name}</h4>}
          <img src={icons[p.icon]}></img>
        </div>
      ))}
    </FlexCenterRow>
  </SectionListRoot>
);

export default SectionList;
