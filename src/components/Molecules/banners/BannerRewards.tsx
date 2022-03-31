import React from 'react';
import styled from '@emotion/styled';
import Button, { Colors } from 'components/Atoms/Button';
import tokelist from 'images/tokelist.svg';
import links from 'data/links';
import breakpoints from 'styles/breakpoints';
import { FlexRow } from 'styles/common';

const BannerRewardsRoot = styled(FlexRow)`
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
  width: 100%;
  margin: auto;
  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const YellowLine = styled.div`
  height: 10px;
  width: 300px;
  background: var(--color-base-richyellow);
  margin: 1rem 0;
`;

const ButtonWrapper = styled.div`
  margin-top: 3rem;
  background: url(${tokelist});
  background-repeat: no-repeat;
  height: 150px;
  background-position: center 50px;
`;

const BannerRewards = () => {
  return (
    <BannerRewardsRoot>
      <div>
        <YellowLine />
        <h2>
          Become a Tokelist and <br /> earn rewards
        </h2>
        <YellowLine />
      </div>
      <ButtonWrapper>
        <Button url={links.tokelistArticle} theme={Colors.BLACK} text="Learn More" />
      </ButtonWrapper>
    </BannerRewardsRoot>
  );
};

export default BannerRewards;
