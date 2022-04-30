import styled from '@emotion/styled';
import ClickableIcon from 'components/Atoms/ClickableIcon';
import icons from 'data/icons';
import React from 'react';
import { FlexRow } from 'styles/common';
import Img, { FixedObject } from 'gatsby-image';

type ContributorProps = {
  name: string;
  position: string;
  imageCircle: FixedObject;
  socials: [
    {
      type: string;
      link: string;
    }
  ];
};

const ContributorRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 270px;
  h5 {
    margin: 18px 0 8px 0;
    color: var(--color-base-slate);
  }
  p {
    margin-bottom: 0;
  }
`;

const Position = styled.p`
  width: 200px;
  height: 70px;
  margin-top: 0;
`;

export default function Contributor({ name, position, imageCircle, socials }: ContributorProps) {
  return (
    <ContributorRoot>
      <Img alt={name} fixed={imageCircle}></Img>
      <h5>{name}</h5>
      <Position>{position}</Position>
      <FlexRow>
        {socials.map(soc => (
          <ClickableIcon width="24px" key={soc.link} link={soc.link} icon={icons[soc.type]} />
        ))}
      </FlexRow>
    </ContributorRoot>
  );
}
